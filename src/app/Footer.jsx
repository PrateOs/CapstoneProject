import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import Logo from '../assets/logo/Asset_9@4x.png';

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer style={{ padding: "20px 0" }}>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1024px"
        >

          <img src={Logo} alt="Footer Image" style={{ width: 100, height: 100 }} />
        </Flex>

        <div style={{ textAlign: "center", color: "white", marginTop: "10px" }}>
          Copyright ©️ 2025
        </div>
      </footer>
    </Box>
  );
};

export default Footer;
