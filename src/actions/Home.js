import http from '@/utils/http'
import api from '@/api'

export function homefun(payload) {
    return {
        type: "HOME_LIST",
        payload: http.get(api.HOME)
    }
}