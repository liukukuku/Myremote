import { GET_LIST_DATA } from '@/constant/index'
import http from '@/utils/http'
import  api  from '@/api'
export function getData(val) {
  return {
    type: GET_LIST_DATA,
    payload: http.get(api.HOME)
  }
}