'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Link,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

export default function Component() {
const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure()
  const { isOpen: isSignUpOpen, onOpen: onSignUpOpen, onClose: onSignUpClose } = useDisclosure()
  
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpUsername, setSignUpUsername] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempted with:', loginEmail, loginPassword)
    // Add your login logic here
  }

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Sign up attempted with:', signUpEmail, signUpUsername, signUpPassword)
    // Add your sign up logic here
  }
  const bgColor = useColorModeValue('gray.900', 'gray.900')
  const primaryBlue = '#3182CE' // Chakra's blue.500

  return (
    <Box bg={bgColor} minH="100vh" position="relative" p={10}>

      <Box
        position="absolute"
        inset={0}
        opacity={0.1}
        backgroundImage="url('/placeholder.svg')"
        backgroundRepeat="repeat"
        backgroundSize="500px"
      />


      <Container maxW="container.xl" >
        <HStack justify="space-between" py={4} rounded="xl"
            borderWidth={2} width="900px" ml={9} height='90px'
            borderColor="gray.700" /*mt={9}*/ p={6}  >
          <HStack spacing={2} p={6}>
            <Box
              bg={primaryBlue}
              w={10}
              h={10}
              rounded="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontWeight="bold">
               BG
              </Text>
            </Box>
            <Text color="white" fontWeight="bold" fontSize='x-large'>
              Blue-GAI
            </Text>
          </HStack>
           <HStack spacing={4}>
              <Button
                size="md"
                bg="blue.500"
                color="white"
                _hover={{ bg: 'blue.600' }}
                onClick={onSignUpOpen}
                boxShadow={'base'}
              >
                Get Started
              </Button>
              <Button
                size="md"
                variant="outline"
                color="blue.500"
                borderColor="blue.500"
                _hover={{ bg: 'blue.500', color: 'white' }}
                onClick={onLoginOpen}
              >
                Log In
              </Button>
            </HStack>
        </HStack>
      </Container>


      <Container maxW="container.xl" pt={20} mt={8}>
        <HStack align="start" spacing={20}>
          <VStack align="start" spacing={6} flex={1}>
            <Heading
              as="h1"
              size="2xl"
              color="white"
              lineHeight="1.2"
              fontWeight="bold"
              letterSpacing="tight"
              mb={8}
            >
              START
              <br />
              YOUR TECH JOURNEY
              <br />
              WITH US 
            </Heading>
            <Text color="gray.400" fontSize="lg" mt={5} mb={5}>
              Explore more about Bluehouse Technologies, and let's help you start your tech career!
            </Text>
            <Button
              bg={primaryBlue}
              color="white"
              size="lg"
              mt={6}
              rightIcon={<Icon as={FaArrowRight} />}
              _hover={{ bg: 'blue.600' }}
               onClick={onSignUpOpen}
            >
              Get Started
            </Button>
          </VStack>


          <Box
            bg="gray.800"
            p={6}
            rounded="xl"
            borderWidth={1}
            borderColor="gray.700"
            width="400px"
          >
           <Text fontSize="lg" fontWeight='bold' display='flex' alignItems='center'
              color="white">
               LEARN | INNOVATE | IMPACT!
            </Text>
          </Box>
        </HStack>
      </Container>
      <Modal isOpen={isLoginOpen} onClose={onLoginClose} isCentered>
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent bg="gray.900" borderWidth={1} borderColor="gray.700" borderRadius="xl">
          <ModalHeader>
            <HStack spacing={2}>
              <Box bg="blue.500" w={8} h={8} rounded="md" display="flex" alignItems="center" justifyContent="center">
                <Text color="white" fontWeight="bold">BG</Text>
              </Box>
              <Text color="white" fontSize="xl" fontWeight="bold">Welcome Back</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody pb={6}>
            <form onSubmit={handleLogin}>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel htmlFor="login-email" color="gray.400">Email</FormLabel>
                  <Input
                    id="login-email"
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    bg="gray.800"
                    border="none"
                    color="white"
                    _placeholder={{ color: 'gray.500' }}
                    placeholder="Enter your email"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="login-password" color="gray.400">Password</FormLabel>
                  <Input
                    id="login-password"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    bg="gray.800"
                    border="none"
                    color="white"
                    _placeholder={{ color: 'gray.500' }}
                    placeholder="Enter your password"
                  />
                </FormControl>
                <Button type="submit" width="full" bg="blue.500" color="white" _hover={{ bg: 'blue.600' }}>
                  Log In
                </Button>
                <Text color="gray.400">
                  Don't have an account?{' '}
                  <Link color="blue.500" onClick={() => { onLoginClose(); onSignUpOpen(); }}>
                    Sign Up
                  </Link>
                </Text>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>


      <Modal isOpen={isSignUpOpen} onClose={onSignUpClose} isCentered>
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent bg="gray.900" borderWidth={1} borderColor="gray.700" borderRadius="xl">
          <ModalHeader>
            <HStack spacing={2}>
              <Box bg="blue.500" w={8} h={8} rounded="md" display="flex" alignItems="center" justifyContent="center">
                <Text color="white" fontWeight="bold">BG</Text>
              </Box>
              <Text color="white" fontSize="xl" fontWeight="bold">Get Started</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody pb={6}>
            <form onSubmit={handleSignUp}>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel htmlFor="signup-email" color="gray.400">Email</FormLabel>
                  <Input
                    id="signup-email"
                    type="email"
                    value={signUpEmail}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                    bg="gray.800"
                    border="none"
                    color="white"
                    _placeholder={{ color: 'gray.500' }}
                    placeholder="Enter your email"
                  />
                </FormControl>
                {/*<FormControl>
                  <FormLabel htmlFor="signup-username" color="gray.400">Username</FormLabel>
                  <Input
                    id="signup-username"
                    value={signUpUsername}
                    onChange={(e) => setSignUpUsername(e.target.value)}
                    bg="gray.800"
                    border="none"
                    color="white"
                    _placeholder={{ color: 'gray.500' }}
                    placeholder="Choose a username"
                  />
                </FormControl>*/}
                <FormControl>
                  <FormLabel htmlFor="signup-password" color="gray.400">Password</FormLabel>
                  <Input
                    id="signup-password"
                    type="password"
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                    bg="gray.800"
                    border="none"
                    color="white"
                    _placeholder={{ color: 'gray.500' }}
                    placeholder="Create a password"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="signup-confirm-password" color="gray.400">Confirm Password</FormLabel>
                  <Input
                    id="signup-confirm-password"
                    type="password"
                    value={signUpConfirmPassword}
                    onChange={(e) => setSignUpConfirmPassword(e.target.value)}
                    bg="gray.800"
                    border="none"
                    color="white"
                    _placeholder={{ color: 'gray.500' }}
                    placeholder="Confirm your password"
                  />
                </FormControl>
                <Button type="submit" width="full" bg="blue.500" color="white" _hover={{ bg: 'blue.600' }}>
                  Create Account
                </Button>
                <Text color="gray.400">
                  Already have an account?{' '}
                  <Link color="blue.500" onClick={() => { onSignUpClose(); onLoginOpen(); }}>
                    Log In
                  </Link>
                </Text>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}