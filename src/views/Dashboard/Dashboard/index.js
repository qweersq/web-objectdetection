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
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import { dashboardTableData, timelineData } from "variables/general";
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



export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");
  const pickerStyle = { border: '1px solid #000', borderRadius: '4px', height: '32px', width: '200px', margin: '15px' };
  const [isOn, setIsOn] = useState(true);


  const toggleButton = () => {
    setIsOn(!isOn);
  };

  const buttonBg = isOn ? '#00DC7F' : '#FF4D4F';


  return (
    <Flex flexDirection='row' justify="space-between" pt={{ base: "120px", md: "75px" }}>
      <Box bg="#fff" p={4} color="black" borderRadius="lg" boxShadow="md">
        <Flex justify="space-between" align="baseline" flexDirection="row" minHeight="30px" w="100%">
          <Text> Alarm Sensor</Text>
          <TimePicker.RangePicker format="HH:mm" style={pickerStyle} className="custom-time-picker" />
          <Button
            bg={buttonBg}
            _hover={{ bg: isOn ? '#42ffaf' : '#FF7875' }}
            color="white"
            borderRadius="lg"
            onClick={toggleButton}
            width="77px"
            height="32px"
          >
            {isOn ? 'On' : 'Off'}
          </Button>
        </Flex>
      </Box>
      <Box bg="#fff" p={4} color="black" borderRadius="lg" boxShadow="md">
        <Flex justify="space-between" align="baseline" flexDirection="row" minHeight="30px" w="100%">
          <Image src={Bell}></Image>
          <Text size="md"> 124 </Text>
          <Text size="md"> Sensor Point </Text>
          <Box bg="tomato" w="77px" h="32px" p={4} color="white">
            <Text> 124 </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
