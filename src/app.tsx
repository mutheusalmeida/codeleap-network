import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { Login } from './pages/login'
import { Home } from './pages/home'
import { ProtectedRoute } from './resources/utils/protected-route'

export function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='/home' element={<Home />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}
