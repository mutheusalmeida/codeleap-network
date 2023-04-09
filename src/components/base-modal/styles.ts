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

export const ModalContainer = styled.div`
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 1em;
  width: max-content;
  max-width: 100%;
  padding: 1.5em;
  margin: 0 1em;
`
