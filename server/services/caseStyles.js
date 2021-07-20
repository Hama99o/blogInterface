module.exports = {
  snakeToCamel (str) {
    return str.replace(/(_\w)/g, (m) => {
      return m[1].toUpperCase()
    })
  },
  camelToSnake (str) {
    return str.replace(/[\w]([A-Z])/g, (m) => {
      return m[0] + '_' + m[1]
    }).toLowerCase()
  },
  convertKeysToCamel (obj) {
    const newObj = {}

    for (const key in obj) {
      newObj[this.snakeToCamel(key)] = obj[key]
    }

    return newObj
  },
  convertKeysToSnake (obj) {
    const newObj = {}

    for (const key in obj) {
      newObj[this.camelToSnake(key)] = obj[key]
    }

    return newObj
  }
}
