import {
    Button,
    Flex,
    Icon,
    Spacer,
    Text,
    useColorModeValue,
    Link
} from "@chakra-ui/react";
import { whiten } from "@chakra-ui/theme-tools";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";

export function SidebarLocation() {

    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const textColor = useColorModeValue("gray.700", "white");

    return (
        <Card p="1rem" my={{ sm: "24px", xl: "0px" }} boxShadow="md">
            <CardHeader p="12px 5px" mb="12px">
                <Flex justify="space-between" align="flex-start" flexDirection="column" minHeight="30px" w="100%">
                    <Text fontSize="sm" color={textColor} fontWeight="bold">
                        Jhon Doo
                    </Text>
                    <Text fontSize="sm" color={textColor} fontWeight="light">
                        Binus @malang
                    </Text>
                </Flex>
            </CardHeader>
            <Flex justify="space-between" align="" flexDirection="column" minHeight="30px" w="100%">
                <Button bg="#00A861" _hover={{ bg: "#00d179" }} size="xs" color={"white"}>
                    Button
                </Button>
            </Flex>
            <CardBody p="0px 5px">
            </CardBody>
        </Card>
    );
}
