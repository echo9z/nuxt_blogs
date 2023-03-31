const baiduCount = () => {
  // const _hmt = _hmt || []
  const hm = document.createElement('script')
  hm.src = 'https://hm.baidu.com/hm.js?72b1b2722ac273fb11aee3e8852c0288'
  const s:HTMLScriptElement = document.getElementsByTagName('script')[0]
  s.parentNode?.insertBefore(hm, s)
}
export default baiduCount