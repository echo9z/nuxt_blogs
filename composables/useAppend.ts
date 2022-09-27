export function useAppend () {
  return (textDom: Element, str: string) => {
    return new Promise((resolve) => {
      let index = 0
      const timer = setInterval(() => {
        textDom.append(str.charAt(index));
        // console.log(str.charAt(index))
        if (index++ === str.length) {
          clearInterval(timer)
          resolve(true)
        }
      }, 150)
    })
  }
}
