<template>
  <div ref="line" style="width: 600px; height: 600px"></div>
</template>

<script>
import request from '@/utils/request.js'
export default {
  data() {
    return {
      lineE: null,
      list: {}
    }
  },
  methods: {
    async getList() {
      this.initEcharts()
      const { data } = await request.get('/map/china.json')
      this.$echarts.registerMap('china', data)
      const option = {
        geo: {
          type: 'map',
          map: 'china'
        }
      }
      this.lineE.setOption(option)
    },
    initEcharts() {
      this.lineE = this.$echarts.init(this.$refs.line)
    }
  },
  mounted() {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
</style>
