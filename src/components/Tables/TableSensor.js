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
    Input,
    Switch,
} from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";

function TableSensor(props) {
    const { sensor, latitude, longtitude, status } = props;
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
                        {sensor}
                    </Text>

                </Td>
                <Td>
                    <Text fontSize="md" color={textColor} fontWeight="light" pb=".5rem">
                        {latitude}
                    </Text>
                </Td>

                <Td>
                    <Text fontSize="md" color={textColor} fontWeight="light" pb=".5rem">
                        {longtitude}
                    </Text>
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
                    <Modal isOpen={isOpen} onClose={onClose} isCentered>
                        <ModalOverlay />
                        <ModalContent maxW="56rem" minW="24.375rem" maxh="482px">
                            <ModalHeader color="green.400">Edit Sensor {sensor}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Flex justifyContent="space-between">
                                    <Flex flexDirection="column" width="100%">
                                        <FormControl>
                                            <FormLabel htmlFor="name">Latitude</FormLabel>
                                            <Input id="latitude" placeholder="Latitude" />
                                            <FormLabel htmlFor="name" mt={4}>Longtitude</FormLabel>
                                            <Input id="longtitude" placeholder="Longtitude" />
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
                </Td>
            </Tr>
        </>
    );
}


export default TableSensor;
