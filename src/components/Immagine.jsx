import { Component } from "react";

class Immagine extends Component {
    render(){
        return(
         <div>
             <img src={this.props.src} alt={this.props.src} />
             <p>ciao</p>
         </div>
         )
    }
}

export default Immagine