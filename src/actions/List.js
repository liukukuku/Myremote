import { ListData } from '../constant/index'
import http from '../utils/http'
import { getListData } from '@/service/api'
export function getListData(val) {
  return {
    type: ListData,
    payload: http.get(ListData)
  }
}