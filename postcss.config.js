module.exports = {
  plugins: {
    autoprefixer: {},
    // 配置计算rem值的设置
    'postcss-pxtorem': {
      // 按照37.5的基准值来换算rem单位
      // vant 默认最佳显示状态在iphone6  375px
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
