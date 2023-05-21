
import './App.css'
import { Navigate, Outlet } from 'react-router-dom'
import { Layout } from './components/layout'
import { useAuth } from './contexts/AuthContext';

function App() {

  const {authenticated} = useAuth();

  
  if(!authenticated) {
    return (
      <Navigate to="/login" />
    )
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
    
  )
}

export default App
