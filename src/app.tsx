import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { Login } from './pages/login'
import { Home } from './pages/home'

export function App () {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  )
}
