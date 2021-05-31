var eyc;
var r=1;
var elw;
var mouseEvent="empty";
var lastxposition;
var lastyposition
canvas = document.getElementById("Canvas");
 ctx= canvas.getContext("2d"); eyc = "red";
  elw=1 ;
 
width=screen.width;
newwidth=screen.width-20;
newheight=screen.height-300;
if (width<992){
    document.getElementById("Canvas").width=newwidth;
    document.getElementById("Canvas").height=newheight;
    document.body.style.overflow="hidden";
}



     canvas.addEventListener("mousedown", my_mousedown);
     function my_mousedown(e) {
     eyc=document.getElementById("eyc").value;
     elw=document.getElementById("elw").value;
     r=document.getElementById("r").value;
    console.log("mousedownevent");
   mouseEvent="mousedown"
     }



canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {mouseEvent=my_mouseup}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {mouseEvent=my_mouseleave}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    
    lastxposition=e.clientX - canvas.offsetLeft;
    lastyposition=e.clientY - canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        console.log(lastxposition,lastyposition)
        ctx.beginPath();
    ctx.strokeStyle = eyc;
    ctx.lineWidth = elw;
    ctx.arc(lastxposition,lastyposition,r,0,2*Math.PI);
    ctx.stroke();
    }

}






    
    
    
    

