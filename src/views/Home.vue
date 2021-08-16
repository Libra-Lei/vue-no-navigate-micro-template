<!--
 * @Description: 
 * @Author: Libra
 * @GitHub: https://github.com/Libra-Lei
 * @Date: 2021-08-13 10:59:29
 * @LastEditors: Libra
 * @LastEditTime: 2021-08-16 12:59:35
-->
<template>
  <div>
    <h1 class="text-primary">{{ title }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState({
      title: state => state.test.title
    })
  }
}
</script>
