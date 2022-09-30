document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

// document.querySelectorAll(".wrapper").forEach((item) => {
//   item.addEventListener("click", () => {
//     document.querySelectorAll(".target").forEach((item) => {
//       item.classList.toggle("change");
//     });
//   });
// });

const video = document.querySelectorAll(".video");

video.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });
  video.addEventListener("mouseout", () => {
    video.pause();
  });
});
