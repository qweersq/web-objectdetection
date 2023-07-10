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
import axios from "axios";
import { useEffect } from "react";
import moment from 'moment';
import { API_URL } from "constant/data";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");
  const pickerStyle = { border: '1px solid #000', borderRadius: '4px', height: '29px', width: '100px', margin: '15px' };
  const [isOn, setIsOn] = useState(true);
  const textColor = useColorModeValue("gray.700", "white");

  const [fromTime, setFromTime] = useState(null);
  const [toTime, setToTime] = useState(null);

  const handleSave = async () => {
    console.log(fromTime, toTime);
    try {
      // Menggunakan Moment.js untuk memformat nilai waktu menjadi jam dan menit
      // const formattedFromTime = moment(fromTime).format('HH:mm');
      // const formattedToTime = moment(toTime).format('HH:mm');
      // console.log(formattedFromTime, formattedToTime);
      const response = await axios.put(`${API_URL}/api/branch/${id}`, {
        from_active_time: fromTime,
        to_active_time: toTime,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      }
      );
  
      console.log(response.data); // Menampilkan respons dari server (opsional)
  
      // Reset nilai dari TimePicker setelah berhasil disimpan
      setFromTime(null);
      setToTime(null);
    } catch (error) {
      console.error(error);
    }
  };
  

  const toggleButton = () => {
    setIsOn(!isOn);
  };

  const buttonBg = isOn ? '#00DC7F' : '#FF4D4F';

  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    fetchDataSensor();
  }, []);

  const fetchDataSensor = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/sensor`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const sensorData = response.data;
      setSensorData(sensorData);
    } catch (error) {
      console.error(error);
    }
  };
  const sensorCount = sensorData.length;

  const onChangeFromTime = (time, timeString) => {
    console.log(time, timeString);
    setFromTime(timeString);
  };

  const onChangeToTime = (time, timeString) => {
    console.log(time, timeString);
    setToTime(timeString);
  };

  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={2} pt={{ base: "120px", md: "75px" }}>
        <Card p={4} color="black" borderRadius="lg" boxShadow="md" width="100%">
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="xl" fontWeight="bold" color={textColor}> Alarm Sensor</Text>
            <Flex justifyContent="space-between" alignItems="center">
              <TimePicker
                format="HH:mm"
                style={pickerStyle}
                className="custom-time-picker"
                // value={fromTime}
                onChange={(time, timeString) => onChangeFromTime(time, timeString)}
              />
              <Divider width="10px" borderWidth="2px" borderColor={textColor} borderRadius="3px" pl="3px" />
              <TimePicker
                format="HH:mm"
                style={pickerStyle}
                className="custom-time-picker"
                // value={toTime}
                onChange={(time, timeString) => onChangeToTime(time, timeString)}
              />
            </Flex>
            <Button
                bg={buttonBg}
                _hover={{ bg: isOn ? '#42ffaf' : '#FF7875' }}
                color="white"
                borderRadius="lg"
                width="58px"
                height="29px"
                onClick={() => handleSave()}
              >
                Save
              </Button>
          </Flex>
        </Card>
        <Card p={4} color="black" borderRadius="lg" boxShadow="md" justifyContent="center" width="100%">
          <Flex justifyContent="space-between" alignItems="center">
            <Image src={Bell}></Image>
            <Text fontSize="xl" fontWeight="bold" color={textColor}> {sensorCount} </Text>
            <Text fontSize="lg" mr="250px" color={textColor}> Sensor Point </Text>
            <Button bg="#00DC7F" color="white" _hover="none" width="77px" height="29px" borderRadius="lg" _active="none">
              Active
            </Button>
          </Flex>
        </Card>
        <AccountDashboard
          title={"Account"}
        // captions={["Author", "Function", "Status", "Employed", ""]}
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