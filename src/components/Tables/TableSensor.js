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
} from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/react"

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
                </Td>
            </Tr>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent w="100rem" h="482px">
                    <ModalHeader color="green.400">Create Sensor</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex justifyContent="space-between">
                            <Flex flexDirection="column" width="50%">
                                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                                    Sensor Name
                                </Text>
                                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                                    Latitude
                                </Text>
                                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                                    Longtitude
                                </Text>
                                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                                    Status
                                </Text>
                            </Flex>
                            <Flex flexDirection="column" width="50%">
                                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                                    <input type="text" name="sensor" id="sensor" placeholder="Sensor Name" />
                                </Text>
                                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                                    <input type="text" name="latitude" id="latitude" placeholder="Latitude" />
                                </Text>
                                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                                    <input type="text" name="longtitude" id="longtitude" placeholder="Longtitude" />
                                </Text>
                                <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                                    <select name="status" id="status">
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </Text>
                            </Flex>
                        </Flex>
                    </ModalBody>
                    <ModalFooter justifyContent="center">
                        <Button bg="green.400" borderRadius="lg" width="870px" onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}


export default TableSensor;
