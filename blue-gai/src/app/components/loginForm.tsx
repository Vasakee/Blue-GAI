'use client'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  VStack,
  HStack,
  Text,
  Box,
  useDisclosure,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import { useState } from 'react'
import Link from 'next/link'

export default function LoginForm() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempted with:', email, password)
  }

  return (
    <Box bg="gray.900" minH="100vh" position="relative">
      {/* Background pattern */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.1}
        backgroundImage="url('/placeholder.svg')"
        backgroundRepeat="repeat"
        backgroundSize="500px"
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent
          bg="gray.900"
          borderWidth={1}
          borderColor="gray.700"
          borderRadius="xl"
          maxW="400px"
        >
          <ModalCloseButton color="white" />
          <ModalHeader pt={6}>
            <HStack spacing={2}>
              <Box
                bg="blue.500"
                w={8}
                h={8}
                rounded="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="white" fontWeight="bold">
                  S
                </Text>
              </Box>
              <Text color="white" fontSize="xl" fontWeight="bold">
                Welcome Back
              </Text>
            </HStack>
          </ModalHeader>

          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel htmlFor="email" srOnly>
                    Email
                  </FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    bg="gray.800"
                    border="none"
                    color="white"
                    _placeholder={{ color: 'gray.400' }}
                    _hover={{ bg: 'gray.700' }}
                    _focus={{ bg: 'gray.700', borderColor: 'blue.500' }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="password" srOnly>
                    Password
                  </FormLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    bg="gray.800"
                    border="none"
                    color="white"
                    _placeholder={{ color: 'gray.400' }}
                    _hover={{ bg: 'gray.700' }}
                    _focus={{ bg: 'gray.700', borderColor: 'blue.500' }}
                  />
                </FormControl>

                <Button
                  type="submit"
                  width="full"
                  bg="blue.500"
                  color="white"
                  _hover={{ bg: 'blue.600' }}
                  size="lg"
                >
                  Log In
                </Button>

                <HStack spacing={2} width="full" justify="center">
                  <Text color="gray.400">Don&apos;t have an account yet?</Text>
                  <Link href="/signup" passHref>
                    <Button
                      as="a"
                      variant="link"
                      color="blue.500"
                      _hover={{ color: 'blue.400' }}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </HStack>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}