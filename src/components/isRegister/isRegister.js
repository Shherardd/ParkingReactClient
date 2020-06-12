import React, {Component} from 'react';
import './isRegister.css';
import Vehiculos from '../customers/vehiculos';


class IsRegister extends Component {
    constructor(){
        super();
        this.state = {
            value: '',
            placas: ''
        }
        this.getPlacas = this.getPlacas.bind(this);
    }

    getPlacas = (val) =>{
        console.log(val)
        this.setState({placas: val});
    }

    componentDidMount(){
        
    }

    render(){
        return (
            <div className="row my-1 bordeDivisor py-1 mx-1">
            
            <div className=""></div><label>Placas:</label>         
            <Vehiculos tabla="VEHICULO" id="PLACAS" columna="PLACAS" callBack={this.getPlacas}/>

            <div className="space"></div>
            </div>  
           
        );
    }
}

export default IsRegister;