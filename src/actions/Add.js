import http from '@/utils/http'
import api from '@/api'
import { SET_ADD_DATA } from '@/constant'

export function AddFn(payload) {
    return {
        type: SET_ADD_DATA,
        payload: http.post(api.ADDURL, payload)
    }
}