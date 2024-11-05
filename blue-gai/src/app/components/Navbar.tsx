import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  IconButton,
  Input,
  Text,
  Avatar,
} from '@chakra-ui/react'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { Search, Menu, Settings, Users } from 'lucide-react'

export function Navbar({ onToggleSidebar, isOpen }: { onToggleSidebar: () => void, isOpen: boolean }) {
  return (
    <Box bg="gray.900" borderBottom="1px" borderColor="gray.700" py={2}>
      <Container maxW="full" px={4}>
        <HStack justify="space-between">
          <HStack spacing={4}>
          <IconButton
          icon={isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          onClick={onToggleSidebar}
          variant="ghost"
          aria-label="Toggle sidebar"
          mr={2}
        />
            <HStack spacing={2} ml={9}>
              <Box bg="blue.500" w={8} h={8} rounded="md" display="flex" alignItems="center" justifyContent="center" ml={9}>
                <Text color="white" fontWeight="bold">BG</Text>
              </Box>
              <Text color="white" fontWeight="bold" fontSize={'2xl'} ml={5}>Blue-GAI</Text>
            </HStack>
          </HStack>

          <HStack maxW="2xl" w="full" mx={4}>
            {/*<HStack w="full" bg="gray.800" rounded="md" px={4} py={2}>
              <Icon as={Search} color="gray.400" />
              <Input
                placeholder="Search conversation..."
                border="none"
                _focus={{ border: 'none' }}
                color="white"
              />
            </HStack>*/}
          </HStack>

          <HStack spacing={4}>
            {/*<IconButton
              aria-label="Settings"
              icon={<Icon as={Settings} />}
              variant="ghost"
              color="gray.400"
            />*/}
            <Avatar size="sm" />
            {/*<Button
              leftIcon={<Icon as={Users} />}
              bg="blue.500"
              color="white"
              _hover={{ bg: 'blue.600' }}
            >
              Start group session
            </Button>*/}
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}