import useGames from "../hooks/useGames";
import {SimpleGrid} from '@chakra-ui/react'
import GameCard from "./GameCard";
import GameCardSekeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
const { games, error, isLoading } = useGames();
const skeletons = [...Array(20).keys()];

return (
    <>
    {error && <p>{error}</p>}

    <GameCardContainer>

    <SimpleGrid
    padding={"10px"}
    spacing={10}
    columns={{
        base: 1,
        md: 2,
        lg: 3,
        xl: 4,
        }}
    >
        {isLoading && skeletons.map((skeleton) => <GameCardContainer><GameCardSekeleton/></GameCardContainer>)}

        {games.map((game) => (

        <GameCard key={game.id} game={game} />

    ))}
    </SimpleGrid>

    </GameCardContainer>
    </>
);
};

export default GameGrid;