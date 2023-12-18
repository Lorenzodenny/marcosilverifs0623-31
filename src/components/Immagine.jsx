import { Component } from "react";

class Immagine extends Component {
    render(){
        return(
         <div>
             <img src={this.props.src} alt={this.props.src} />
             <p>{this.props.paragrafo}</p>
             <p>{this.props.paragrafo2}</p>
         </div>
         )
    }
}

export default Immagine