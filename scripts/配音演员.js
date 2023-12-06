let boxList = document.querySelectorAll(".box");
// const boxContainer = document.querySelector(".box-container");
window.addEventListener("scroll", scrollLoad);
function scrollLoad() {
  let taqqerValue = window.innerHeight * 0.7;
  boxList.forEach((box) => {
    let boxtop = box.getBoundingClientRect().top;
    if (boxtop <= taqqerValue) {
      box.classList.add("show-center");
    } else {
      box.classList.remove("show-center");
    }
  });
}

// let 观察者选项 = {
//   threshold: [0.16, 0.33, 0.5, 0.67, 0.83, 1],
// };

// const 观察者 = new IntersectionObserver(观察者回调, 观察者选项);

// 观察者.observe(boxContainer);

// function 观察者回调(entries) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log("hahaha");
//        if (entry.intersectionRatio >= 0.1666667) {
//         boxList[0].classList.add("show-center");
//       }
//       if (entry.intersectionRatio >= 0.2) {
//         boxList[1].classList.add("show-center");
//       }
//       if (entry.intersectionRatio >= 0.5) {
//         boxList[2].classList.add("show-center");
//       } 
//     }
//   });
// }
