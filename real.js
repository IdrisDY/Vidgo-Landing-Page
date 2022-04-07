


function Idrep(tag) {
   return document.getElementById(tag);
} 
function Classrep(tag) {
   return document.getElementsByClassName(tag);
}

const droplist = Classrep ("dropdown-list")
const dropdown = Idrep("dropdown-icon")
console.log(dropdown)
dropdown.onclick=function(event){
   console.log("working")
   document.getElementById("dropdown-list").classList.toggle("active")
   
}



