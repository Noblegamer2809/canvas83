var last_position_of_X, last_position_of_Y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    
var width = screen.width;

new_width = screen.width - 70;
new_height = screen.height - 300;

if (width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
 canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{
    last_position_of_x = e.touches[0].clientX.offsetLeft;
    last_position_of_y = e.touches[0].clientY.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{
    current_position_of_touch_X = e.touches[0].clientX.offsetLeft;
    current_position_of_touch_Y = e.touches[0].clientY.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color; 
    ctx.lineWidth = width_of_line;

 ctx.moveTo(last_position_of_X,last_position_of_Y);

 ctx.lineTo(current_position_of_touch_X,current_position_of_touch_Y);
 ctx.stroke();
 

 last_position_of_X = current_position_of_touch_X;
 last_position_of_Y = current_position_of_touch_Y
}
