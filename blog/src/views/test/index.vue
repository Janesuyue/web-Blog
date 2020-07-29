<template>
  <div class="test">
    <!-- <my-markdown name="12"/> -->
    <pre v-highlightA>
        <code >
          function () {
            var arr = []
          }
        </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
    }
  },
};
</script>

<style lang="less" scoped>
.test{
  width: 500px;
  text-align: left;
  font-size: 20px;
}
</style>
