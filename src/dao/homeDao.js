import BaseDao from './baseDao'
import { getSessionStorage, setSessionStorage } from '@/utils/globalUtil'

/**
 * 数据获取层
 */
class HomeDao extends BaseDao {
  getHomeData() {
    let url = ``
    return new Promise((resolve, reject) => {
      let cache = getSessionStorage('user')
      if (!cache) {
        this.axios.get(url).then(res => {
          setSessionStorage('user', res.data.data)
          resolve(res.data.data)
        }).catch(e => {
          reject(e)
        })
      } else {
        resolve(cache)
      }
    })
  }
}

export default HomeDao
