import http from '@/utils/http'
import api from '@/api'
import { HomeList } from "@/constant/index"

export function homefun(payload) {
    return {
        type: HomeList,
        payload: http.get(api.HOME)
    }
}