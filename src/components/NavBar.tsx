import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/logo.webp';
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize='100px' margin='10px 0px' objectFit='contain'>
            </Image>
            <ColorModeSwitch/>
        </HStack>
    )
}

export default NavBar