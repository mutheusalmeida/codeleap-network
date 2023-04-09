import { Link } from 'react-router-dom'

import * as S from './styles'

export const Home = () => {
  return (
    <S.HomeWrapper>
      <h1>home</h1>

      <Link to='/'>Go back</Link>
    </S.HomeWrapper>
  )
}
