import { Flex } from "@chakra-ui/react";
import React from "react";
import Projects from "../Billing/components/Projects";
import { tablesTableData, dashboardTableData } from "variables/general";

function Billing() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Projects
        title={"Account Tables"}
        captions={["Companies", "Budget", "Status", "Completion", ""]}
        data={dashboardTableData}
      />
    </Flex>
  );
}

export default Billing;
