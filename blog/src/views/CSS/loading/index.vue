<template>
  <div>

<!-- bouncing-loader -->
<template v-if="false">
<pre-view>
    <div class="bouncing-loader">
    <div></div>
    <div></div>
    <div></div>
    </div>
</pre-view>
<pre v-highlightA data-code-language="HTML" class="border-first">
  <code>
  &lt;div class="bouncing-loader"&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;div&gt;&lt;/div&gt;
  &lt;/div&gt;
  </code>
</pre>
<pre v-highlightA data-code-language="CSS" class="border-last">
  <code>
  @keyframes bouncing-loader {
    to {
      opacity: 0.1;
      transform: translate3d(0, -1rem, 0);
    }
  }

  .bouncing-loader {
    display: flex;
    justify-content: center;
  }

  .bouncing-loader > div {
    width: 14px;
    height: 14px;
    margin: 30px 3px;
    background: #8385aa;
    border-radius: 50%;
    animation: bouncing-loader 0.6s infinite alternate;
  }

  .bouncing-loader > div:nth-child(2) {
    animation-delay: 0.2s;
  }

  .bouncing-loader > div:nth-child(3) {
    animation-delay: 0.4s;
  }
  </code>
</pre>
</template>
<!-- bouncing-loader end -->

<!-- rotate-loader -->
<template v-if="false">
<pre-view>
    <div class="rotate-loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    </div>
</pre-view>
<pre v-highlightA data-code-language="HTML" class="border-first">
  <code>
  &lt;div class="rotate-loader"&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
    &lt;span&gt;&lt;/span&gt;
  &lt;/div&gt;
  </code>
</pre>
<pre v-highlightA data-code-language="HTML" class="border-last">
  <code>
  @keyframes rotate-loader {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }
  .rotate-loader {
    width: 100px;
    height: 100px;
    position: relative;
    margin: 10px auto;
  }
  .rotate-loader span {
    display: inline-block;
    width: 30px;
    height: 10px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: var(--loader-back-color);
    position: absolute;
    animation: rotate-loader 1.04s ease infinite;
  }
  .rotate-loader span:nth-child(1) {
    left: 0;
    top: 50%;
    margin-top: -5px;
    animation-delay: 0.13s;
  }
  .rotate-loader span:nth-child(2) {
    left: 10px;
    top: 20px;
    transform: rotate(45deg);
    animation-delay: 0.26s;
  }
  .rotate-loader span:nth-child(3) {
    left: 50%;
    top: 10px;
    margin-left: -15px;
    transform: rotate(90deg);
    animation-delay: 0.39s;
  }
  .rotate-loader span:nth-child(4) {
    top: 20px;
    right: 10px;
    transform: rotate(135deg);
    animation-delay: 0.52s;
  }
  .rotate-loader span:nth-child(5) {
    right: 0;
    top: 50%;
    margin-top: -5px;
    transform: rotate(180deg);
    animation-delay: 0.65s;
  }
  .rotate-loader span:nth-child(6) {
    right: 10px;
    bottom: 20px;
    transform: rotate(225deg);
    animation-delay: 0.78s;
  }
  .rotate-loader span:nth-child(7) {
    bottom: 10px;
    left: 50%;
    margin-left: -15px;
    transform: rotate(270deg);
    animation-delay: 0.91s;
  }
  .rotate-loader span:nth-child(8) {
    bottom: 20px;
    left: 10px;
    transform: rotate(315deg);
    animation-delay: 1.04s;
  }
  </code>
</pre>
</template>
<!-- rotate-loader end -->

<!-- annulus-loader -->
<template>
<pre-view>
  <div class="annulus-loader">
  </div>
</pre-view>
</template>
<!-- annulus-loader end -->

  </div>
</template>

<script>
export default {
  name: "loading"
};
</script>

<!-- bouncing-loader -->
<style lang="scss" scoped>
@keyframes bouncing-loader {
  to {
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0);
  }
}
.bouncing-loader {
  display: flex;
  justify-content: center;
}
.bouncing-loader > div {
  width: 14px;
  height: 14px;
  margin: 30px 3px;
  background: var(--loader-back-color);
  border-radius: 50%;
  animation: bouncing-loader 0.6s infinite alternate;
}
.bouncing-loader > div:nth-child(2) {
  animation-delay: 0.2s;
}
.bouncing-loader > div:nth-child(3) {
  animation-delay: 0.4s;
}
</style>

<!-- rotate-loader -->
<style lang="scss" scoped>
@keyframes rotate-loader {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
.rotate-loader {
  width: 100px;
  height: 100px;
  position: relative;
  margin: 10px auto;
}
.rotate-loader span {
  display: inline-block;
  width: 30px;
  height: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: var(--loader-back-color);
  position: absolute;
  animation: rotate-loader 1.04s ease infinite;
}
.rotate-loader span:nth-child(1) {
  left: 0;
  top: 50%;
  margin-top: -5px;
  animation-delay: 0.13s;
}
.rotate-loader span:nth-child(2) {
  left: 10px;
  top: 20px;
  transform: rotate(45deg);
  animation-delay: 0.26s;
}
.rotate-loader span:nth-child(3) {
  left: 50%;
  top: 10px;
  margin-left: -15px;
  transform: rotate(90deg);
  animation-delay: 0.39s;
}
.rotate-loader span:nth-child(4) {
  top: 20px;
  right: 10px;
  transform: rotate(135deg);
  animation-delay: 0.52s;
}
.rotate-loader span:nth-child(5) {
  right: 0;
  top: 50%;
  margin-top: -5px;
  transform: rotate(180deg);
  animation-delay: 0.65s;
}
.rotate-loader span:nth-child(6) {
  right: 10px;
  bottom: 20px;
  transform: rotate(225deg);
  animation-delay: 0.78s;
}
.rotate-loader span:nth-child(7) {
  bottom: 10px;
  left: 50%;
  margin-left: -15px;
  transform: rotate(270deg);
  animation-delay: 0.91s;
}
.rotate-loader span:nth-child(8) {
  bottom: 20px;
  left: 10px;
  transform: rotate(315deg);
  animation-delay: 1.04s;
}
</style>

<!-- annulus-loader -->
<style lang="scss" scoped>
@keyframes annulus-loader{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.annulus-loader{
  width: 40px;
  height: 40px;
  margin: 10px auto;
  border: 2px solid;
  border-color: var(--loader-back-color) var(--loader-back-color) transparent;
  border-radius: 50%;
  box-sizing: border-box;
  /*动画时间1s，线性变化，无限循环*/
  animation: annulus-loader 1s linear infinite;
}
</style>
