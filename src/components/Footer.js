import React from 'react';
import { Flex, Spacer, HStack, VStack, UnorderedList, ListItem, Text } from "@chakra-ui/react"
import logo from '../assets/Logo.svg';

const textSX = {
    fontWeight: "bold",
    color: "#495E57"
};

const listSX = {
    spacing: "30px",
    styleType: "none",
    fontFamily: "`Karla`, sans-serif"
};

function Footer() {
    return (
        <div>
            <Flex
            as="nav"
            p="10px"
            maxWidth="xxl" pl="125px"  pr="125px"
            align="center"
            justify="space-around">
                <img src={logo} alt="default"></img>
                <UnorderedList
                >
                    <VStack>
                        <Text sx={textSX}>Doormat Navigation</Text>
                        <ListItem><a href="">Home</a></ListItem>
                        <ListItem><a href="">About</a></ListItem>
                        <ListItem><a href="">Menu</a></ListItem>
                        <ListItem><a href="">Reservations</a></ListItem>
                        <ListItem><a href="">Order Online</a></ListItem>
                        <ListItem><a href="">Login</a></ListItem>
                    </VStack>
                </UnorderedList>
                <UnorderedList >
                    <VStack >
                        <Text sx={textSX}>Contact</Text>
                        <ListItem><a href="">Address</a></ListItem>
                        <ListItem><a href="">Phone</a></ListItem>
                        <ListItem><a href="">Email</a></ListItem>
                    </VStack>
                </UnorderedList>
                <UnorderedList>
                    <VStack>
                        <Text sx={textSX}>Social Media</Text>
                        <ListItem><a href="">Address</a></ListItem>
                        <ListItem><a href="">Phone</a></ListItem>
                        <ListItem><a href="">Email</a></ListItem>
                    </VStack>
                </UnorderedList>
            </Flex>
        </div>
    );
}

export default Footer;