import { useAppSelector } from '@/hooks/use-app-selector'
import { useAppDispatch } from '@/hooks/use-app-dispatch'
import { setUser } from '@/redux/slices/user-slice'
import { Title } from '@/style'
import { TextField } from '@/components/text-field'
import { Button } from '@/components/button'
import { FormEvent, useCallback, useEffect, useState } from 'react'
import { handleFormChange } from '@/resources/utils/handle-form-change'
import { Post } from '@/components/post'
import { createPost, getPosts } from '@/redux/slices/posts-slice'

import * as S from './styles'
import { AsyncThunkAction } from '@reduxjs/toolkit'
import { CreatePostType } from 'posts'

export const Home = () => {
  const initialState = {
    title: '',
    content: '',
  }
  const [formData, setFormData] = useState(initialState)
  const { username } = useAppSelector(state => state.user.user)
  const posts = useAppSelector(state => state.posts.posts)
  const dispatch: (value: any) => any = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { title, content } = formData
    setIsLoading(true)

    if (username) {
      dispatch(createPost({ username, title, content }))
        .unwrap()
        .then((res: CreatePostType) => {
          console.log(res)
        }).catch((err: unknown) => {
          if (err instanceof Error) {
            console.log(err.message)
          }
        }).finally(() => {
          setIsLoading(false)
          initFetch()
          setFormData(initialState)
        })
    }
  }

  const initFetch = useCallback(() => {
    dispatch(getPosts())
  }, [dispatch])

  useEffect(() => {
    initFetch()
  }, [initFetch])

  return (
    <S.HomeWrapper>
      <S.HomeContainer>
        <S.HomeHeader>
          <S.HomeTitle>CodeLeap Network</S.HomeTitle>

          <S.UserWrapper>
            <S.UserGreeting>Welcome back, {username}</S.UserGreeting>

            <S.LogoutLink
              to='/login'
              onClick={() => dispatch(setUser({ username: undefined, isAuthenticated: false }))}
            >
              Log out
            </S.LogoutLink>
          </S.UserWrapper>
        </S.HomeHeader>

        <S.HomeContent>
          <S.PostForm as='form' onSubmit={handleFormSubmit}>
            <Title>What’s on your mind?</Title>

            <TextField
              label='Title'
              name='title'
              placeholder='Hello, world!'
              onChange={(e) => handleFormChange(e, setFormData)}
            />

            <TextField
              label='Content'
              name='content'
              placeholder='Your content here'
              onChange={(e) => handleFormChange(e, setFormData)}
              inputElementType='textarea'
            />

            <Button
              type='submit'
              disabled={false}
              isLoading={isLoading}
              textCase='capitalize'
            >
              Create
            </Button>
          </S.PostForm>

          {posts.map(post => (
            <Post
              key={post.id}
              id={post.id}
              username={post.username}
              created_datetime={post.created_datetime}
              title={post.title}
              content={post.content}
            />
          ))}
        </S.HomeContent>
      </S.HomeContainer>
    </S.HomeWrapper>
  )
}
