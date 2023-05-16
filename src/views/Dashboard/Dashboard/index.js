// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
  Box,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import AccountDashboard from "./components/AccountDashboard";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
// import { dashboardTableData, timelineData } from "variables/general";
import TablesTableRow from "components/Tables/TablesTableRow";
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";
import { TimePicker } from 'antd';
import 'antd/dist/reset.css';
import { useState } from "react";
import Bell from "assets/img/Bell.png";
import Card from "components/Card/Card";
import { tablesTableData, historyData } from "variables/general";
import HistoryDashboard from "./components/HistoryDashboard";
import Maps from "./components/Maps";




export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");
  const pickerStyle = { border: '1px solid #000', borderRadius: '4px', height: '29px', width: '100px', margin: '15px' };
  const [isOn, setIsOn] = useState(true);
  const textColor = useColorModeValue("gray.700", "white");



  const toggleButton = () => {
    setIsOn(!isOn);
  };

  const buttonBg = isOn ? '#00DC7F' : '#FF4D4F';


  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={2} pt={{ base: "120px", md: "75px" }}>
          <Card p={4} color="black" borderRadius="lg" boxShadow="md" width="100%">
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="xl" fontWeight="bold" color={textColor}> Alarm Sensor</Text>
              <Flex justifyContent="space-between" alignItems="center">
                <TimePicker format="HH:mm" style={pickerStyle} className="custom-time-picker" />
                <Divider
                  width="10px" borderWidth="2px" borderColor={textColor} borderRadius="3px" pl="3px"
                />
                <TimePicker format="HH:mm" style={pickerStyle} className="custom-time-picker" />
              </Flex>
              <Button
                bg={buttonBg}
                _hover={{ bg: isOn ? '#42ffaf' : '#FF7875' }}
                color="white"
                borderRadius="lg"
                onClick={toggleButton}
                width="77px"
                height="29px"
              >
                {isOn ? 'On' : 'Off'}
              </Button>
            </Flex>
          </Card>
          <Card p={4} color="black" borderRadius="lg" boxShadow="md" width="100%">
            <Flex justifyContent="space-between" alignItems="center" pt="14px">
              <Image src={Bell}></Image>
              <Text fontSize="xl" fontWeight="bold" color={textColor}> 124 </Text>
              <Text fontSize="lg" mr="250px" color={textColor}> Sensor Point </Text>
              <Button bg="#00DC7F" color="white" _hover="none" width="77px" height="29px" borderRadius="lg" _active="none">
                Active
              </Button>
            </Flex>
          </Card>
          <AccountDashboard
            title={"Account"}
            // captions={["Author", "Function", "Status", "Employed", ""]}
            data={tablesTableData}
          />
          <HistoryDashboard
            title={"History"}
            data={historyData}
          />
      </Grid >
      <Grid pt={{ base: "120px", md: "10px" }}>
        <Maps />
      </Grid>
    </>
  );
}
