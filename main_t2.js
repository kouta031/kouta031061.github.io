window.addEventListener("DOMContentLoaded", () => {
  // 星を表示するための親要素を取得
  const stars = document.querySelector(".stars");

  // 星を生成する関数
  const createStar = () => {
    const starEl = document.createElement("span");
    starEl.className = "star";
    const minSize = 1; // 星の最小サイズを指定
    const maxSize = 2; // 星の最大サイズを指定
    const size = Math.random() * (maxSize - minSize) + minSize;
    starEl.style.width = `${size}px`;
    starEl.style.height = `${size}px`;
    starEl.style.left = `${Math.random() * 100}%`;
    starEl.style.top = `${Math.random() * 100}%`;
    starEl.style.animationDelay = `${Math.random() * 10}s`;
    stars.appendChild(starEl);
  };

  // for文で星を生成する関数を指定した回数呼び出す
  for (let i = 0; i <= 500; i++) {
    createStar();
  }
});

window.addEventListener("load", function () {

  gsap.registerPlugin(ScrollTrigger);

  const area = document.querySelector(".js-area");
  const wrap = document.querySelector(".js-wrap");
  const items = document.querySelectorAll(".js-item");
  const num = items.length;

  gsap.set(wrap, { width: num * 100 + "%" });
  gsap.set(items, { width: 100 / num + "%" });

  gsap.to(items, {
      xPercent: -100 * (num - 1),
      ease: "none",
      scrollTrigger: {
          trigger: area,
          start: "top top",
          end: "+=1000",
          pin: true,
          scrub: true,
      }
  });
});
