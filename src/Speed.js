import React, { useState, useEffect } from 'react'
import { Box, Button, Center, chakra, Container, FormControl, Input, Select, SimpleGrid } from '@chakra-ui/react'


const speedOpt = [
    {value:"kmh",label:"Kilometer per Hour"},
    {value:"mph",label:"Mile per Hours"},
    {value:"mps",label:"Meter per Second"},
    {value:"knot",label:"Knot"},
];

let optSpeed = speedOpt.map((speed) => (
    <option key={speed.value} value={speed.value}>{speed.label}</option>
))

function kmhTomps(angka){
    return (angka * 5) / 18;
}

function kmhTomph(angka){
    return angka * 0.6214;
}

function kmhToknot(angka){
    return angka * 0.539957;
}

function mpsTokmh(angka){
    return (angka * 18) / 5;
}

function mpsTomph(angka){
    return angka * 2.23694;
}

function mpsToknot(angka){
    return angka * 1.94384;
}

function mphTokmh(angka){
    return angka / 0.6214;
}

function mphTomps(angka){
    return angka / 2.23694;
}

function mphToknot(angka){
    return angka * 0.868976;
}

function knotTokmh(angka){
    return angka * 0.539957;
}

function knotTomps(angka){
    return angka / 1.94384;
}

function knotTomph(angka){
    return angka / 0.868976;
}

export default function Speed(){
    const [fromSpeed, setFromSpeed] = useState(0);
    const [resultSpeed, setResultSpeed] = useState(0);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const getFrom = (e) => {
        setFrom(e.target.value)
    }

    const getFromValue = (e) => {
        setFromSpeed(e.target.value)
    }

    const getTo = (e) => {
        setTo(e.target.value)
    }

    useEffect(() =>{
        if(from === to){
            setResultSpeed(parseFloat(fromSpeed))
        }
        if(from === "kmh"){
            if(to === "mph"){
                setResultSpeed(kmhTomph(parseFloat(fromSpeed)))
            }else if(to === "mps"){
                setResultSpeed(kmhTomps(parseFloat(fromSpeed)))
            }else if(to === "knot"){
                setResultSpeed(kmhToknot(parseFloat(fromSpeed)))
            }
        }else if(from === "mps"){
            if(to === "kmh"){
                setResultSpeed(mpsTokmh(parseFloat(fromSpeed)))
            }else if(to === "mph"){
                setResultSpeed(mpsTomph(parseFloat(fromSpeed)))
            }else if(to === "knot"){
                setResultSpeed(mpsToknot(parseFloat(fromSpeed)))
            }
        }else if(from === "mph"){
            if(to === "kmh"){
                setResultSpeed(mphTokmh(parseFloat(fromSpeed)))
            }else if(to === "mps"){
                setResultSpeed(mphTomps(parseFloat(fromSpeed)))
            }else if(to === "knot"){
                setResultSpeed(mphToknot(parseFloat(fromSpeed)))
            }
        }else if(from === "knot"){
            if(to === "kmh"){
                setResultSpeed(knotTokmh(parseFloat(fromSpeed)))
            }else if(to === "mps"){
                setResultSpeed(knotTomps(parseFloat(fromSpeed)))
            }else if(to === "mph"){
                setResultSpeed(knotTomph(parseFloat(fromSpeed)))
            }
        }
    })

    return(
        <Container>
            <Center><chakra.h1 fontSize="40px">Speed</chakra.h1></Center>
            <FormControl>
                <SimpleGrid columns={2} spacing={10}>
                    <Box w="200px">
                        <Input w="100%" type="number" onChange={getFromValue}/>
                        <Select placeholder="From" onChange={getFrom}>
                            {optSpeed}
                        </Select>
                    </Box>
                    <Box w="200px">
                        <Input type="number" value={resultSpeed}/>
                        <Select placeholder="To" onChange={getTo}>
                            {optSpeed}
                        </Select>
                    </Box>
                </SimpleGrid>
            </FormControl>
        </Container>
    )
}