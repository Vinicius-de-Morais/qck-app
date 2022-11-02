import { Button } from "@skynexui/components";
import React, { useState } from "react";

import styles from "../../../styles/NewCalls.module.css";

/**
 * Temporário; para desenvolvimento da interface.
 * Mantém uma lista de setores, e os relaciona com suas mensagens rápidas.
 * @todo Tirar isso aqui e usar algo não hardcoded.
 * @author Lucas Bortoli
 */
const __Dados = {
	"Limpeza": ["sujeira", "no corredor", "na cozinha", "no banheiro"],
	"Segurança": ["briga", "confusão", "emergência médica"]
}

/**
 * Componente de novo chamado
 * @author Lucas Bortoli
 * @param {Object} props
 * @param {(() => void)?} props.onConfirm Chamado quando o botão de confirmar é clicado.
 * @param {(() => void)?} props.onCancel Chamado quando o botão de cancelar é clicado.
 */
export default function NewCalls({ onConfirm, onCancel }) {
	// Lista de setores
	const [sectors, setSectors] = useState(Object.keys(__Dados))

	// Índice na lista de setores
	const [sector, setSector] = useState(0)

	const [quickMessages, setQuickMessages] = useState(__Dados[sectors[sector]])

	// Mensagem atual, na textbox
	const [message, setMessage] = useState("")

	/**
	 * Muda o setor selecionado, junto com as mensagens rápidas.
	 * @param {number} sectorIndex 
	 */
	const selectSector = (sectorIndex) => {
		setSector(sectorIndex)
		setQuickMessages(__Dados[sectors[sectorIndex]])
		setMessage("")
	}

	return (
		<div className={styles.newCalls}>
			<h1>Novo chamado</h1>

			<div className={styles.row}>
				<label htmlFor="sector">Setor</label>
				<select name="sector" onChange={ev => selectSector(parseInt(ev.target.value))}>
					{sectors.map((s, i) => (
						<option key={i} value={i}>{s}</option>
					))}
				</select>
			</div>

			<div className={styles.row}>
				<label>Mensagens rápidas</label>
				<div className={styles.quickMessages}>
					{quickMessages.map((msg, i) => (
						<button key={i} onClick={() => setMessage(msg)}>{msg}</button>
					))}
				</div>
			</div>

			<div className={styles.row}>
				<label>Mensagem customizada</label>
				<input
					name="customMessage"
					max="128"
					value={message}
					onChange={(ev) => setMessage(ev.target.value)}
				></input>
			</div>

			<div className={styles.row}>
				<div className={styles.actions}>
					<button onClick={() => onCancel ? onCancel() : false}>Cancelar</button>
					<button onClick={() => onConfirm ? onConfirm() : false}>Enviar</button>
				</div>
			</div>
		</div>
	);
}
