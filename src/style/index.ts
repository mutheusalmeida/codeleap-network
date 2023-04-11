import styled, { css } from 'styled-components'

export const Title = styled.h1`
  font-size: var(--md);
  line-height: 1.1818em;
`

export const primarySelection = css`
  * {
    &::selection {
      background-color: var(--white);
      color: var(--primary-color);
    }
  }
`
