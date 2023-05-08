import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Card } from "antd";

function TablesHistory(props) {
  const { tanggal, sensor, jenis, jam, security, status } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tr>
      <Td minWidth={{ sm: "120px" }} pl="0px">
        <Text fontSize="md" color={textColor} fontWeight="bold" minWidth="100%">
          {sensor}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="light" pb=".5rem">
          {security}
        </Text>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="light" pb=".5rem">
          {jenis}
        </Text>
      </Td>

      <Td>
        <Badge
          bg={status === "Aman" ? "green.400" : "red.500"}
          color="white"
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {status}
        </Badge>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {jam}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {tanggal}
        </Text>
      </Td>
      <Td>
        <Button
          bg="#00DC7F"
          color="white"
          _hover={{ bg: "#00d179" }}
          width="100px"
          height="32px"
          borderRadius="lg"
          onClick={onOpen}
        >
          Lihat Photo
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="green.400">Photo</ModalHeader>
            <ModalBody >
              <Card maxW="400px" maxH="812px" justifyContent="center">
              <img src="https://cdn.discordapp.com/attachments/974200919749193758/1103565279386152980/newdamkar.png" alt="gambar"/>
              </Card>
            </ModalBody>
            <ModalCloseButton />
            <ModalFooter>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Td>
    </Tr>
  );
}

export default TablesHistory;
