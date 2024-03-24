import { BACKEND_KEYS, STORAGE_KEYS } from '@renderer/constants/app-keys.const'
import axios, { AxiosRequestConfig } from 'axios'

interface Response<T> {
  data: T
  message: string
  access_token?: string
  pages?: number
}

class HttpService {
  baseUrl: string

  fetchingService: typeof axios

  apiVersion: string

  constructor(baseUrl = BACKEND_KEYS.SERVER_URL, apiVersion = 'api/v1') {
    this.baseUrl = baseUrl
    this.fetchingService = axios
    this.apiVersion = apiVersion
  }

  private getFullApiUrl(url = ''): string {
    return `${this.baseUrl}/${this.apiVersion}/${url}`
  }

  private populateTokenToHeaderConfig(): { Authorization: string | null } {
    return {
      Authorization: localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private extractUrlAndDataFromConfig(config: AxiosRequestConfig): any {
    return {
      params: config.params,
      data: config.data
    }
  }

  async get<T>(config: AxiosRequestConfig, withAuth = true): Promise<Response<T>> {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      }
    }

    const { data } = await this.fetchingService<Response<T>>(this.getFullApiUrl(config.url), {
      ...config,
      ...this.extractUrlAndDataFromConfig(config)
    })
    return data
  }

  async put<T>(config: AxiosRequestConfig, withAuth = true): Promise<Response<T>> {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      }
    }

    const { data } = await this.fetchingService<Response<T>>(this.getFullApiUrl(config.url), {
      ...config,
      ...this.extractUrlAndDataFromConfig(config)
    })

    return data
  }

  async delete<T>(config: AxiosRequestConfig, withAuth = true): Promise<Response<T>> {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      }
    }

    const { data } = await this.fetchingService<Response<T>>(this.getFullApiUrl(config.url), {
      ...config,
      ...this.extractUrlAndDataFromConfig(config)
    })

    return data
  }
}

export default HttpService
