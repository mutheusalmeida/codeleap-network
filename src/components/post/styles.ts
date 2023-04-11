import { Title, defaultButton } from '@/style'
import styled from 'styled-components'

export const PostWrapper = styled.div`
  border: 1px solid var(--gray-300);
  border-radius: 1em;
  overflow: hidden;
`

export const PostHeader = styled.div`
  background-color: var(--primary-color);
  padding: 1.25em 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PostTitle = styled(Title)`
  color: var(--white);
`

export const IconButton = styled.button`
  ${defaultButton}
  min-width: 1.875em;
  min-height: 1.875em;

  svg {
    width: inherit;
    height: 100%;
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  gap: 1.5em;
`

export const PostBody = styled.div`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`

export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PostUser = styled.span`
  font-weight: 700;
  font-size: var(--sm);
  line-height: 1.1666em;
  color: var(--gray-400);
`

export const PostTime = styled(PostUser)`
  font-weight: 400;
`

export const PostContent = styled(PostTime)`
  color: var(--dark);
`
