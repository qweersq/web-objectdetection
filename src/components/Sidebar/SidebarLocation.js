import {
    Button,
    Flex,
    Text,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Grid,
    Box

} from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";



export function SidebarLocation() {

    const textColor = useColorModeValue("gray.700", "white");
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Card p="1rem" my={{ sm: "24px", xl: "0px" }} boxShadow="md">
            <CardHeader p="12px 5px" mb="12px">
                <Flex justify="space-between" align="flex-start" flexDirection="column" minHeight="30px" w="100%">
                    <Text fontSize="sm" color={textColor} fontWeight="bold">
                        Jhon Doo
                    </Text>
                    <Text fontSize="sm" color={textColor} fontWeight="light">
                        Binus @malang
                    </Text>
                </Flex>
            </CardHeader>
            <Flex justify="space-between" align="" flexDirection="column" minHeight="30px" w="100%">
                {/* <Button bg="#00A861" _hover={{ bg: "#00d179" }} size="xs" color={"white"}> */}
                <Button bg="#00A861" _hover={{ bg: "#00d179" }} size="xs" color={"white"} onClick={onOpen}>Open Modal</Button>
                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent maxW="56rem" w="90%">
                        <ModalHeader> Change Location <Button bg="#00A861" _hover={{ bg: "#00d179" }} size="sm" color={"white"} ml="20px">Create</Button></ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                                <Card p="1rem" my={{ sm: "24px", xl: "0px" }} boxShadow="md">
                                    <CardHeader p="12px 5px" mb="12px">
                                        <Flex justify="space-between" align="center" flexDirection="column" minHeight="30px" w="100%">
                                            <Text fontSize="md" color={textColor} fontWeight="Bold" justifyContent={"center"}>
                                                Binus @Malang
                                            </Text>
                                        </Flex>
                                    </CardHeader>
                                    <Flex justify="space-between" align="center" flexDirection="column" minHeight="30px" w="100%">
                                        <Button size="sm" w="100%">Change Location</Button>
                                    </Flex>
                                </Card>
                                <Card p="1rem" my={{ sm: "24px", xl: "0px" }} boxShadow="md">
                                    <CardHeader p="12px 5px" mb="12px">
                                        <Flex justify="space-between" align="center" flexDirection="column" minHeight="30px" w="100%">
                                            <Text fontSize="md" color={textColor} fontWeight="Bold" justifyContent={"center"}>
                                                Binus @Kemanggisan
                                            </Text>
                                        </Flex>
                                    </CardHeader>
                                    <Flex justify="space-between" align="center" flexDirection="column" minHeight="30px" w="100%">
                                        <Button size="sm" w="100%" bg="#00A861" _hover={{ bg: "#00d179" }} color={"white"}>Change Location</Button>
                                    </Flex>
                                </Card>
                                <Card p="1rem" my={{ sm: "24px", xl: "0px" }} boxShadow="md">
                                    <CardHeader p="12px 5px" mb="12px">
                                        <Flex justify="space-between" align="center" flexDirection="column" minHeight="30px" w="100%">
                                            <Text fontSize="md" color={textColor} fontWeight="Bold" justifyContent={"center"}>
                                                Binus @Alam Sutera
                                            </Text>
                                        </Flex>
                                    </CardHeader>
                                    <Flex justify="space-between" align="center" flexDirection="column" minHeight="30px" w="100%">
                                        <Button size="sm" w="100%" bg="#00A861" _hover={{ bg: "#00d179" }} color={"white"}>Change Location</Button>
                                    </Flex>
                                </Card>
                                <Card p="1rem" my={{ sm: "24px", xl: "0px" }} boxShadow="md">
                                    <CardHeader p="12px 5px" mb="12px">
                                        <Flex justify="space-between" align="center" flexDirection="column" minHeight="30px" w="100%">
                                            <Text fontSize="md" color={textColor} fontWeight="Bold" justifyContent={"center"}>
                                                Binus @Bandung
                                            </Text>
                                        </Flex>
                                    </CardHeader>
                                    <Flex justify="space-between" align="center" flexDirection="column" minHeight="30px" w="100%">
                                        <Button size="sm" w="100%" bg="#00A861" _hover={{ bg: "#00d179" }} color={"white"}>Change Location</Button>
                                    </Flex>
                                </Card>
                                <Card p="1rem" my={{ sm: "24px", xl: "0px" }} boxShadow="md">
                                    <CardHeader p="12px 5px" mb="12px">
                                        <Flex justify="space-between" align="center" flexDirection="column" minHeight="30px" w="100%">
                                            <Text fontSize="md" color={textColor} fontWeight="Bold" justifyContent={"center"}>
                                                Binus @Semarang
                                            </Text>
                                        </Flex>
                                    </CardHeader>
                                    <Flex justify="space-between" align="center" flexDirection="column" minHeight="30px" w="100%">
                                        <Button size="sm" w="100%" bg="#00A861" _hover={{ bg: "#00d179" }} color={"white"}>Change Location</Button>
                                    </Flex>
                                </Card>
                            </Grid>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        </Card>
    );
}
