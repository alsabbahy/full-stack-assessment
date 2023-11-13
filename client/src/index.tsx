import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

import './index.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
//@ts-ignore
import { AuthProvider } from 'react-auth-kit'
import { ThemeProvider, createTheme } from '@mui/material'
import styled from '@emotion/styled'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const defaultTheme = createTheme()

const Centered = styled('div', {
  shouldForwardProp: (prop) => prop !== 'centered'
})<{ centered?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider authType={'cookie'} authName={'_auth'} cookieDomain={window.location.hostname} cookieSecure={false}>
        <Centered>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Centered>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
