import React, {Component} from 'react';
import './isNotRegister.css';

class isNotRegister extends Component {
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
                      
            <div className="col-4"><label>Placas:</label>
            <input id="PLACAS" name="PLACAS" type="text" className="form-control"/></div>   

            <div className="col-4"><label>Modelo:</label>
            <input id="MODELO" name="MODELO" type="text" className="form-control"/></div>

            <div className="col-4"><label>Marca:</label>
            <input id="MARCA" name="MARCA" type="text" className="form-control"/></div>
            <div className="space"></div>
            </div>  
           
        );
    }
}

export default isNotRegister;