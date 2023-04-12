/* eslint-disable camelcase */
import { ReactComponent as EditIcon } from '@/assets/icons/edit-icon.svg'
import { ReactComponent as DeleteIcon } from '@/assets/icons/delete-icon.svg'
import { Button } from '../button'
import { PostType } from 'posts'
import { useAppSelector } from '@/hooks/use-app-selector'
import { FormEvent, useState } from 'react'
import { Title } from '@/style'
import { useOverlayTrigger } from 'react-aria'
import useModal from '@/hooks/use-modal'
import { Modal } from '../modal'
import { useAppDispatch } from '@/hooks/use-app-dispatch'
import { deletePost, updatePost } from '@/redux/slices/posts-slice'
import { TextField } from '../text-field'
import { handleFormChange } from '@/resources/utils/handle-form-change'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import * as S from './styles'

type PostProps = PostType

export const Post = ({
  id,
  username,
  created_datetime,
  title,
  content,
}: PostProps) => {
  const initialState = {
    title: '',
    content: '',
  }
  const [formData, setFormData] = useState(initialState)
  const user = useAppSelector(state => state.user.user)
  const [showActions, setShowActions] = useState(false)
  const state = useModal()
  const editModalState = useModal()
  const { status } = useAppSelector(state => state.posts)
  const { overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
  )
  const { overlayProps: editModalOverlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    editModalState,
  )
  const dispatch = useAppDispatch()

  const handleEditPostFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(updatePost({ id, data: formData }))
      .unwrap()
      .then((res: PostType) => res)
      .catch((err: unknown) => {
        if (err instanceof Error) {
          console.log(err.message)
        }
      })
      .finally(() => {
        editModalState.close()
        setFormData(initialState)
      })
  }

  const handleDeletePostFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(deletePost({ id }))
      .unwrap()
      .then((res: PostType) => res)
      .catch((err: unknown) => {
        if (err instanceof Error) {
          console.log(err.message)
        }
      })
      .finally(() => {
        state.close()
      })
  }

  const isActionsVisible = user.username === username && showActions

  return (
    <>
      <Modal
        aria-labelledby='modal-title'
        state={state}
        isDismissable
        {...overlayProps}
      >
        <S.DeleteForm onSubmit={handleDeletePostFormSubmit}>
          <Title id='modal-title' tabIndex={0}>Are you sure you want to delete this item?</Title>

          <S.BtnWrapper>
            <Button
              type='button'
              btnStyle='secondary'
              textCase='capitalize'
              handleClick={() => state.close()}
            >
              Cancel
            </Button>

            <Button
              type='submit'
              btnStyle='primary'
              textCase='capitalize'
              bgColor='--red'
              isLoading={status === 'deleting'}
            >
              Delete
            </Button>
          </S.BtnWrapper>
        </S.DeleteForm>
      </Modal>

      <Modal
        aria-labelledby='modal-title'
        state={editModalState}
        isDismissable
        {...editModalOverlayProps}
      >
        <S.EditForm onSubmit={handleEditPostFormSubmit}>
          <Title id='modal-title' tabIndex={0}>Edit item</Title>

          <TextField
            label='Title'
            name='title'
            value={formData.title}
            placeholder='Hello, world!'
            onChange={(e) => handleFormChange(e, setFormData)}
          />

          <TextField
            label='Content'
            name='content'
            value={formData.content}
            placeholder='Your content here'
            onChange={(e) => handleFormChange(e, setFormData)}
            inputElementType='textarea'
          />

          <S.BtnWrapper>
            <Button
              type='button'
              btnStyle='secondary'
              textCase='capitalize'
              handleClick={() => editModalState.close()}
            >
              Cancel
            </Button>

            <Button
              type='submit'
              btnStyle='primary'
              textCase='capitalize'
              bgColor='--green'
              disabled={!formData.title || !formData.content}
              isLoading={status === 'editing'}
            >
              Save
            </Button>
          </S.BtnWrapper>
        </S.EditForm>
      </Modal>

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
              handleClick={() => state.open()}
            >
              <DeleteIcon />
            </Button>

            <Button
              aria-label='edit-button'
              type='button'
              btnStyle='icon-only'
              btnWidth='1.875em'
              btnHeight='1.875em'
              handleClick={() => editModalState.open()}
            >
              <EditIcon />
            </Button>
          </S.IconsWrapper>
        </S.PostHeader>

        <S.PostBody>
          <S.PostInfo>
            <S.PostUser>@{username}</S.PostUser>

            <S.PostTime>{formatDistanceToNowStrict(new Date(created_datetime))} ago</S.PostTime>
          </S.PostInfo>

          <S.PostContent as='p'>
            {content}
          </S.PostContent>
        </S.PostBody>
      </S.PostWrapper>
    </>
  )
}
