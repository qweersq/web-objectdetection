import { Flex, Heading, StylesProvider } from "@chakra-ui/react";
import React from "react";
import TablesTableRow from "components/Tables/TablesTableRow";
import Sensor from "./Components/Sensor";
import { useStyles } from "@chakra-ui/react";
import { sensorData } from "variables/general";

function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
        <Sensor
          title={"Sensor"}
          captions={["Sensor ID", "Latitude", "Longtitude", "Status", "Action"]}
          data={sensorData}/>
    </Flex>
  );
}

export default Tables;
