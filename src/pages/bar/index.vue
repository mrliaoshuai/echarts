<template>
  <div>
    <div ref="bar" class="bar"></div>
    <div ref="bar1" class="bar"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    initBar() {
      const mChart = this.$echarts.init(this.$refs.bar)
      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        title: {
          text: 'red'
        },
        legend: {},
        tooltip: {},
        toolbox: {},
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            color: 'skyblue'
            // showBackground: true,
            // backgroundStyle: {
            //   color: 'blue'
            // }
          }
        ]
      }
      mChart.setOption(option)
    },
    initBar1() {
      const mChart = this.$echarts.init(this.$refs.bar1)
      const option = {
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        title: {
          text: 'red'
        },
        legend: {},
        tooltip: {},
        toolbox: {},
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            color: 'skyblue'
            // showBackground: true,
            // backgroundStyle: {
            //   color: 'blue'
            // }
          }
        ]
      }
      mChart.setOption(option)
    }
  },
  mounted() {
    this.initBar()
    this.initBar1()
  }
}
</script>

<style lang="scss" scoped>
.bar {
  width: 400px;
  height: 400px;
}
</style>
