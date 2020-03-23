import axios from 'axios'
import { env } from '../env/env'

export interface WeshResult<T> {
  message: string,
  result?: T,
  error?: any
}

export class HttpClient {
  static config = {
    headers: { 'Content-Type': 'application/json' },
    timeout: 0,
  }

  static async post<T>(url: string, payload?: any, queryParams: any = {}, headers: any = {}): Promise<WeshResult<T>> {
    const { data } = await axios.post(env.HOST + url, payload, { params: queryParams, ...this.config, headers })
    return data
  }

  static async put<T>(url: string, payload: any, headers: any = {}): Promise<WeshResult<T>> {
    const { data } = await axios.put(env.HOST + url, payload, { ...this.config, headers })
    return data
  }

  static async get<T>(url: string, queryParams: any = {}, headers: any = {}): Promise<WeshResult<T>> {
    const { data } = await axios.get(env.HOST + url, { params: queryParams, ...this.config, headers })
    return data
  }

  static async delete<T>(url: string, queryParams: any = {}, headers: any = {}): Promise<WeshResult<T>> {
    const { data } = await axios.delete(env.HOST + url, { params: queryParams, ...this.config, headers })
    return data
  }
}
