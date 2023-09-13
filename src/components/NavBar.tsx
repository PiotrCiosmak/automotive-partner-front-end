import {HStack, Image, Text} from "@chakra-ui/react";
import logo from '../assets/logo.webp';

const NavBar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize='100px' margin='10px 0px' objectFit='contain'>
            </Image>
            <Text>
                NavBar
            </Text>
        </HStack>
    )
}
export default NavBar
