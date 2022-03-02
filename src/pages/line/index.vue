<template>
  <div ref="line" class="line"></div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    initLine() {
      const myChart = this.$echarts.init(this.$refs.line)
      const option = {
        xAxis: {
          type: 'category',
          boundaryGap: false, // 紧挨边缘
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          scale: true // 脱离0值 缩放
        },

        series: [
          {
            name: '123',
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            smooth: true, // 连线是否是平滑的
            markPoint: {},
            lineStyle: {
              color: 'red',
              type: 'dotted'
            },
            areaStyle: {
              color: 'skyblue'
            } // 阴影配置
          },
          {
            name: 'Email',
            type: 'line',
            stack: 'Total', // 堆叠图
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 0, 191, 234, 290, 330, 310]
          }
        ],
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        legend: {
          data: ['Email', 'Union Ads']
        }
      }
      myChart.setOption(option)
    }
  },
  mounted() {
    this.initLine()
  }
}
</script>

<style lang="scss" scoped>
.line {
  width: 400px;
  height: 400px;
}
</style>
