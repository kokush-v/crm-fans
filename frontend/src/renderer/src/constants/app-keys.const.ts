// Local storage keys
export const STORAGE_KEYS = {
  JWT_TOKEN_STUDENT: 'JWT_TOKEN_STUDENT',
  JWT_TOKEN_INSTRUCTOR: 'JWT_TOKEN_INSTRUCTOR',
  ADDRESS: 'ADDRESS',
  AUTH_TOKEN: 'AUTH-TOKEN'
}

// React-query keys
export const QUERY_KEYS = {
  USER: 'user'
}

// Backend Routes
export const BACKEND_KEYS = {
  SERVER_URL: 'http://127.0.0.1:3000',
  AUTH: {
    REG: 'auth/register',
    LOGIN: 'auth/login',
    USER: 'auth/user'
  }
}

export const ROUTER_KEYS = {
  HOME: '/home',
  AUTH: {
    ROOT: '/auth',
    LOGIN: '/auth/login',
    SIGN_UP: '/auth/register'
  }
}

export const ERRORS = {
  USER_EXIST: 'User already exist',
  USER_NOT_EXIST: 'User not exist, create account',
  WRONG_PASSWORD: 'Incorrect password',
  UNAUTHORIZED: 'Please login'
}
