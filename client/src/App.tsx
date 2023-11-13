import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import SignUp from './Components/SignUp/Signup'
import SignIn from './Components/SignIn/SignIn'
import styled from '@emotion/styled'
//@ts-ignore
import { RequireAuth } from 'react-auth-kit'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth loginPath="/sign-in">
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </AppContainer>
  )
}
export default App
