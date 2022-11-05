import React, { useState } from "react"
import Calls from "../src/components/calls/Calls"
import { Button } from "@skynexui/components"
import NewCalls from "../src/components/newCalls/NewCalls"
import Header from "../src/components/header/Header"

// estilos para a 'tela' do telefone
const stylesDiv = {
    backgroundColor: 'white',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    color: 'black',
    width: 390,
    height: 800,
}
// pagina pra gente testar as coisas da div e tal
export default function Teste() {

    // variavel para exibir ou n NewCalls
    const [showNewCall, setShowNewCall] = useState(false)

    return(
    <>      
        <div style={stylesDiv}>

            <Header/>

            {/* Calls element */}
            <div>
                <Calls/>
            </div>
            
            {/* Exibe ou nao a new calls baseado no botao */}
            {showNewCall ? 
                <NewCalls 
                    onConfirm={() => alert("Enviando...")} 
                    onCancel={() => {setShowNewCall(false)}} 
                />
            : null}

            <div style={{
                position: "absolute",
                display: "flex",
                justifyContent: "space-between",
                bottom: 0,
                marginBottom: 15,
                width: "90%",

            }}>
                <Button
                    colorVariant="negative"
                    iconName="FaExclamationTriangle"
                />
                <Button
                    colorVariant="warning"
                    iconName="FaPlus"
                    label="Novo Chamado"
                    onClick={() => {
                        setShowNewCall(true)
                    }}
                />
            </div>

        </div>
    </>
    )
}