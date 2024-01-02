import { request } from '@/lib/request'

import { getToken } from '../storage'
import { Device } from '@/interfaces/devices'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getDevice = (deviceId: number | string) => {
  return request(`${BASE_URL}/api/devices/${deviceId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }) as Promise<Device>
}

export const getDevices = () =>
  request(BASE_URL + '/api/devices', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }) as Promise<Device[]>
