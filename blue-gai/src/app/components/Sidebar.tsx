import {
  VStack,
  Box,
  Button,
  Icon,
  HStack,
  Text,
  Collapse,
  useColorModeValue
} from '@chakra-ui/react'
import { Plus, Users, BookOpen, MoreVertical, MessageCircle } from 'lucide-react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

type SidebarProps = {
  isOpen: boolean
  toggleColorMode: () => void
  colorMode: string
}

export function Sidebar({ isOpen, toggleColorMode, colorMode }: SidebarProps) {
  const previousChats = ['Chat 1', 'Chat 2', 'Chat 3']

  const bgColor = useColorModeValue('gray.100', 'gray.700')
  return (
    <Collapse in={isOpen}  animateOpacity> 
      <VStack
      w="250px"
      h="full"
      bg="gray.700"
      borderRight="1px"
      borderColor="gray.700"
      p={4}
      spacing={4}
      align="stretch"
    >
      <Button
        leftIcon={<Icon as={Plus} />}
        variant="outline"
        borderColor="blue.500"
        color="blue.500"
        _hover={{ bg: 'blue.500', color: 'white' }}
      >
        New Chat
      </Button>
      
      <Button
        leftIcon={<Icon as={MessageCircle} />}
        variant="ghost"
        color="gray.400"
        justifyContent="start"
      >
        Previous Chats
      </Button>

      <VStack align="stretch" spacing={2}>
          {previousChats.map((chat, index) => (
            <Box key={index} p={2} bg={useColorModeValue('white', 'gray.700')} borderRadius="md">
              <HStack
          p={2}
          rounded="md"
          bg="gray.800"
          cursor="pointer"
          _hover={{ bg: 'gray.800' }}
        >
              <Icon as={BookOpen} color="gray.400" />
          <Text color="white">{chat}</Text>
          <Icon as={MoreVertical} color="gray.400" ml="auto" />
          </HStack>
            </Box>
          ))}
      </VStack>
    </VStack>
    </Collapse>
  )
}