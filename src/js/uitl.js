// 获取一个随机数, n表示最大位数
const getRandom = (n = 1) => Math.floor(Math.random() * 10 * n)

export {
    getRandom
}