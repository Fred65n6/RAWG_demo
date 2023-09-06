import { Grid, GridItem } from '@chakra-ui/react'
import { Show, Hide } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import { useColorModeValue} from "@chakra-ui/react";


function App() {

  const color = useColorModeValue('black', 'white')

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
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'nav'}>
    <NavBar></NavBar>
  </GridItem>
  <Show above="lg">
    <GridItem color={color} pl='2' bg='pink.300' area={'aside'}>
      Aside
    </GridItem>
  </Show>
  <GridItem color={color} pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
</Grid>
    </>
  )
}

export default App
