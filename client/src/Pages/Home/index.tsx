import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useSignOut } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'

function Home() {
  const signOut = useSignOut()
  const navigate = useNavigate()

  const logout = () => {
    signOut()
    navigate('/sign-in')
  }

  return (
    <Container>
      <Typography variant="h1">Welcome to Home!</Typography>

      <Button color="secondary" onClick={logout}>
        Logout
      </Button>
    </Container>
  )
}

export default Home
