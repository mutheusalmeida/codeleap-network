import { useAppSelector } from '@/hooks/use-app-selector'
import { ReactNode } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

type ProtectedRouteProps = {
  children?: ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAppSelector(state => state.user.user)
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  return children ? <>{children}</> : <Outlet />
}
