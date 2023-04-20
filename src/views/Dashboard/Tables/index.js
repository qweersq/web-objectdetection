import { Flex, Heading, StylesProvider } from "@chakra-ui/react";
import React from "react";
import TablesTableRow from "components/Tables/TablesTableRow";
import History from "./components/History";
import { useStyles } from "@chakra-ui/react";
import { historyData } from "variables/general";

function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
        <History
          title={"History"}
          captions={["Sensor ID", "Security", "Description", "Status", "Clock", "Date", ""]}
          data={historyData}/>
    </Flex>
  );
}

export default Tables;
