import { Title, primarySelection } from '@/style'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 50em;
  background-color: var(--white);
`

export const HomeHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  min-height: 5em;
  padding: 1em 2.3125em;
  gap: 1em;
  background-color: var(--primary-color);

  ${primarySelection}
`

export const HomeTitle = styled(Title)`
  color: var(--white);
`

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-left: auto;
`

export const UserGreeting = styled(Title)`
  font-size: var(--xs);
  font-weight: 400;
  color: var(--white);
`

export const LogoutLink = styled(Link)`
  font-size: var(--xxs);
  font-weight: 500;
  color: var(--white);
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

export const HomeContent = styled.main`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`

export const SpinnerWrapper = styled.main`
  display: flex;
  padding: 1em 0;
  align-items: center;
  justify-content: center;
`

export const PostForm = styled(HomeContent)`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  border: 1px solid var(--gray-300);
  border-radius: 1em;

  button {
    align-self: end;
  }
`
