import useGenres from "../hooks/useGenres";
import { HStack, Image, Text } from "@chakra-ui/react";

const GenreList = () => {

    const {genres} = useGenres();

    return (
        <>
        {genres.map ((genre) => (
            <HStack  paddingTop={'20px'} paddingLeft={'15px'}>
            <Image src={genre.image_background} boxSize={'20px'} borderRadius={50}/>
            <Text fontSize={'0.8rem'} fontWeight={'200'} key={genre.id}>{genre.name}</Text>
            </HStack>
        ))}
        </>
    );
};

export default GenreList;