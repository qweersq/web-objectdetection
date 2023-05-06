import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function TablesHistory(props) {
  const { tanggal, sensor, jenis, jam, security, status } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
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
        <Button bg="#00DC7F" color="white" _hover={{ bg: "#00d179" }} width="100px" height="32px" borderRadius="lg">
            Lihat Photo
          </Button>
        </Td>
    </Tr>

  );
}

export default TablesHistory;
