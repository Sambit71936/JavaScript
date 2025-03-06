let btn = document.getElementById("btn");

// different mouse events -> https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
btn.addEventListener("click", ()=>{
    // alert("Your system is hacked")
    document.querySelector(".box").innerHTML = "<b> Click me!</b>";
})

btn.addEventListener("contextmenu", ()=>{
    alert("Please dont press right click")
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode)
})