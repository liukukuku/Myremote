import http from '@/utils/http'
import api from '@/api'
import { SET_LOGIN_USER } from '@/constant/index'
export function SETLOGINUSER(payload) {
    return {
        type: SET_LOGIN_USER,
        payload: http.post(api.LOGINURl, payload)
    }
}