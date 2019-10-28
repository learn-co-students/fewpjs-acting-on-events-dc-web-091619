function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px","");//replace "num px" with just "num"
    let left = parseInt(leftNumbers, 10);//convert "num" to num

    if (left < 360){//make sure it can't go past the right border which is left = 360.
        dodger.style.left = `${left + 1}px`; //reassign the left value that is given.
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {//if the keydown is keyright, call dodgerright function.
      moveDodgerRight ();
    } 
  });