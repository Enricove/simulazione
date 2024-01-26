import { LinkBox, HStack, Heading, Image, LinkOverlay } from "@chakra-ui/react"

const Header = () => {
    return(
        <LinkBox
        bg="lightblue"
        >
            <LinkOverlay
            href="/"
            >
                <HStack alignItems="center" gridGap="8px">
                <Image
            src="https://cdn-icons-png.flaticon.com/512/145/145067.png"
            alt="logo"
            width={50}
            >
            </Image>
            <Heading>Your movie database</Heading>
            </HStack>
            </LinkOverlay>
            
            
        </LinkBox>
    );
}
//todo add link
export default Header;