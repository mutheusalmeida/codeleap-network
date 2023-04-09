import { Link } from 'react-router-dom'
import * as S from './styles'

export const Login = () => {
  return (
    <S.LoginWrapper>
      <h1>login</h1>

      <Link to='/home'>Login</Link>
    </S.LoginWrapper>
  )
}
