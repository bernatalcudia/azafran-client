import { BrowserRouter } from 'react-router'
import { UnAuthedRoutes } from '../routes/UnAuthedRoutes'
import { AuthedRoutes } from '../routes/AuthedRoutes'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <UnAuthedRoutes />
      <AuthedRoutes />
    </BrowserRouter>
  )
}

export default App
