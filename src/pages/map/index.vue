<template>
  <div
    ref="line"
    style="width: 600px; height: 600px; border: 1px solid red"
  ></div>
</template>

<script>
import request from '@/utils/request.js'
export default {
  data() {
    return {
      lineE: null,
      list: {},
      rankList: []
    }
  },
  methods: {
    async getRank() {
      const { data } = await request.get('/rank.json')
      this.rankList = data
    },
    async getList() {
      this.initEcharts()
      const { data } = await request.get('/map/china.json')
      await this.getRank()
      this.$echarts.registerMap('HK', data)
      const option = {
        title: {
          text: 'china',
          subtext: 'link',
          sublink: '/bar'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} (p / km2)'
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        visualMap: {
          min: 0,
          max: 300,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true, // 滑块
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered'] // 控制颜色渐变
          }
        },
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: true
        },
        series: [
          {
            type: 'map',
            map: 'HK',
            zoom: 1.1, // 缩放比列
            roam: true, // 鼠标滑动缩放
            center: [106.665412, 34.757975], // 中心点
            data: this.rankList,
            label: {
              show: true
            }
          }
        ]
      }
      // const option = {

      //   serise: [
      //     {
      //       geoIndex: 0,
      //       type: 'map',
      //       map: 'china',
      //       label: {
      //         show: true
      //       },
      //       data: this.rankList
      //     },
      //     {
      //       type: 'effectScatter',
      //       coordinateSystem: 'geo',
      //       data: [
      //         {
      //           value: [106.665412, 34.757975]
      //         }
      //       ],
      //       rippleEffect: {
      //         scale: 10
      //       }
      //     }
      //   ]
      // }
      this.lineE.setOption(option)
    },
    initEcharts() {
      this.lineE = this.$echarts.init(this.$refs.line)
    }
  },
  mounted() {
    this.getList()
    this.getRank()
  }
}
</script>

<style lang="scss" scoped>
</style>
