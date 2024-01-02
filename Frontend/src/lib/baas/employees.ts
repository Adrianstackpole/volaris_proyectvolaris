import { request } from '@/lib/request'

import { getToken } from '../storage'
import { Employee } from '@/interfaces/employee'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getEmployee = (employeeNumber: number | string) => {
  return request(`${BASE_URL}/api/employees/${employeeNumber}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }) as Promise<Employee>
}

export const getEmployees = () =>
  request(BASE_URL + '/api/employees', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
