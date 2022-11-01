import { Account } from '../typings/login'
/**
 * 将1-7的字符转换为汉字版本
 * @param number
 * @returns
 */
export function getDayHan(number: string) {
  switch (number) {
    case '1':
      return '一'
    case '2':
      return '二'
    case '3':
      return '三'
    case '4':
      return '四'
    case '5':
      return '五'
    case '6':
      return '六'
    case '7':
      return '七'

    default:
      return '一'
  }
}

/**
 * 将字符串转换为带数字的字符
 * @param number
 * @returns
 */
export function formatWanToTenThousand(number: number) {
  if (('' + number).length <= 5) {
    return number + ''
  }

  return Math.round(number / 10000) + '万'
}

/**
 * 获取日期的年月日
 * @param date
 * @returns
 */
export function getYearMonthDay(date: Date) {
  return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay()
}

/**
 * 将一串数字转换而获取音乐的时长
 */
export function getTime(time: number) {
  
  let tem = Math.round(time / 1000)

  let first = '' + Math.round(tem / 60)
  let last = '' + (tem % 60)

  return (
    (first.length <= 1 ? `0${first}` : first) +
    ':' +
    (last.length <= 1 ? `0${last}` : last)
  )
}

/**
 * 保存用户信息
 */
export function setAccount(account: any) {
  // 依次存入
  const keys = Object.keys(account)

  for (let i = 0; i < keys.length; i++) {
    localStorage.setItem(keys[i], account[keys[i]])
  }
}

/**
 * 获取用户信息
 */
export function getAccount() {
  const id: string | null = localStorage.getItem('id')
  const userName: string | null = localStorage.getItem('userName')

  return {
    id,
    userName,
  }
}