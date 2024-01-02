import { request } from '@/lib/request'
import { BACKEND_API_URL } from '@/lib/api'

import { getToken } from '../storage'


export const getSettingsRequest = () => {
  return request<{ file: string }>(`${BACKEND_API_URL}/api/settings`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}