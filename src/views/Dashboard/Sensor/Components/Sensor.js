// Chakra imports
import {
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Switch,
} from "@chakra-ui/react";
import { Grid } from "antd";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesHistory from "components/Tables/TableSensor";
import TablesTableRow from "components/Tables/TablesTableRow";
import { useState } from "react";
import axios from "axios";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";

const Sensor = ({ title, captions, data }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const textColor = useColorModeValue("gray.700", "white");
    const [sensorData, setSensorData] = useState({
        Id: "",
        latitude: "",
        longitude: "",
        status: false,
        branch_id: 1,
      });
      const handleInputChange = (event) => {
        const { id, value } = event.target;
        setSensorData((prevState) => ({
          ...prevState,
          [id]: value,
        }));
      };
      const handleSwitchChange = () => {
        setSensorData((prevState) => ({
          ...prevState,
          status: !prevState.status,
        }));
      };
      const handleCreateSensor = () => {
        // Get JWT token from local storage
        const token = localStorage.getItem("jwtToken");
    
        // Configure axios headers
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        // Make a POST request to the API
    axios.post("http://localhost:3000/api/sensor", sensorData, config)
    .then((response) => {
      // Handle success
      console.log(response.data);
      // Close the modal or perform any other actions
      onClose();
    })
    .catch((error) => {
      // Handle error
      console.error(error);
    });
    };

    return (
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p='6px 0px 22px 0px' justifyContent="space-between">
                <Text fontSize='xl' color={textColor} fontWeight='bold'>
                    {title}
                </Text>
                <Button w="65px" h="30px" onClick={onOpen} bg="green.400" color="white" borderRadius="lg" _hover={{ bg: "#00d179" }}>
                    Create
                </Button>
                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                    <ModalOverlay />
                    <ModalContent maxW="56rem" minW="24.375rem" maxh="482px">
                        <ModalHeader color="green.400">Create Sensor</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Flex justifyContent="space-between">
                                <Flex flexDirection="column" width="100%">
                                    <FormControl>
                                    <FormLabel htmlFor="Id">Sensor ID</FormLabel>
                                    <Input id="Id" placeholder="Sensor ID" value={sensorData.id}onChange={handleInputChange}/>
                                    <FormLabel htmlFor="latitude" mt={4}>Latitude</FormLabel>
                                    <Input id="latitude" placeholder="Latitude" value={sensorData.latitude} onChange={handleInputChange}/>
                                    <FormLabel htmlFor="longitude" mt={4}>Longitude</FormLabel>
                                    <Input id="longitude" placeholder="Longitude" value={sensorData.longitude} onChange={handleInputChange}/>
                                    <Flex flexDirection="row" alignItems="flex-end">
                                    <Switch colorScheme="green" size="lg" mt={4} checked={sensorData.status} onChange={handleSwitchChange}/>
                                            <Text fontSize="md" color={textColor} fontWeight="Bold" pl="12px">
                                                Status
                                            </Text>
                                        </Flex>
                                        <Button bg="green.400" color="white" borderRadius="lg" w="847px" mt={4} onClick={handleCreateSensor}>
                                        Create
                                    </Button>
                                    </FormControl>
                                </Flex>
                            </Flex>
                        </ModalBody>
                        <ModalFooter justifyContent="center">
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </CardHeader>
            <CardBody>
                <Table variant='simple' color={textColor}>
                    <Thead>
                        <Tr my='.8rem' pl='0px' color='gray.400'>
                            {captions.map((caption, idx) => {
                                return (
                                    <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                                        {caption}
                                    </Th>
                                );
                            })}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((row) => {
                            return (
                                <TablesHistory
                                    sensor={row.sensor}
                                    latitude={row.latitude}
                                    longtitude={row.longitude}
                                    status={row.status}
                                />
                            );
                        })}
                    </Tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default Sensor;
