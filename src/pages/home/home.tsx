import { useAppSelector } from '@/hooks/use-app-selector'

import * as S from './styles'

export const Home = () => {
  const { username } = useAppSelector(state => state.user.user)

  return (
    <S.HomeWrapper>
      <h1>{username}</h1>
    </S.HomeWrapper>
  )
}
