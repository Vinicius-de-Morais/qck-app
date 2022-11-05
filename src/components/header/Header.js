import React from "react"
import { Icon } from "@skynexui/components"

export default function Header(){

    return(
        <header style={{
            backgroundColor: "#57339F", 
            display: "flex",
            justifyContent: "space-between",
            width: "100%", 
            height: 60,
        }}
    >
        {/* Sidebar btn */}
        <Icon
            label="Sidebar btn"
            name="FaBars"
            size="40px"
            styleSheet={{
                color: 'white',
                margin: "10px  10px 10px 5px",
            }}
            onClick={() => {alert('Open sidebar...')}}
        />
        {/* User Icon */}
        <Icon
            label="User Icon"
            name="FaUserCircle"
            size="40px"
            styleSheet={{
                color: 'gray',
                margin: "10px  10px 10px 5px",
            }}
        />
    </header>
    )
}