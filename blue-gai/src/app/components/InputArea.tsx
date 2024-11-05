import {
  Box,
  HStack,
  IconButton,
  Icon,
  Input,
} from '@chakra-ui/react'
import { Plus, Send, MicIcon } from 'lucide-react'

interface InputAreaProps {
  inputMessage: string
  setInputMessage: (message: string) => void
  sendMessage: () => void
}

export function InputArea({ inputMessage, setInputMessage, sendMessage }: InputAreaProps) {
  return (
    <Box p={4} borderTop="1px" borderColor="gray.700">
      <HStack spacing={2}>
        <IconButton
          aria-label="Add attachment"
          icon={<Icon as={MicIcon} />}
          variant="ghost"
          color="gray.400"
        />
        <Input
          placeholder="start a conversation"
          bg="gray.800"
          border="none"
          color="white"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          _focus={{ border: 'none' }}
        />
        <IconButton
          aria-label="Send message"
          icon={<Icon as={Send} />}
          bg="blue.500"
          color="white"
          _hover={{ bg: 'blue.600' }}
          onClick={sendMessage}
        />
      </HStack>
    </Box>
  )
}