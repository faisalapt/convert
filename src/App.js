import React from "react";
import Temp from './Temp'
import Speed from './Speed'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button, SimpleGrid, chakra, Center, Container } from '@chakra-ui/react'

export default function App(){
  return (
    <Container>
      <Center><chakra.h1 marginTop="20%" fontSize="40px">Convert</chakra.h1></Center>
      <SimpleGrid columns={2} spacing={5}>
        <Router>
          <Link to="/Temp"><Button w="100%" h="70px">Temperature</Button></Link>
          <Link to="/Speed"><Button w="100%" h="70px">Speed</Button></Link>
          <Button w="100%" h="70px">Weight</Button>
          <Button w="100%" h="70px">Time</Button>
          <Switch>
            <Route path="/Temp" component={Temp}/>
            <Route path="/Speed" component={Speed}/>
          </Switch>
        </Router>
      </SimpleGrid>
      {/* <Router>
        <Button marginRight="auto" marginLeft="auto"><Link to="/">Home</Link></Button>
        <Switch>
          <Route path="/" exact component={App}/>
        </Switch>
      </Router> */}
    </Container>
  )
}
