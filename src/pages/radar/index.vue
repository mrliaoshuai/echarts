<template>
  <div ref="radar" class="radar"></div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    initRadar() {
      const myChart = this.$echarts.init(this.$refs.radar)
      const option = {
        title: {
          text: 'Radar'
        },
        legend: {
          data: ['小米11', '小米12']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '散热', max: 6500 },
            { name: '跑分', max: 16000 },
            { name: 'Information Technology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 }
          ] // 各个维度的最大值
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            // label: {
            //   show: true
            // },
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: '小米11'
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: '小米12'
              }
            ]
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  mounted() {
    this.initRadar()
  }
}
</script>

<style lang="scss" scoped>
.radar {
  width: 800px;
  height: 400px;
}
</style>
