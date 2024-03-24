import { Navigate, Route, Routes } from 'react-router-dom'

import AuthPageContainer from '../pages/auth/main'
import { ProtectedRoutes } from './protected-routes'
import { APP_KEYS } from '@renderer/constants'
import App from '@renderer/App'
import { QUERY_KEYS, ROUTER_KEYS } from '@renderer/constants/app-keys.const'
import authService from '@renderer/components/auth/auth.service'
import { useQuery } from 'react-query'

export function MainRouter(): JSX.Element {
  useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: async () => {
      const userData = await authService.getUser()
      console.log(userData) // Log the user data
      return userData
    },
    refetchOnMount: true
  })

  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route element={<App />} path={APP_KEYS.ROUTER_KEYS.HOME} />
      </Route>
      <Route path={APP_KEYS.ROUTER_KEYS.AUTH.ROOT}>
        <Route
          element={<AuthPageContainer formikAuthFormProps={{ type: 'login' }} />}
          path={APP_KEYS.ROUTER_KEYS.AUTH.LOGIN}
        />
        <Route
          element={<AuthPageContainer formikAuthFormProps={{ type: 'register' }} />}
          path={APP_KEYS.ROUTER_KEYS.AUTH.SIGN_UP}
        />
      </Route>
      <Route path="*" element={<Navigate to={ROUTER_KEYS.HOME} />} />
    </Routes>
  )
}
