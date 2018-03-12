<template>
<div>
  <HD></HD>
  <div class="article_list">
    <ul>
      <li v-for="(item,index) in article_list" :key="index">
        <time v-text="$utils.goodTime(item.create_at)"></time>
        <router-link :to="`/content/${item.id}`">
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </div>
  <FT></FT>
</div>
</template>

<script>
// 这里组件名不要用Header，Footer这些html的原生标记
import HD from '../components/header'
import FT from '../components/footer'

export default {
  data () {
    return {
      article_list: []
    }
  },
  created () {
    this.getData()
  },
  components: {
    HD,
    FT
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        this.article_list = r.data
      })
    }
  }
}
</script>

<!--<style scoped>-->

<!--</style>-->
