import http from '@/utils/http'
import api from '@/api'

export function SET_REG_USER(payload) {
    return {
        type: 'SET_REG_USER',
        payload: http.post(api.REGISTERURL, payload)
    }
}