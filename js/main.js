var userName=document.getElementById("userName")
var userPhone=document.getElementById("userPhone")
var userStatue=document.getElementById("userStatue")
var myBtn=document.getElementById("myBtn")
var infoContainer
var currentUser;
if (localStorage.getItem("userList") != null){
    infoContainer= JSON.parse(localStorage.getItem("userList"))
    displayInfo() 
}
else{
    infoContainer=[]
}
myBtn.onclick=function(){
    if (myBtn.innerHTML=="Add"){
        addInfo()
    }
    else{
        updateStatue()
    }
}

function addInfo(){
    var User={
        name:userName.value,
        phone:userPhone.value,
        statue:userStatue.value
    }
    infoContainer.push(User)
    localStorage.setItem("userList",JSON.stringify(infoContainer))
  
    displayInfo()
    clearInfo()
}


function displayInfo(){
var cartona="";
for (let i = 0; i < infoContainer.length; i++) {
    infoContainer[i]
    cartona+=` <tr>
    <td>${i}</td>
    <td>${infoContainer[i].name}</td>
    <td>${infoContainer[i].phone}</td>
    <td>${infoContainer[i].statue}</td>
    <td><button class="btn btn-warning" onclick="updateStatue(${i})" title="You can Update your statue only">Update</button></td>
    <td><button class="btn btn-danger" onclick="deleteStatue(${i})" title="You can delete your statue only">Delete</button></td>
</tr>` 
    
}
  document.getElementById("tableBody").innerHTML=cartona
}
function deleteStatue(index){
    // var cartona=""
    // for (var i=0; i<infoContainer.length;i++)
    // {
    //     infoContainer[index]
    //     delete infoContainer[index].statue 
      
    // }
    currentUser=index
    infoContainer[currentUser].statue = " ";
    displayInfo()
    localStorage.setItem("userList",JSON.stringify(infoContainer))
}

// function updateInfo(index){
   
//     currentUser=infoContainer[index]
//     userName.value=currentUser.name
//     userPhone.value=currentUser.phone
//     userStatue.value=currentUser.statue

//     myBtn.innerHTML="Update"

//     currentUser=index

// }

function updateStatue(index){
    currentUser=index
     if( infoContainer[currentUser].statue=="active" || infoContainer[currentUser].statue=="Active" ){
        infoContainer[currentUser].statue = "inactive";
     }
     else{
        infoContainer[currentUser].statue ="Active";
     }
     displayInfo()
     localStorage.setItem("userList",JSON.stringify(infoContainer))
    // infoContainer[currentUser].statue = userStatue.value;
    // displayInfo()
    // localStorage.setItem("userList",JSON.stringify(infoContainer))
    // clearInfo()
    // myBtn.innerHTML="Add"
}

function clearInfo(){
    userName.value=""
    userPhone.value=""
    userStatue.value=""
}