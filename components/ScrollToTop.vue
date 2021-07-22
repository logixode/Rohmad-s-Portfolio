<template>
  <a href="#top" class="hidden">
    <canvas id="myCanvas" class="scroll-to-top"></canvas>
  </a>
</template>

<script>
export default {
  mounted() {
    let scrollToTopSelector = document.querySelector(".scroll-to-top");
    window.addEventListener("scroll", (e) => {
      if (e.target.scrollingElement.scrollTop > 300) {
        scrollToTopSelector.parentNode.classList = "";
      } else scrollToTopSelector.parentNode.classList = "hidden";
    });

    let canvasKita = document.getElementById("myCanvas");
    canvasKita.width = 100;
    canvasKita.height = 100;
    let ctx = canvasKita.getContext("2d");

    let y, y2, y3, y4;
    let y_i, y_i2, y_i3, y_i4;
    let reset_y = (a, b) => {
      (y = a ?? 120), (y2 = a ?? 240), (y3 = a ?? 360), (y4 = b ?? 120);
      (y_i = 1), (y_i2 = 1), (y_i3 = 1), (y_i4 = 1);
    };
    reset_y();

    let arrow_up = (y, width) => {
      ctx.beginPath();
      ctx.strokeStyle = "#2cd084";
      ctx.lineWidth = width;
      ctx.moveTo(20, 50 + y);
      ctx.lineTo(50, 20 + y);
      ctx.lineTo(80, 50 + y);
      ctx.stroke();
    };
    setInterval(() => {
      ctx.save();
      ctx.clearRect(0, 0, canvasKita.width, canvasKita.height);

      arrow_up(y, 7);
      arrow_up(y2, 5);
      arrow_up(y3, 3);

      ctx.beginPath();
      ctx.fillStyle = "#2cd084";
      ctx.arc(50, y4, 15, 0, 2 * Math.PI);
      ctx.fill();

      // jika arrow_up selesai
      if (y3 < -250) {
        if (y4 == 121.5) reset_y(-405, -20);
        //jika bola jatuh selesai
        else if (y4 > 120 && y4 != 120) reset_y();
        // animasi bola jatuh
        else if (y4 >= -20) {
          y4 += 0.5 + y_i4;
          y_i4 += 0.1;
        }
      }
      // animasi arrow_up
      else {
        (y -= 1 + y_i), (y2 -= 1 + y_i2), (y3 -= 1 + y_i3);
        (y_i += 0.03), (y_i2 += 0.033), (y_i3 += 0.038);
      }

      ctx.restore();
    }, 12);
  },
};
</script>

<style>
.scroll-to-top {
  position: fixed;
  bottom: 5vw;
  right: 5vw;
  width: 85px;
  height: 85px;
  /* border-radius: 100%; */
  cursor: pointer;
  z-index: 99;
  font-size: 25px;
  transition: 0.2s ease;
}

/* .hidden {
  visibility: hidden;
} */
</style>