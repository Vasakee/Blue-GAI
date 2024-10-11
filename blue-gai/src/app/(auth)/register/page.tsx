'use client'

import SignupForm from '@/app/components/SignupForm'
import { Box, Container, Heading } from '@chakra-ui/react'

export default function Register() {
  return (
    <Container maxW="lg" py={12}>
      <Box textAlign="center" mb={10}>
        <Heading>Sign up to get started</Heading>
      </Box>
      <SignupForm />
    </Container>
  )
}