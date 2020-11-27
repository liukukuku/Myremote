import { ListData } from '@/constant/index'
import http from '@/utils/http'
import  api  from '@/api'
export function getData(val) {
  return {
    type: ListData,
    payload: http.get(api.HOME)
  }
}