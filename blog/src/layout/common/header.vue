<template>
  <el-row type="flex" justify="space-between" align="middle">
    <el-col :span="4">Blog</el-col>
    <el-col :span="4">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  mounted() {
      
  }
};
</script>