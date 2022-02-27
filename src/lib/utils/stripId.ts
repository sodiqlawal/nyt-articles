export const stripId = (id:string) => {
    if(!id) return ''
    const splittedArr = id.split('/')
    return splittedArr[splittedArr.length - 1]
}