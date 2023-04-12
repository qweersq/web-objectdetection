// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import TablesTableRow from "components/Tables/TablesTableRow";

function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <TablesTableRow />
    </Flex>
  );
}

export default Tables;
