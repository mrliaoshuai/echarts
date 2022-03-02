<template>
  <div ref="gauge" class="gauge"></div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    initGauge() {
      const myChart = this.$echarts.init(this.$refs.gauge)
      const option = {
        title: {
          text: 'gauge'
        },
        series: [
          {
            name: 'Pressure',
            type: 'gauge',
            progress: {
              show: true
            },
            detail: {
              valueAnimation: true,
              formatter: '{value}'
            },
            data: [
              {
                value: 150,
                name: '分针',
                itemStyle: {
                  color: 'red'
                }
              },
              {
                value: 20,
                name: '时针'
              }
            ],
            min: 10,
            max: 200
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  mounted() {
    this.initGauge()
  }
}
</script>

<style lang="scss" scoped>
.gauge {
  width: 800px;
  height: 400px;
}
</style>
