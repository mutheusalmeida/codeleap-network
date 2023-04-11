import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from 'react-router-dom'
import { Login } from './pages/login'
import { Home } from './pages/home'
import { ProtectedRoute } from './resources/utils/protected-route'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route element={<ProtectedRoute />}>
        <Route path='home' element={<Home />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='*' element={<>404 error</>} />
    </>,
  ),
)

export function App () {
  return (
    <RouterProvider router={router} />
  )
}
