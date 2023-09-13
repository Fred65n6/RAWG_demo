import { Card, CardBody } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Game } from "../hooks/useGames";
import { Heading} from "@chakra-ui/layout";
import { useColorModeValue} from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

interface Props {
game: Game;
}

const GameCard = ({ game }: Props) => {

const cardbg = useColorModeValue('black', 'white')
const cardcolor = useColorModeValue('white', 'black')

return (
    <>
    <Card bg={cardbg} borderRadius={10} overflow={'hidden'}>

        <Image src={getCroppedImageUrl(game.background_image)} />

        <CardBody display="grid" gap={"10px"}>

        <Heading color={cardcolor}>{game.name}</Heading>

        <HStack display={'flex'} justifyContent={'space-between'}>

        <PlatformIconsList platforms={game.parent_platforms.map((pp) => pp.platform)}/>

        <CriticScore score={game.metacritic} />

        </HStack>

        </CardBody>

    </Card>
    </>
);
};

export default GameCard;


