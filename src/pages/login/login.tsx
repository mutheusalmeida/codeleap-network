import { Link } from 'react-router-dom'
import { BaseModal } from '@/components/base-modal'
import { useModal } from '@/hooks/use-modal'

import * as S from './styles'

export const Login = () => {
  const { ref: loginModalRef } = useModal()

  return (
    <S.LoginWrapper>
      <BaseModal
        ref={loginModalRef}
        defaultOpen
        hasOverlay={false}
      >
        Login Modal
        <Link to='/home'>Login</Link>
      </BaseModal>
    </S.LoginWrapper>
  )
}
