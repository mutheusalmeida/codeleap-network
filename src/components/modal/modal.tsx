import { ReactNode, useRef } from 'react'
import { AriaModalOverlayProps, useModalOverlay } from 'react-aria'
import { ModalState } from 'modal'

import * as S from './styles'

type DialogProps = {
  children: ReactNode
  state: ModalState
  hasOverlay?: boolean
} & AriaModalOverlayProps

export const Modal = ({
  state,
  children,
  hasOverlay = true,
  ...props
}: DialogProps) => {
  const ref = useRef(null)
  const { modalProps, underlayProps } = useModalOverlay(props, state, ref)

  return (
    <S.BaseModalWrapper
      hasOverlay={hasOverlay}
      isOpen={state.isOpen}
      {...underlayProps}
    >
      <S.ModalContainer
        {...modalProps}
        ref={ref}
      >
        {children}
      </S.ModalContainer>
    </S.BaseModalWrapper>
  )
}
