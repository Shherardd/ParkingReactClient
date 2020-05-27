import React, {Component} from 'react';
import './isRegister.css';
import Vehiculos from '../customers/vehiculos';


class IsRegister extends Component {
    constructor(){
        super();
        this.state = {
            value: ''
        }
    }

    componentDidMount(){
        
    }

    render(){
        return (
            <div className="row my-1 bordeDivisor py-1">
            
            <div className="col-4"></div><label>Placas:</label>         
            <Vehiculos tabla="VEHICULO" id="PLACAS" columna="PLACAS"/>

            <div className="space"></div>
            </div>  
           
        );
    }
}

export default IsRegister;