import axios, { type AxiosRequestConfig, type AxiosError } from 'axios'

import { transform, camelCase, isArray, isObject } from 'lodash'

import { clearToken } from './storage'

export const camelize = obj =>
  transform(obj, (acc, value, key, target) => {
    const camelKey = isArray(target) ? key : camelCase(key)

    acc[camelKey] = isObject(value) ? camelize(value) : value
  })

export async function request<T>(url: string, config: AxiosRequestConfig): Promise<T | T[] | undefined> {
  try {
    const res = await axios<T | T[]>(url, config)
    const { data } = res
    if(data === null) Promise.reject('no content')
    if (isArray(data)) return data.map(e => camelize(e)) as T[]
    return camelize(data) as T
  } catch (err) {
    const error = err as AxiosError
    if (error.response?.status === 401) {
      console.log(error)
      clearToken()
    }
  }
}

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) return response
}
