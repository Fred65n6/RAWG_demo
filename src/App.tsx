import { Grid, GridItem } from '@chakra-ui/react'
import { Show, Hide } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import { useColorModeValue} from "@chakra-ui/react";
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
// import ProductList from "../src/components/ProductList.tsx";


function App() {

  const color = useColorModeValue('black', 'white')
  const bg = useColorModeValue('white', 'black')

  return (
    <>
    <Grid
  templateAreas=
  {
    {
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`,
      
    }
  }
  gridTemplateRows={'auto 1fr 30px'}
  gridTemplateColumns={{base:'1fr', lg: '200px 1fr'}}
  h='200px'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem position={"fixed"} width={"100%"} zIndex={"100"} pl='2' bg={bg} area={'nav'}>
    <NavBar></NavBar>
  </GridItem>
  <Show above="lg">
    <GridItem position={"sticky"}  marginTop={"60px"} color={color} pl='2' bg={bg} area={'aside'}>
      <GridItem position={"fixed"}>
        <GenreList/>
        </GridItem>
    </GridItem>
  </Show>
  <GridItem color={color} paddingTop={"70px"} pl='2' bg={bg} area={'main'}>
    <GameGrid></GameGrid>
  </GridItem>
</Grid>
    </>
  )
}

export default App
