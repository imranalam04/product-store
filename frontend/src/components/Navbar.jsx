import { Button, Container, HStack, Flex, Text, useColorMode } from '@chakra-ui/react'; // Added Flex and Text import
import React from 'react';
import { Link } from 'react-router-dom';
import { PlusSquareIcon } from "@chakra-ui/icons"; // Fixed the import for PlusSquareIcon
import { IoMoon } from 'react-icons/io5'; // Added import for IoMoon and LuSun
import { LuSun } from 'react-icons/lu';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Container maxW={"1140px"} px={4}>
            <Flex justify="space-between" alignItems={"center"} h={16} flexDir={{
                base: "column",
                sm: "row"
            }}>
                <Text fontSize={{ base: "22px", sm: "28px" }} // Added px unit for consistency
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}>
                    <Link to={"/"}>Product Store 🛒</Link>
                </Text>
                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button>
                            <PlusSquareIcon fontSize={20} />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <IoMoon /> : <LuSun size={20} />}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    );
}

export default Navbar;
