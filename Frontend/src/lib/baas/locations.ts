import { request } from '@/lib/request'

import { getToken } from '../storage'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export function getLocations<T> (): Promise<T[]> {
  return request(BASE_URL + '/api/locations', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }) as Promise<T[]>
}
