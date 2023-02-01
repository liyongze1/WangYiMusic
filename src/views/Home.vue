<template>
  <div>
    <!-- 头部 -->
    <WYHeader></WYHeader>
    <!-- 选项卡 -->
    <Option></Option>
  </div>
</template>

<script>
import Option from '../components/home/Option.vue'
import WYHeader from '../components/home/WY_header.vue'
export default {
  components: { WYHeader, Option },

}
</script>

<style>

</style>