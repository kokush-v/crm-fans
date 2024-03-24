import { QUERY_KEYS } from '@renderer/constants/app-keys.const'
import { IUser } from '@renderer/types/user/user.types'
import { useQuery } from 'react-query'

export const selectUser = (): IUser => {
  const { data: user } = useQuery({
    queryKey: [QUERY_KEYS.USER],
    select: (state) => state
  })

  return user as IUser
}
