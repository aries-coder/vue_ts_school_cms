class Cache {

  getCache(key: string) {
    const item = localStorage.getItem(key);


    if (item) {
      return JSON.parse(item)
    }
  }

  setCache(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  removeCache(key: string) {
    localStorage.removeItem(key)
  }

  clearCache() {
    localStorage.clear()
  }

}

export default new Cache()
