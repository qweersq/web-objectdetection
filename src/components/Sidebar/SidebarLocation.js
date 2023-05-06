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
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input

} from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import { Formik, Form, Field } from "formik";
import { useDisclosure } from "@chakra-ui/react";



export function SidebarLocation() {
    function validateName(value) {
        let error
        if (!value) {
          error = "Name is required"
        } else if (value.toLowerCase() !== "naruto") {
          error = "Jeez! You're not a fan 😱"
        }
        return error
      }

    const textColor = useColorModeValue("gray.700", "white");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure();


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
                <Button bg="#00A861" _hover={{ bg: "#00d179" }} size="xs" color={"white"} onClick={onOpen2}>Open Modal</Button>
                <Modal onClose={onClose2} isOpen={isOpen2} isCentered>
                    <ModalOverlay />
                    <ModalContent maxW="56rem" w="90%">
                        <ModalHeader> Change Location <Button bg="#00A861" _hover={{ bg: "#00d179" }} size="sm" color={"white"} ml="20px" onClick={onOpen}>Create</Button></ModalHeader>
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
                            <Button onClick={onClose2}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent maxW="36rem" w="90%">
                        <ModalHeader> Create Location</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Formik initialValues={{ name: "Sasuke" }} onSubmit={(values, actions) => { setTimeout(() => { alert(JSON.stringify(values, null, 2))
                                        actions.setSubmitting(false)
                                    }, 1000)
                                }}>
                                {(props) => (
                                    <Form>
                                        <Field name="name" validate={validateName}>
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                                    <FormLabel htmlFor="name">Nama</FormLabel>
                                                    <Input id="name" placeholder="Nama" />
                                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                                    <FormLabel htmlFor="name" mt={4}>Location</FormLabel>
                                                    <Input id="name" placeholder="Location" />
                                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Button mt={4} colorScheme="teal" isLoading={props.isSubmitting} type="submit" bg="#00A861" _hover={{ bg: "#00d179" }} color={"white"} w="100%">
                                            Create
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
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
