'use client'

import {
  Box,
  Flex,
  VStack,
  Text,
  useColorMode,
  useDisclosure
} from '@chakra-ui/react'
import { useState } from 'react'
import { Navbar } from '@/app/components/Navbar'
import { Sidebar } from '@/app/components/Sidebar'
//import { RightSidebar } from '@/app/components/RightSidebar'
import { InputArea } from '@/app/components/InputArea'

type Message = {
  id: number
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi Basil,\nHow can I help you today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState('')
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true })

  const sendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: inputMessage,
          sender: 'user',
          timestamp: new Date(),
        },
      ])
      setInputMessage('')
    }
  }

  return (
    <Flex h="100vh" direction="column">
      <Navbar  onToggleSidebar={onToggle} isOpen={isOpen}/>
      <Flex flex={1} overflow="hidden">
        <Sidebar isOpen={isOpen} toggleColorMode={toggleColorMode} colorMode={colorMode} />
        <Flex direction="column" h="full" flex={1} bg="gray.900">
          {/*<Box p={4} borderBottom="1px" borderColor="gray.700">
            <Text color="white" fontSize="lg" fontWeight="medium">
              CST331 - New Chat
            </Text>
          </Box>*/}

          <VStack flex={1} p={4} spacing={4} align="stretch" overflowY="auto">
            {messages.map((message) => (
              <Box
                key={message.id}
                alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}
                maxW="70%"
              >
                <Box
                  bg={message.sender === 'user' ? 'blue.500' : 'gray.800'}
                  color="white"
                  p={4}
                  rounded="lg"
                >
                  <Text>{message.text}</Text>
                </Box>
              </Box>
            ))}
          </VStack>

          <InputArea
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            sendMessage={sendMessage}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}