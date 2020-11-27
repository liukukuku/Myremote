import http from '@/utils/http'
import api from '@/api'

export function SET_LOGIN_USER(payload) {
    return {
        type: 'SET_LOGIN_USER',
        payload: http.post(api.LOGINURl, payload)
    }
}