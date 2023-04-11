import { ReactComponent as EditIcon } from '@/assets/icons/edit-icon.svg'
import { ReactComponent as DeleteIcon } from '@/assets/icons/delete-icon.svg'
import { Button } from '../button'

import * as S from './styles'

export const Post = () => {
  return (
    <S.PostWrapper>
      <S.PostHeader>
        <S.PostTitle>My First Post at CodeLeap Network!</S.PostTitle>

        <S.IconsWrapper>
          <Button
            aria-label='delete-button'
            type='button'
            btnStyle='icon-only'
            width='1.875em'
            height='1.875em'
          >
            <DeleteIcon />
          </Button>

          <Button
            aria-label='edit-button'
            type='button'
            btnStyle='icon-only'
            width='1.875em'
            height='1.875em'
          >
            <EditIcon />
          </Button>
        </S.IconsWrapper>
      </S.PostHeader>

      <S.PostBody>
        <S.PostInfo>
          <S.PostUser>@Victor</S.PostUser>

          <S.PostTime>25 minutes ago</S.PostTime>
        </S.PostInfo>

        <S.PostContent as='p'>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </S.PostContent>
      </S.PostBody>
    </S.PostWrapper>
  )
}
