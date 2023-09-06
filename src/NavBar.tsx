
import {HStack, Text} from '@chakra-ui/react'
import {Image} from '@chakra-ui/react'
import Logo from "../src/assets/react.svg"


const NavBar = () => {
    return (
        <>
        <HStack>
            <Image src={Logo} boxSize="40px"></Image>
            <Text>Navbar</Text>
        </HStack>
        </>
    )
};

export default NavBar;
