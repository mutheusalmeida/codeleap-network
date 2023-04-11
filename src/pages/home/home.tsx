import { useAppSelector } from '@/hooks/use-app-selector'
import { useAppDispatch } from '@/hooks/use-app-dispatch'
import { setUser } from '@/redux/slices/user-slice'
import { Title } from '@/style'
import { TextField } from '@/components/text-field'
import { Button } from '@/components/button'
import { FormEvent, useState } from 'react'
import { handleFormChange } from '@/resources/utils/handleFormChange'
import { loading } from '@/resources/utils/loading'

import * as S from './styles'

export const Home = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  })
  const { username } = useAppSelector(state => state.user.user)
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const updateForm = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setIsLoading(true)

      console.log(formData)
      await loading(2)
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

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
              onChange={(e) => handleFormChange(e, (name: string, value: string) => updateForm(name, value))}
            />

            <TextField
              label='Content'
              name='content'
              placeholder='Your content here'
              onChange={(e) => handleFormChange(e, (name: string, value: string) => updateForm(name, value))}
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
        </S.HomeContent>
      </S.HomeContainer>
    </S.HomeWrapper>
  )
}
