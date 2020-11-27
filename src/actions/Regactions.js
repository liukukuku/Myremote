import http from '@/utils/http'
import api from '@/api'
import {SET_REG_USER} from '@/constant'
export function SETREGUSER(payload) {
    return {
        type: SET_REG_USER,
        payload: http.post(api.REGISTERURL, payload)
    }
}