import { Badge } from '@chakra-ui/react';

interface Props {
    score: number;
}

const CriticScore = ({score}:Props) => {

    return (
    <Badge border="1px solid" fontSize={"14px"} color={"green.500"}>{score}</Badge>
    );
}

export default CriticScore