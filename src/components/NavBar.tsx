
import {HStack, Text} from '@chakra-ui/react'
import {Image} from '@chakra-ui/react'
import Logo from '../assets/react.svg'

import ColorModeSwitch from "../components/ColorModeSwitch";
// import ColorModeswitch from './ColorModeSwitch';


const NavBar = () => {
    return (
        <>
        <HStack justifyContent={'space-between'} padding={'10px'}>
            <Image src={Logo} boxSize="40px"></Image>
            <ColorModeSwitch />
        </HStack>
        </>
    )
};

export default NavBar;
