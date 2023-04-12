/* eslint-disable camelcase */
import { ReactComponent as EditIcon } from '@/assets/icons/edit-icon.svg'
import { ReactComponent as DeleteIcon } from '@/assets/icons/delete-icon.svg'
import { Button } from '../button'
import { PostType } from 'posts'

import * as S from './styles'

type PostProps = PostType

export const Post = ({
  id,
  username,
  created_datetime,
  title,
  content,
}: PostProps) => {
  console.log(created_datetime)

  return (
    <S.PostWrapper>
      <S.PostHeader>
        <S.PostTitle>{title}</S.PostTitle>

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
          <S.PostUser>@{username}</S.PostUser>

          <S.PostTime>{new Date(created_datetime).getDate()} minutes ago</S.PostTime>
        </S.PostInfo>

        <S.PostContent as='p'>
          {content}
        </S.PostContent>
      </S.PostBody>
    </S.PostWrapper>
  )
}
