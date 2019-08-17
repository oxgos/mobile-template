import axios from '@/apis/interceptors'

export default class BaseDao {
  constructor() {
    this.axios = axios
  }
}
