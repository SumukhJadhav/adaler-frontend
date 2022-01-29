import React, {useRef} from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    ChakraProvider,
    Checkbox,
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    chakra,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    AlertDescription,
  } from '@chakra-ui/react';
  import { Col, Container, Form, Navbar } from "react-bootstrap";
  import { auth } from "../../firebaseSetup";
  import { IoMdCheckmarkCircle } from "react-icons/io";
  
  export default function SignInModal() {
      const emailRef = useRef<HTMLInputElement>(null);
      const passwordRef = useRef<HTMLInputElement>(null);
      
      const createAccount = async () => {
          try {
            await auth.createUserWithEmailAndPassword(
              emailRef.current!.value,
              passwordRef.current!.value,
            );
          } catch (error) {
            console.error(error);
          }
        };
        const { 
          isOpen: isOpenReportModal, 
          onOpen: onOpenReportModal, 
          onClose: onCloseReportModal 
      } = useDisclosure();
        
        function Alerts(){
          return (
            <Flex
              w="full"
              bg="gray.600"
              p={50}
              alignItems="center"
              justifyContent="center"
            >
              <Flex
                maxW="sm"
                w="full"
                mx="auto"
                bg={useColorModeValue("white", "gray.800")}
                shadow="md"
                rounded="lg"
                overflow="hidden"
              >
                <Flex justifyContent="center" alignItems="center" w={12} bg="green.500">
                  <Icon as={IoMdCheckmarkCircle} color="white" boxSize={6} />
                </Flex>
        
                <Box mx={-3} py={2} px={4}>
                  <Box mx={3}>
                    <chakra.span
                      color={useColorModeValue("green.500", "green.400")}
                      fontWeight="bold"
                    >
                      Success
                    </chakra.span>
                    <chakra.p
                      color={useColorModeValue("gray.600", "gray.200")}
                      fontSize="sm"
                    >
                      Your account was registered!
                    </chakra.p>
                  </Box>
                </Box>
              </Flex>
            </Flex>
          );
        };
        
  return (
    <ModalContent>
    <ModalHeader className='ModalHeader'> Sign In </ModalHeader>
    <ModalCloseButton/>
    <ModalBody className='ModalBody'>
      <Form className="mt-4">
    <Form.Group controlId="formEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control ref={emailRef} type="email" placeholder="email" />
    </Form.Group>
   
  <Form.Group controlId="formPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control
      ref={passwordRef}
      type="password"
      placeholder="password"
    />
  </Form.Group>
    </Form>
          <Checkbox>Remember me</Checkbox>
    </ModalBody>
    <ModalFooter className='ModalFooter'>
      <Button colorScheme="blue" mr={160} onClick={() => {
          createAccount();
          onCloseReportModal();
          console.log('lol')
          Alerts();
          console.log('lol121')
        }}> Sign In </Button>
    </ModalFooter>
  </ModalContent>

  
  
  
  )
}

