import { Link } from 'react-router-dom'
import { BaseModal } from '@/components/base-modal'
import { useModal } from '@/hooks/use-modal'
import { Title } from '@/style'

import * as S from './styles'

export const Login = () => {
  const { ref: loginModalRef } = useModal()

  return (
    <BaseModal
      ref={loginModalRef}
      defaultOpen
      hasOverlay={false}
    >
      <S.LoginForm>
        <Title>Welcome to CodeLeap network!</Title>
        <Link to='/home'>Login</Link>
      </S.LoginForm>
    </BaseModal>
  )
}
