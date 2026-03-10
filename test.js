<<<<<<< HEAD
let endListener = false;

clickElement.addEventListener("click", () => {
  if (endListener) {
    endListener = false;
  } else {
    endListener = true;
  }
});

video.addEventListener("ended", () => {
  if (endListener) return console.log("listener ended");

  //endListener =false then below code runs

  console.log("Video has ended");
});
=======
let endListener = false;

clickElement.addEventListener("click", () => {
  if (endListener) {
    endListener = false;
  } else {
    endListener = true;
  }
});

video.addEventListener("ended", () => {
  if (endListener) return console.log("listener ended");

  //endListener =false then below code runs

  console.log("Video has ended");
});
>>>>>>> 9ab1694 (First Commit)
