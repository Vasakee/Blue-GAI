import { Box, Flex, Text, useColorModeValue, Avatar } from '@chakra-ui/react'

type Message = {
  text: string
  sender: 'user' | 'ai'
}

export default function ChatArea({ messages }: { messages: Message[] }) {
  return (
    <Flex flexDirection="column" flex={1} overflowY="auto" p={4}>
      {messages.map((message, index) => (
        <Flex key={index} justifyContent={message.sender === 'user' ? 'flex-end' : 'flex-start'} mb={4}>
          {message.sender === 'ai' && (
            <Avatar name="Blue GAI" bg="blue.500" color="white" mr={2}>
            </Avatar>
          )}
          <Box
            maxW="70%"
            bg={useColorModeValue(
              message.sender === 'user' ? 'blue.100' : 'gray.100',
              message.sender === 'user' ? 'blue.700' : 'gray.700'
            )}
            color={useColorModeValue('gray.800', 'white')}
            borderRadius="lg"
            p={3}
          >
            <Text>{message.text}</Text>
          </Box>
          {message.sender === 'user' && (
            <Avatar name="Basil Dayigil" bg="green.500" color="white" ml={2}>
            </Avatar>
          )}
        </Flex>
      ))}
    </Flex>
  )
}