<template>
    <header class="app-header">
        <ul class="nav-bar">
            <li><router-link :to="{name:'homeLink'}" class="nav-link">主页</router-link></li>
            <li><router-link :to="{name:'aboutLink'}" class="nav-link">菜单</router-link></li>
            <li class="nav-link">其他</li>
        </ul>
    </header>
</template>
<script>
export default {};
</script>

<style scoped>

.app-header {
    width: 100%;
    height: auto;
}
.nav-bar {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
}
.nav-link {
  display: block;
  height: 30px;
  width: 750px;
}
</style>
