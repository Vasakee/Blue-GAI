'use client'

import LoginForm from '@/app/components/loginForm'
import { Box, Container, Heading } from '@chakra-ui/react'

export default function Login() {
  return (
    <Container maxW="lg" py={12}>
      <Box textAlign="center" mb={10}>
        <Heading>Login to Your Account</Heading>
      </Box>
      <LoginForm />
    </Container>
  )
}