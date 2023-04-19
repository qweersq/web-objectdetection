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

function TablesTableRow(props) {
  const { logo, name, email, subdomain, domain, status, date } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "120px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          {/* <Avatar src={logo} w="50px" borderRadius="12px" me="18px" /> */}
          <Flex direction="column">
            {/* <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text> */}
            <Text fontSize="sm" color={textColor} fontWeight="normal">
              {name}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Flex direction="column">
          <Text fontSize="sm" color={textColor} fontWeight="normal">
            {email}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Badge
          bg="green.400"
          color="white"
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {domain}
        </Badge>
      </Td>
      <Td>
      <Badge
          bg={status === "Active" ? "green.400" : "red.400"}
          color={status === "Active" ? "white" : colorStatus}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {status}
        </Badge>
      </Td>
      {/* <Td>
        <Button p="0px" bg="transparent" variant="no-hover">
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Edit
          </Text>
        </Button>
      </Td> */}
    </Tr>
  );
}

export default TablesTableRow;
