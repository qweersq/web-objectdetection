// Chakra imports
import {
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useDisclosure,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Switch,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesHistory from "components/Tables/TablesAccount";
import TablesTableRow from "components/Tables/TablesTableRow";
import React from "react";

const Account = ({ title, captions, data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const inputStyle = {border: "1px solid #000",borderRadius: "10px"};
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 22px 0px' justifyContent="space-between">
        <Text fontSize='xl' color={textColor} fontWeight='bold'>
          {title}
        </Text>
        <Button w="65px" h="30px" onClick={onOpen} bg="green.400" color="white" borderRadius="lg" _hover={{ bg: "#00d179" }}>
                    Create
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
                        <ModalOverlay />
                        <ModalContent maxW="56rem" minW="24.375rem" maxh="482px">
                            <ModalHeader color="green.400">Create New Account</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Flex justifyContent="space-between">
                                    <Flex flexDirection="column" width="100%">
                                        <FormControl>
                                            <FormLabel htmlFor="name">Name</FormLabel>
                                            <Input style={inputStyle} id="name" placeholder="Enter name" />
                                            <FormLabel htmlFor="name" mt={4}>Role</FormLabel>
                                            <Input style={inputStyle} id="role" placeholder="Enter Role" />
                                            <FormLabel htmlFor="name" mt={4}>Email</FormLabel>
                                            <Input style={inputStyle} id="email" placeholder="Enter Email" />
                                            <FormLabel htmlFor="name" mt={4}>Password</FormLabel>
                                            <Input style={inputStyle} id="password" placeholder="Enter name" />
                                            <FormLabel htmlFor="name" mt={4}>Binus</FormLabel>
                                            <Input style={inputStyle} id="name" placeholder="Enter name" />

                                            <Flex flexDirection="row" alignItems="flex-end">
                                                <Switch colorScheme="green" size="lg" mt={4} />
                                                <Text fontSize="md" color={textColor} fontWeight="Bold" pl="12px">
                                                    Status
                                                </Text>
                                            </Flex>
                                            <Button bg="green.400" color="white" borderRadius="lg" w="847px" mt={4}>
                                                Create
                                            </Button>
                                        </FormControl>
                                    </Flex>
                                </Flex>
                            </ModalBody>
                            <ModalFooter justifyContent="center">
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
      </CardHeader>
      <CardBody>
        <Table variant='simple' color={textColor}>
          <Thead> 
            <Tr my='.8rem' pl='0px' color='gray.400'>
              {captions.map((caption, idx) => {
                return (
                  <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => {
              return (
                <TablesHistory
                  name={row.name}
                  email={row.email}
                  role={row.role}
                  status={row.status}
                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Account;
