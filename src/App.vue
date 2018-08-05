<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="icon">

      <p class="parent">
        <span>
          文字样式
        </span>
        <span class="icon-keyboard_arrow_right font-css"></span>
        <span>></span>
        <span class="icon-arrow_lift"></span>
      </p>
      <p>
        <span class="icon-thumb_up"></span>
        <span class="icon-thumb_down"></span>
        <span class="icon-shopping_cart"></span>
        <span class="icon-remove_circle_outline"></span>
        <span class="icon-keyboard_arrow_right"></span>
        <span class="icon-favorite"></span>
        <span class="icon-close"></span>
        <span class="icon-check_circle"></span>
        <span class="icon-arrow_lift"></span>
        <span class="icon-add_circle"></span>       
      </p>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header"
export default {
  name: "app",
  components: {
    "app-header":Header
  }
};
</script>

<style>
@import url(./common/css/icon.css);
.parent {
  height: 30px;
  line-height: 30px;
  background: #f4f4f4;
  overflow: hidden;
}
.icon{
  /* color: red; */
  font-size: 12px;
}
.icon .font-css {
  /* background-color: red; */
  font-size: 18px;
  position: relative;
  top: 4px;
  display:inline-block;
}
</style>
