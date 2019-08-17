import BaseService from './baseService'
import HomeDao from '@/dao/homeDao'

/**
 * 数据处理层
 */
export default class HomeService extends BaseService {
  constructor() {
    super()
    this.homeDao = new HomeDao()
  }
  getHomeData() {
    return this.homeDao.getHomeData()
  }
}
