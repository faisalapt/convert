import React from "react";
import Temp from './Temp'
import Speed from './Speed'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button, chakra, Center, Container, Grid } from '@chakra-ui/react'

export default function App(){
  return (
    <Container >
      <Router>
        <Center><chakra.h1 marginTop="20%" fontSize="40px">Convert</chakra.h1></Center>
        <Grid templateColumn="repeat(2, 1fr)" gap={6}>
            <Link to="/Temp"><Button colorScheme="pink" w="100%" h="70px">Temperature</Button></Link>
            <Link to="/Speed"><Button colorScheme="teal" w="100%" h="70px">Speed</Button></Link>
            <Switch>
              <Route path="/Temp">
                <Temp />
              </Route>
              <Route path="/Speed" component={Speed}/>
            </Switch>
        </Grid>
        <Center marginTop="10%"><Link to="/"><Button colorScheme="blue" variant="outline" w="100%" h="70px">Home</Button></Link></Center>
        <Center><chakra.h1 pos="fixed" bottom="0" fontSize="24px">&copy; Faisal Aprianto - 00000042520</chakra.h1></Center>
      </Router>
    </Container>
  )
}
