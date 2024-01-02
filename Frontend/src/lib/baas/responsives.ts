import { AxiosResponse } from 'axios'
import { request } from '@/lib/request'
import { BACKEND_API_URL } from '@/lib/api'

import { getToken } from '../storage'
import { Responsive } from '@/interfaces/responsive'


export const getResponsive = (responsiveId: string) => {
  return request<{ file: string }>(`${BACKEND_API_URL}/api/responsives/${responsiveId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }) as Promise<{ file: string }>
}

export function getResponsivesRequest(): Promise<Responsive[]> {
  return request(BACKEND_API_URL + '/api/responsives', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }) as Promise<Responsive[]>
}

interface PostResponsiveParam {
    device: string
    brand: string
    serialNumber: string
    model: string
    description: string
    assigner_id: string
    receiver_id: string
    location_id: number
}

export const postResponsive = (responsive: PostResponsiveParam) => 
  request(BACKEND_API_URL + '/api/responsives', {
    method: 'POST',
    data: responsive,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }) as Promise<AxiosResponse>
