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
import { Card } from "antd";
import React from "react";

function TablesTableRow(props) {
  const {name, email, domain, status, } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
        <Td minWidth={{ sm: "100px" }} pl="0px">
          <Flex align="center" py="1rem" minWidth="100%" flexWrap="nowrap">
              <Text fontSize="sm" color={textColor} fontWeight="normal">
                {name}
              </Text>
          </Flex>
        </Td>
        <Td>
            <Text fontSize="sm" color={textColor} fontWeight="normal">
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
            {domain}
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
    </Tr>
  );
}

export default TablesTableRow;
