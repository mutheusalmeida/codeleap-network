import { Link } from 'react-router-dom'
import { BaseModal } from '@/components/base-modal'
import { useModal } from '@/hooks/use-modal'

import * as S from './styles'

export const Login = () => {
  const { ref: loginModalRef } = useModal()

  return (
    <S.LoginWrapper>
      <BaseModal ref={loginModalRef}>
        Login Modal
      </BaseModal>

      <Link to='/home'>Login</Link>
    </S.LoginWrapper>
  )
}
