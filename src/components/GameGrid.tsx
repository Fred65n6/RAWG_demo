import useGames from "../hooks/useGames";
import {SimpleGrid} from '@chakra-ui/react'
import GameCard from "./GameCard";

const GameGrid = () => {
const { games, error } = useGames();

return (
    <>
    {error && <p>{error}</p>}

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
        {games.map((game) => (
        <GameCard key={game.id} game={game} />
    ))}
    </SimpleGrid>
    </>
);
};

export default GameGrid;