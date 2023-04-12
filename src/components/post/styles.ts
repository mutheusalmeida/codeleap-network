import { Title, primarySelection } from '@/style'
import styled from 'styled-components'

type IconsWrapperType = {
  isActionsVisible: boolean
}

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

  ${primarySelection}
`

export const PostTitle = styled(Title)`
  color: var(--white);
`

export const IconsWrapper = styled.div<IconsWrapperType>`
  display: flex;
  gap: 1.5em;
  transition: visibility, opacity, ease 0.3s;
  visibility: ${({ isActionsVisible }) => isActionsVisible ? 'visible' : 'hidden'};
  opacity: ${({ isActionsVisible }) => isActionsVisible ? '1' : '0'};
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

export const DeleteForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5em;
  width: 41.25em;
  max-width: 100%;
`

export const EditForm = styled(DeleteForm)`
  gap: 1.5em;
`

export const BtnWrapper = styled.div`
  display: flex;
  align-self: end;
  gap: 1em;
`
