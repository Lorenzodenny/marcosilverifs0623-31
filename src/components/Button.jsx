import { Component } from "react"

const Button = (props) => {
    return <button type="button" onClick={() => window.alert(`${props.intro} ${props.name}`)}>{props.name}</button>
}


export default Button