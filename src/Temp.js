import React, { useState, useEffect } from "react";
import App from './App'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FormControl, Input, Container, Select, Button, SimpleGrid, Box } from '@chakra-ui/react'

function CelToFah(angka){
    return (angka * 9 / 5) + 32;
}

function CelToRe(angka){
    return (4 / 5) * angka;
}

function CelToKel(angka){
    return angka + 273;
}

function ReToCel(angka){
    return (5 / 4) * angka;
}

function ReToFah(angka){
    return  (9 / 4) * angka + 32;
}

function ReToKel(angka){
    return (5 / 4) * angka + 273;
}

function FahToCel(angka){
    return 5 / 9 * (angka - 32);
}

function FahToRe(angka){
    return 4 / 9 * (angka - 32);
}

function FahToKel(angka){
    return 5 / 9 * (angka - 32) + 273;
}

function KelToCel(angka){
    return angka - 273;
}

function KelToFah(angka){
    return 9 / 5 * (angka - 273) + 32;
}

function KelToRe(angka){
    return 4 / 5 (angka - 273);
}

export default function Temp(){
    const temperatureOption =[
        {value:"celcius",label:"Celcius"},
        {value:"fahrenheit",label:"Fahrenheit"},
        {value:"reamur",label:"Reamur"},
        {value:"kelvin",label:"Kelvin"},
    ];

    let item = temperatureOption.map((temperature) =>(
        <option key={temperature.value} value={temperature.value}>
            {temperature.label}
        </option>
    ))

    const [fromTemperature, setFromTemperature] = useState(0);
    const [resultTemperature, setResultTemperature] = useState(0);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const getFrom = (e) => {
        setFrom(e.target.value);
    }

    const getTo = (e) => {
        setTo(e.target.value);
    }

    const getFromValue = (e) => {
        setFromTemperature(e.target.value)
    }

    useEffect(() => {
        if(from === to){
            setResultTemperature(parseFloat(fromTemperature))
        }
        if(from === "celcius"){
            if(to === "fahrenheit"){
                setResultTemperature(CelToFah(parseFloat(fromTemperature)))
            }else if(to === "reamur"){
                setResultTemperature(CelToRe(parseFloat(fromTemperature)))
            }else if(to === "kelvin"){
                setResultTemperature(CelToKel(parseFloat(fromTemperature)))
            }
        }else if(from === "fahrenheit"){
            if(to === "celcius"){
                setResultTemperature(FahToCel(parseFloat(fromTemperature)))
            }else if(to === "reamur"){
                setResultTemperature(FahToRe(parseFloat(fromTemperature)))
            }else if(to === "kelvin"){
                setResultTemperature(FahToKel(parseFloat(fromTemperature)))
            }
        }else if(from === "reamur"){
            if(to === "celcius"){
                setResultTemperature(ReToCel(parseFloat(fromTemperature)))
            }else if(to === "fahrenheit"){
                setResultTemperature(ReToFah(parseFloat(fromTemperature)))
            }else if(to === "kelvin"){
                setResultTemperature(ReToKel(parseFloat(fromTemperature)))
            }
        }else if(from === "kelvin"){
            if(to === "celcius"){
                setResultTemperature(KelToCel(parseFloat(fromTemperature)))
            }else if(to === "fahrenheit"){
                setResultTemperature(KelToFah(parseFloat(fromTemperature)))
            }else if(to === "reamur"){
                setResultTemperature(KelToRe(parseFloat(fromTemperature)))
            }
        }
    });

    return(
            <Container>
                <FormControl>
                        <SimpleGrid columns={2} spacing={10}>
                            <Box>
                                <Input type="number" onChange={getFromValue}/>
                                <Select placeholder="From" w="200px" onChange={getFrom}>
                                    {item}
                                </Select>
                            </Box>
                            <Box>
                                <Input type="number" value={resultTemperature}/>
                                <Select placeholder="To" w="200px" onChange={getTo}>
                                    {item}
                                </Select>
                            </Box>
                    </SimpleGrid>
                </FormControl>
                {/* <Router>
                    <Button w="50%" h="70px" marginLeft="50%"><Link to="/">Home</Link></Button>
                    <Switch>
                        <Route path="/" component={App}/>
                    </Switch>
                </Router> */}
            </Container>
    )
}