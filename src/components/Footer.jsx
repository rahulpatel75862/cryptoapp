import { Box, Stack, Text, VStack, Image } from "@chakra-ui/react";
import React from "react";
import FounderImage from "../assets/FounderImage.jpg"


const Footer = () => {
  return (
    <Box
      bgColor={"gray.400"}
      color={"blackAlpha.900"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are one of the top advicers when it comes to crypto market trading. We provide you best assistance.
          </Text>
        </VStack>

        <VStack>
        <Image boxSize={"28"} mt={["4", "0"]} src={FounderImage} alt="founder image" style={{width:'100px', height:'100px', borderRadius:'50%'}}/>
          <Text>Our Founder</Text>
          <Text>Mr. Rahul</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;