<template>
    <el-container>
        <el-header>
            <Header />
        </el-header>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
import Header from './common/header';

export default {
    components: {
        Header
    }
}
</script>
