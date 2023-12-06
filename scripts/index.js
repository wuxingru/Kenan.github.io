const 图像长廊 = document.getElementsByClassName("图像长廊")[0];
const 箭头组 = document.getElementsByClassName("箭头");
const 左箭头 = 箭头组[0];
const 右箭头 = 箭头组[1];
const root = document.querySelector(":root");
const rootStyle = window.getComputedStyle(root);
const 图宽度 = parseInt(rootStyle.getPropertyValue("--长廊图宽度"), 10);
const 长廊图容器组 = document.getElementsByClassName("长廊图容器");

const 图像数量 = 4;
const 初始位移 = -(图宽度 / 2);
let 实际位移 = 初始位移;
const 初始图像索引 = 7;
let 前一索引 = 初始图像索引;
长廊图容器组[初始图像索引 - 1].style.filter = "none";
长廊图容器组[初始图像索引 - 1].getElementsByTagName("a")[0].style.pointerEvents = "all";
let 当前图像索引 = 初始图像索引;
const 移动速度 = 200;

右箭头.addEventListener("click", () => {
  重置右箭头功能();
  向后移动长廊();
});

左箭头.addEventListener("click", () => {
  重置左箭头功能();
  向前移动长廊();
});

function 重置左箭头功能() {
  左箭头.style.pointerEvents = "none";
  左箭头.style.opacity = "0.25";
  setTimeout(() => {
    左箭头.style.pointerEvents = "all";
    左箭头.style.opacity = "1";
  }, 移动速度);
}

function 重置右箭头功能() {
  右箭头.style.pointerEvents = "none";
  右箭头.style.opacity = "0.25";
  setTimeout(() => {
    右箭头.style.pointerEvents = "all";
    右箭头.style.opacity = "1";
  }, 移动速度);
}

function 向后移动长廊() {
  if (当前图像索引 < 初始图像索引 + 图像数量 - 1) {
    当前图像索引++;
  } else {
    当前图像索引 = 初始图像索引;
  }

  实际位移 -= 图宽度;
  图像长廊.style.transition = "left 200ms";
  图像长廊.style.left = `${实际位移}px`;
  长廊图容器组[前一索引 - 1].style.filter = "blur(10px)";
  const 不可点链接左 = 长廊图容器组[前一索引 - 1].getElementsByTagName("a")[0];
  不可点链接左.style.pointerEvents = "none";
  长廊图容器组[前一索引].style.filter = "none";
  const 可点链接 = 长廊图容器组[前一索引].getElementsByTagName("a")[0];
  可点链接.style.pointerEvents = "all";
  长廊图容器组[当前图像索引].style.filter = "blur(10px)";
  const 不可点链接右 = 长廊图容器组[当前图像索引].getElementsByTagName("a")[0];
  不可点链接右.style.pointerEvents = "none";
  前一索引 = 当前图像索引;

  if (当前图像索引 === 初始图像索引) {
    setTimeout(() => {
      实际位移 = 初始位移;
      图像长廊.style.transition = "0ms";
      图像长廊.style.left = `${实际位移}px`;
      长廊图容器组[当前图像索引 - 1].style.filter = "none";
    }, 移动速度);
  }
}

function 向前移动长廊() {
  if (当前图像索引 > 初始图像索引 - 图像数量 + 1) {
    当前图像索引--;
  } else {
    当前图像索引 = 初始图像索引;
  }

  实际位移 += 图宽度;
  图像长廊.style.transition = "left 200ms";
  图像长廊.style.left = `${实际位移}px`;
  长廊图容器组[当前图像索引 - 2].style.filter = "blur(10px)";
  const 不可点链接左 =
    长廊图容器组[当前图像索引 - 2].getElementsByTagName("a")[0];
  不可点链接左.style.pointerEvents = "none";
  长廊图容器组[当前图像索引 - 1].style.filter = "none";
  const 可点链接 = 长廊图容器组[当前图像索引 - 1].getElementsByTagName("a")[0];
  可点链接.style.pointerEvents = "all";
  长廊图容器组[当前图像索引].style.filter = "blur(10px)";
  const 不可点链接右 = 长廊图容器组[当前图像索引].getElementsByTagName("a")[0];
  不可点链接右.style.pointerEvents = "none";
  前一索引 = 当前图像索引;

  if (当前图像索引 === 初始图像索引) {
    setTimeout(() => {
      实际位移 = 初始位移;
      图像长廊.style.transition = "0ms";
      图像长廊.style.left = `${实际位移}px`;
      长廊图容器组[当前图像索引 - 1].style.filter = "none";
    }, 移动速度);
  }
}
