import { ROUTER_KEYS } from '@renderer/constants/app-keys.const'
import { selectUser } from '@renderer/selectors/user.selector'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export function ProtectedRoutes(): JSX.Element {
  const user = selectUser()

  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate(ROUTER_KEYS.AUTH.LOGIN)
    }
  }, [user])

  return <Outlet />
}
