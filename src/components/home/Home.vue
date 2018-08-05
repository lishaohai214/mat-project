<template>
    <div class="home">
        <div class="container">
            <router-link :to="{name: 'withdrawalsLink'}">提现</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>

