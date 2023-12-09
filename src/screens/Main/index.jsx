import { Box, Button, ButtonText, Center, FormControl, FormControlLabel, FormControlLabelText, HStack, Heading, Image, Input, InputField, Switch, Text } from "@gluestack-ui/themed";
import { useState } from "react";

import homem from "../../../assets/homem-semfundo.png"
import mulher from "../../../assets/mulher-semfundo.png"


export default function Main() {
    const [peso, setPeso] = useState("72")
    const [altura, setAltura] = useState("1.70")
    const [sexo, setSexo] = useState(false)
    const [resultado, setResultado] = useState("")

    const calcularHandle = () => {
        let alturaConvertida = parseFloat(altura)
        let result  = 0

        if (altura>2.2) {
            setResultado("Altura deve ser menor que 2.2")
            return;
        }

        if (sexo) {
            result = (62.1*alturaConvertida)-44.7
        } else {
            result = (72.7*alturaConvertida)-58
        }
        

        setResultado(Math.round(result))
    }

    const limparHandle = () => {
        setPeso("72")
        setAltura("1.70")
        setSexo(false)
        setResultado("")
    }

    return <Box bg="$primary100" p="$2" h={"$3/4"} w={300} borderRadius={"$md"} backgroundColor={"#EFADC1"}>
        <Center h={"$full"} style={{backgroundColor:"#ffcbdb" , fontSize: 100,}}>
            <Heading style={{color:"#fff"}}>Peso Ideal</Heading>
            <FormControl>
                <FormControlLabel>
                    <FormControlLabelText style={{color:"#fff",}}>Peso</FormControlLabelText>
                </FormControlLabel>
                <Input w={"$full"}>
                    <InputField value={peso} onChangeText={setPeso} keyboardType="numeric"/>
                </Input>
                <FormControlLabel>
                    <FormControlLabelText style={{color:"#fff"}}>Altura</FormControlLabelText>
                </FormControlLabel>
                <Input w={"$full"}>
                    <InputField value={altura} onChangeText={setAltura} keyboardType="number-pad"/>
                </Input>
                <FormControlLabel>
                    <FormControlLabelText style={{color:"#fff"}}>Sexo</FormControlLabelText>
                </FormControlLabel>
                <HStack w={"$full"} space="md" justifyContent="center" alignItems="center">
                    <FormControlLabelText style={{color:"#fff"}}>Homem</FormControlLabelText>
                    <Switch value={sexo} onValueChange={setSexo} />
                    <FormControlLabelText style={{color:"#fff"}}>Mulher</FormControlLabelText>
                </HStack>
                <Button onPress={calcularHandle} style={{backgroundColor:"#EFADC1" , borderRadius: 15,}}>
                    <ButtonText style={{color:"#fff" ,}}>Calcular</ButtonText>
                </Button>
                <Text style={{color:"#ffcbdb"}}> gstnrjtjhgfh </Text>
                <Button onPress={limparHandle} style={{backgroundColor:"#EFADC1" , borderRadius: 15,}}>
                    <ButtonText style={{color:"#fff",}}>Limpar</ButtonText>
                </Button>
                <Box justifyContent="space-between" alignItems="center" height={100} flexDirection="row">
                    <Text style={{color:"#fff", }}>Resultado</Text>
                    <Text fontWeight="$bold">{resultado}</Text>
                </Box>
            </FormControl>
           
        </Center>
    </Box>
}

