/* eslint-disable camelcase */
import { ReactComponent as EditIcon } from '@/assets/icons/edit-icon.svg'
import { ReactComponent as DeleteIcon } from '@/assets/icons/delete-icon.svg'
import { Button } from '../button'
import { PostType } from 'posts'
import { useAppSelector } from '@/hooks/use-app-selector'
import { useState } from 'react'

import * as S from './styles'

type PostProps = PostType

export const Post = ({
  id,
  username,
  created_datetime,
  title,
  content,
}: PostProps) => {
  const user = useAppSelector(state => state.user.user)
  const [showActions, setShowActions] = useState(false)

  const isActionsVisible = user.username === username && showActions

  return (
    <S.PostWrapper
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <S.PostHeader>
        <S.PostTitle>{title}</S.PostTitle>

        <S.IconsWrapper isActionsVisible={isActionsVisible}>
          <Button
            aria-label='delete-button'
            type='button'
            btnStyle='icon-only'
            btnWidth='1.875em'
            btnHeight='1.875em'
          >
            <DeleteIcon />
          </Button>

          <Button
            aria-label='edit-button'
            type='button'
            btnStyle='icon-only'
            btnWidth='1.875em'
            btnHeight='1.875em'
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
