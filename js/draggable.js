
window.addEventListener("load", (event) => {
    let targets = [];
    targets = document.querySelectorAll("#lazyload-img");
    targets.forEach(
        (target) => 
        {
            dragElement(target);
        }
        
        );

    console.log(targets);
});


function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    // drag from the title bar!
    elmnt.onmousedown = dragMouseDown;
    elmnt.onmouseup = closeDragElement;
  
    function dragMouseDown(e) {
    // elmnt.style.transition = "top 0s";
    document.body.append(elmnt);
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
        // console.log(e.clientX);
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

    //   console.log("element offest top: " + elmnt.offsetTop + ", mouseY offset from last frame:" + pos2 + ", difference: " + (elmnt.offsetTop - pos2));
       
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
    //   elmnt.style.transition = "top 1s";
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }