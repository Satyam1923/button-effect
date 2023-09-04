function color(){
   var elements = document.querySelector("#block");
   if(elements.classList.contains("white")){
    elements.classList.remove("white");
    elements.classList.add("black");
   }
   else{
    elements.classList.remove("black");
    elements.classList.add("white");
   }
}