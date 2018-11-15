/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 统一组件规则示例
 * @Date: 2018-07-09 18:45:34 
 * @Last Modified by: baizn
 * @Last Modified time: 2018-07-12 17:54:56
  */
 import React, { Component } from 'react'
 import echarts from 'echarts'

 /**
  * Creates an instance of ComponentExample.
  * @param {any} props 
  * @memberof ComponentExample
  */
 export default class ComponentExample extends Component {
   constructor(props) {
     super(props)
     let colors = ['#5793f3', '#d14a61', '#675bba']
     // 默认配置项
     this.options = {
      color: colors,

      tooltip: {
          trigger: 'none',
          axisPointer: {
              type: 'cross'
          }
      },
      legend: {
          data:['2015 降水量', '2016 降水量']
      },
      grid: {
          top: 70,
          bottom: 50
      },
      xAxis: [
          {
              type: 'category',
              axisTick: {
                  alignWithLabel: true
              },
              axisLine: {
                  onZero: false,
                  lineStyle: {
                      color: colors[1]
                  }
              },
              axisPointer: {
                  label: {
                      formatter: function (params) {
                          return '降水量  ' + params.value
                              + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                      }
                  }
              },
              data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
          },
          {
              type: 'category',
              axisTick: {
                  alignWithLabel: true
              },
              axisLine: {
                  onZero: false,
                  lineStyle: {
                      color: colors[0]
                  }
              },
              axisPointer: {
                  label: {
                      formatter: function (params) {
                          return '降水量  ' + params.value
                              + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                      }
                  }
              },
              data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
          }
      ],
      yAxis: [
          {
              type: 'value'
          }
      ],
      series: [
          {
              name:'2015 降水量',
              type:'line',
              xAxisIndex: 1,
              smooth: true,
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
              name:'2016 降水量',
              type:'line',
              smooth: true,
              data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
          }
      ]
     }
 
     this.instance = null
   }
 
   // 绑定事件
   /**
    * click
    * mouseenter
    * mousemove
    * mouseout
    */
   bindEvent = () => {
 
   }
 
   // 绑定数据
   update = ({ options }) => {
     this.instance.setOption(options)
   }
 
   componentDidMount = () => {
     this.instance = echarts.init(this.refs.chartsContainer)
     this.instance.setOption(this.options)
   }
 
   componentWillReceiveProps = (nextProps) => {
     this.update(nextProps)
   }
 
   render() {
     return (
       <div style={{width: 400, height: 400}} ref='chartsContainer'></div>
     )
   }
 }
