import { Flex, Heading, StylesProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Account from "./components/Account";
import { API_URL } from "constant/data";
import axios from "axios";

function Tables() {

  const [accountData, setAccountData] = React.useState([]);

  useEffect(() => {
    const fetchDataAccount = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/accounts/token`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        console.log(response.data);
        setAccountData(response.data);

      } catch (error) {
        console.error(error);
      }
    }
    fetchDataAccount();
  }, [])

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Account
        title={"Account"}
        captions={["Name", "Email", "Role", "Status", "Action"]}
        data={accountData} />
    </Flex>
  );
}

export default Tables;
