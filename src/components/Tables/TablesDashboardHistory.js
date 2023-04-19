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

function TablesDashboardHistory(props) {
  const { tanggal, sensor, jenis, jam } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Flex alignSelf="center">
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {tanggal}
        </Text>
      </Flex>
      <Flex align="center" justifyContent="space-between" justifyItems="center">
        <Td minWidth={{ sm: "120px" }} pl="0px">
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            {/* <Avatar src={logo} w="50px" borderRadius="12px" me="18px" /> */}

            <Flex direction="column">
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="bold"
                minWidth="100%"
              >
                {sensor}
              </Text>
              <Text fontSize="sm" color={textColor} fontWeight="normal">
                {jenis}
              </Text>
            </Flex>
          </Flex>

        </Td>
        <Td>
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {jam}
          </Text>
        </Td>
      </Flex>
    </Tr>

  );
}

export default TablesDashboardHistory;
