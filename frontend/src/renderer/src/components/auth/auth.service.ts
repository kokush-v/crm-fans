import HttpService from '@renderer/api/http.service'
import { BACKEND_KEYS, STORAGE_KEYS } from '../../constants/app-keys.const'
import { IUser } from '@renderer/types/user/user.types'
import { AuthData } from '@renderer/types/auth/auth.types'
import UserModel from '@renderer/types/user/user.model'

class AuthService extends HttpService {
  async register(body: AuthData): Promise<AuthData> {
    const { data } = await this.put<AuthData>({
      method: 'post',
      url: BACKEND_KEYS.AUTH.REG,
      data: body
    })

    return data
  }

  async getUser(): Promise<IUser> {
    const { data } = await this.get<IUser>({
      url: BACKEND_KEYS.AUTH.USER
    })

    console.log(data)

    return data
  }

  async login(body: AuthData): Promise<UserModel> {
    const { data: user, access_token } = await this.put<UserModel>({
      method: 'post',
      url: BACKEND_KEYS.AUTH.LOGIN,
      data: body,
      withCredentials: true
    })

    if (access_token) {
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, `Bearer ${access_token}`)
    }

    return user
  }
}

export default new AuthService()
