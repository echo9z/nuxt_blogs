import dayjs from 'dayjs'
// 配置中文国际化
import 'dayjs/locale/zh-cn' 
// 加载中文语言包 全局使用
dayjs.locale('zh-cn') // use locale globally

// 添加相对时间插件
import relativeTime from 'dayjs/plugin/relativeTime'
// 拓展 相对时间函数
dayjs.extend(relativeTime) 

export const useFormatDate = (date: Date, format: string = 'YYYY/MM/DD HH:mm:dd') => {
  return dayjs(date).format(format)
}
export const useRelativeTime = (value: Date) => {
  return dayjs(value).from(dayjs())
}
