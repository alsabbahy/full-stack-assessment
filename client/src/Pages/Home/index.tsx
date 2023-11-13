import React from 'react'
import { Button, Container, Typography } from '@mui/material'
import { useSignOut, useAuthUser } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'
import { AuthStateUserObject } from 'react-auth-kit/dist/types'

function Home() {
  const signOut = useSignOut()
  const navigate = useNavigate()

  const logout = () => {
    signOut()
    navigate('/sign-in')
  }
  const authUser: AuthStateUserObject = useAuthUser()

  return (
    <Container>
      <Typography variant="h1">Welcome to Home!</Typography>
      <Typography variant="h2">
        Hello {authUser?.firstName} {authUser?.lastName}
      </Typography>
      <Button color="secondary" onClick={logout}>
        Logout
      </Button>
    </Container>
  )
}

export default Home
