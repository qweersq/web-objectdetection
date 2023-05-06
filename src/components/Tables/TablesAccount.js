import {
    Avatar,
    Badge,
    Button,
    Flex,
    Td,
    Text,
    Tr,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useColorModeValue,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Switch,
} from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/react"

function TableAccount(props) {
    const { name, email, role, status } = props;
    const inputStyle = {border: "1px solid #000",borderRadius: "10px"};
    const textColor = useColorModeValue("gray.700", "white");
    const bgStatus = useColorModeValue("gray.400", "#1a202c");
    const colorStatus = useColorModeValue("white", "gray.400");
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Tr>
                <Td minWidth={{ sm: "120px" }} pl="0px">
                    <Text
                        fontSize="md"
                        color={textColor}
                        fontWeight="bold"
                        minWidth="100%"
                    >
                        {name}
                    </Text>

                </Td>
                <Td>
                    <Text fontSize="md" color={textColor} fontWeight="light" pb=".5rem">
                        {email}
                    </Text>
                </Td>

                <Td>
                <Badge
                    bg="green.400"
                    color="white"
                    fontSize="16px"
                    p="3px 10px"
                    borderRadius="8px"
                    >
                    {role}
                </Badge>
                </Td>

                <Td>
                    <Badge
                        bg={status === "Active" ? "green.400" : "red.400"}
                        color="white"
                        fontSize="16px"
                        p="3px 10px"
                        borderRadius="8px"
                    >
                        {status}
                    </Badge>
                </Td>
                <Td>
                    <Flex justifyContent="space-between" maxWidth="140px">
                        <Button onClick={onOpen} bg="white" color="black" width="65px" height="32px" borderRadius="lg" borderColor="black" border="1px">
                            Edit
                        </Button>
                        <Button bg="red.500" color="white" _hover={{ bg: "#eb7668" }} width="65px" height="32px" borderRadius="lg">
                            Delete
                        </Button>
                    </Flex>
                </Td>
            </Tr>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                        <ModalOverlay />
                        <ModalContent maxW="56rem" minW="24.375rem" maxh="482px">
                            <ModalHeader color="green.400">Edit {name}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Flex justifyContent="space-between">
                                    <Flex flexDirection="column" width="100%">
                                        <FormControl>
                                            <FormLabel htmlFor="name">Name</FormLabel>
                                            <Input style={inputStyle} id="name" placeholder="Enter name" />
                                            <FormLabel htmlFor="name" top="150px">Role</FormLabel>
                                            <Input style={inputStyle} id="role" placeholder="Enter Role" />
                                            <FormLabel htmlFor="name">Email</FormLabel>
                                            <Input style={inputStyle} id="email" placeholder="Enter Email" />
                                            <FormLabel htmlFor="name">Password</FormLabel>
                                            <Input style={inputStyle} id="password" placeholder="Enter name" />
                                            <FormLabel htmlFor="name">BINUS</FormLabel>
                                            <Input style={inputStyle} id="name" placeholder="Enter name" />

                                            <Flex flexDirection="row" alignItems="flex-end">
                                                <Switch colorScheme="green" size="lg" mt={4} />
                                                <Text fontSize="md" color={textColor} fontWeight="Bold" pl="12px">
                                                    Status
                                                </Text>
                                            </Flex>
                                            <Button bg="green.400" color="white" borderRadius="lg" w="847px" mt={4}>
                                                Edit
                                            </Button>
                                        </FormControl>
                                    </Flex>
                                </Flex>
                            </ModalBody>
                            <ModalFooter justifyContent="center">
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
        </>
    );
}


export default TableAccount;
