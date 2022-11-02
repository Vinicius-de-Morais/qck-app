import React from "react"
import Calls from "../src/components/calls/Calls"
import { Button } from "@skynexui/components"

// estilos para a 'tela' do telefone
const stylesDiv = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    color: 'black',
    width: 390,
    height: 844,
}
// pagina pra gente testar as coisas da div e tal
export default function Teste() {

    return(
    <>      
        <div style={stylesDiv}>
            <Calls/>
            
            <Button
                colorVariant="negative"
                iconName="FaExclamationTriangle"
            />
            <Button
                colorVariant="warning"
                iconName="FaPlus"
                label="Novo Chamado"
            />
        </div>
    </>
    )
}