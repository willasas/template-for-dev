<template>
  <view class="default-layout">
    <slot />
    <wd-toast />
    <wd-message-box />
  </view>
</template>

<script>
export default {
  // 可在此添加组件选项，例如 data、methods 等
}
</script>

<style lang="scss">
.default-layout {
  height: 100vh;
  /* #ifdef H5 */
  padding-bottom: 50px;
  overflow: auto;
  /* #endif */
}
</style>
