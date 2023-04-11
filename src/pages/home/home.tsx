import { useAppSelector } from '@/hooks/use-app-selector'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '@/hooks/use-app-dispatch'
import { setUser } from '@/redux/slices/user-slice'

import * as S from './styles'

export const Home = () => {
  const { username } = useAppSelector(state => state.user.user)
  const dispatch = useAppDispatch()

  return (
    <S.HomeWrapper>
      <S.HomeContainer>
        <S.HomeHeader>
          <S.HomeTitle>CodeLeap Network</S.HomeTitle>

          <S.UserWrapper>
            <S.UserGreeting>Welcome back, {username}</S.UserGreeting>

            <S.LogoutLink
              to='/login'
              onClick={() => dispatch(setUser({ username: undefined, isAuthenticated: false }))}
            >
              Log out
            </S.LogoutLink>
          </S.UserWrapper>
        </S.HomeHeader>

        <S.HomeContent>
          k
        </S.HomeContent>
      </S.HomeContainer>
    </S.HomeWrapper>
  )
}
