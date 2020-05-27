import React, {Component} from 'react';
import './customers.css';

class Vehiculos extends Component {
    constructor(props){
        super();
        this.state = {
            vehiculos : []
        }
        this.setValue = this.setValue.bind(this);
        
    }

    setValue = (event) =>{
        this.props.callBack(event.target.value);
    }

    someFn = () => {
        this.props.callBack('Si qeu me devuelve el dato');
    }

    componentDidMount(){
        fetch(`/getVehiculos?id=${this.props.id}&tabla=${this.props.tabla}&columna=${this.props.columna}`)
            .then(res => res.json())
            .then(vehiculos => this.setState({vehiculos}, () => console.log('vehiculos fetched',
            vehiculos)));
            
    }

    render(){
        
        return (
                      
                <select onChange = {this.setValue.bind(this)} className="form-control" id={this.props.id} name={this.props.id} type="text">
                    {this.state.vehiculos.map(vehiculo =>
                        <option key={vehiculo.ID} value={vehiculo.ID}>{ vehiculo.DES }</option>
                        )}
                    
                </select>
                
                

            
        );
    }
}

export default Vehiculos;