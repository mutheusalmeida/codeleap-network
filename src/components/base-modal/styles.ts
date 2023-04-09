import styled, { css } from 'styled-components'

type BaseModalWrapperType = {
  hasOverlay: boolean
}

export const BaseModalWrapper = styled.div<BaseModalWrapperType>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  ${({ hasOverlay }) => hasOverlay && css`
    background-color: rgba(119, 119, 119, 0.8);
  `}
`
