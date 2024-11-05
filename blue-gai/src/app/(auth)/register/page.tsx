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
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import Link from 'next/link'

export default function Component() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true })
  const toast = useToast()
  
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })
  
  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const validateForm = () => {
    const newErrors = {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    }
    if (!formData.username) {
      newErrors.username = 'Username is required'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error !== '')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Handle signup logic here
      console.log('Sign up attempted with:', formData)
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
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
                  BG
                </Text>
              </Box>
              <Text color="white" fontSize="xl" fontWeight="bold">
                Get Started
              </Text>
            </HStack>
          </ModalHeader>

          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel htmlFor="email" srOnly>
                    Email
                  </FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    bg="gray.800"
                    border="none"
                    color="white"
                    _placeholder={{ color: 'gray.400' }}
                    _hover={{ bg: 'gray.700' }}
                    _focus={{ bg: 'gray.700', borderColor: 'blue.500' }}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.username}>
                  <FormLabel htmlFor="username" srOnly>
                    Username
                  </FormLabel>
                  <Input
                    id="username"
                    name="username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleChange}
                    bg="gray.800"
                    border="none"
                    color="white"
                    _placeholder={{ color: 'gray.400' }}
                    _hover={{ bg: 'gray.700' }}
                    _focus={{ bg: 'gray.700', borderColor: 'blue.500' }}
                  />
                  <FormErrorMessage>{errors.username}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.password}>
                  <FormLabel htmlFor="password" srOnly>
                    Password
                  </FormLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create Password"
                    value={formData.password}
                    onChange={handleChange}
                    bg="gray.800"
                    border="none"
                    color="white"
                    _placeholder={{ color: 'gray.400' }}
                    _hover={{ bg: 'gray.700' }}
                    _focus={{ bg: 'gray.700', borderColor: 'blue.500' }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.confirmPassword}>
                  <FormLabel htmlFor="confirmPassword" srOnly>
                    Confirm Password
                  </FormLabel>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    bg="gray.800"
                    border="none"
                    color="white"
                    _placeholder={{ color: 'gray.400' }}
                    _hover={{ bg: 'gray.700' }}
                    _focus={{ bg: 'gray.700', borderColor: 'blue.500' }}
                  />
                  <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  width="full"
                  bg="blue.500"
                  color="white"
                  _hover={{ bg: 'blue.600' }}
                  size="lg"
                >
                  Create Account
                </Button>

                <HStack spacing={2} width="full" justify="center">
                  <Text color="gray.400">Already have an account?</Text>
                  <Link href="/login" passHref>
                    <Button
                      as="a"
                      variant="link"
                      color="blue.500"
                      _hover={{ color: 'blue.400' }}
                    >
                      Log In
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