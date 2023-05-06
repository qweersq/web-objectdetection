import { Flex, Heading, StylesProvider } from "@chakra-ui/react";
import React from "react";
import TablesTableRow from "components/Tables/TablesTableRow";
import Account from "./components/Account";
import { useStyles } from "@chakra-ui/react";
import { sensorData } from "variables/general";
import { accountData } from "variables/general";

function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
        <Account
          title={"Account"}
          captions={["Name", "Email", "Role", "Status", "Action"]}
          data={accountData}/>
    </Flex>
  );
}

export default Tables;
