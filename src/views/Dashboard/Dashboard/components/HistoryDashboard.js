// Chakra imports
import {
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
  } from "@chakra-ui/react";
  // Custom components
  import Card from "components/Card/Card.js";
  import CardBody from "components/Card/CardBody.js";
  import CardHeader from "components/Card/CardHeader.js";
  import TablesDashboardHistory from "components/Tables/TablesDashboardHistory";
  import TablesTableRow from "components/Tables/TablesTableRow";
  import React from "react";
  
  const HistoryDashboard = ({ title, captions, data }) => {
    const textColor = useColorModeValue("gray.700", "white");
    return (
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} boxShadow="md">
        <CardHeader p='6px 0px 22px 0px'>
          <Text fontSize='xl' color={textColor} fontWeight='bold'>
            {title}
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant='simple' color={textColor}>
              <TablesDashboardHistory/>
          </Table>
        </CardBody>
      </Card>
    );
  };
  
  export default HistoryDashboard;
  