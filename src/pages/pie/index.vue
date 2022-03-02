<template>
  <div class="pie" ref="pie"></div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    init() {
      const mChart = this.$echarts.init(this.$refs.pie)
      const option = {
        title: {
          text: 'pie'
        },
        legend: {
          top: 'bottom'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [10, 250], // 原点的半径 最外层的半径
            center: ['50%', '50%'], // 原点的位置
            roseType: 'area', // 南丁格尔玫瑰
            itemStyle: {
              borderRadius: 10
            },
            data: [
              { value: 40, name: 'rose 1' },
              { value: 38, name: 'rose 2' },
              { value: 32, name: 'rose 3' },
              { value: 30, name: 'rose 4' },
              { value: 28, name: 'rose 5' },
              { value: 26, name: 'rose 6' },
              { value: 22, name: 'rose 7' },
              { value: 18, name: 'rose 8' }
            ]
          }
        ]
      }
      mChart.setOption(option)
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.pie {
  width: 800px;
  height: 600px;
}
</style>
