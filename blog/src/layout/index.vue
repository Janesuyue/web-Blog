<template>
  <div class="app-wrapper">
    <div class="main-container">
      <div :class="{'fixed-header': fixedHeader}">
        <Navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar } from "./components";

export default {
  name: "Layout",
  components: {
    AppMain,
    Navbar
  },
  data() {
    return {
      fixedHeader: true
    };
  }
};
</script>
 
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.main-container {
  width: 100%;
  height: 100%;
}
</style>
