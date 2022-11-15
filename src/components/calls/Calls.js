import React, {useState} from "react"
import ReactDOM from "react-dom";

import styles from "../../../styles/Calls.module.css"


function renderCheckbox () {
    return 

}


export default function Calls(props){

    return(
        <div className={styles.box}>
            <header className={styles.boxHeader}>
                <h3>Segurança</h3>
                <span>X</span>
            </header>

            <div className={styles.textArea}>
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
            </div>

            <div className={styles.checkboxChecked}>
                <label>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5 5.5L8.4375 18.5L2.5 12.5909" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </label>
            </div>

            <footer className={styles.footerBox}><span>Enviado 13:30</span></footer>
            
        </div>




        // CALL MINIMIZADA
        
        // <div className={styles.minBox}>
        //     <h3>Segurança </h3>
        //     <td>Enviado 13:30 · Recebido 13:35</td>
        //     <td></td>
        //     <span>-</span>
        // </div>
    )
} 