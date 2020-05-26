import React, {Component} from 'react';
import './customers.css';

class Vehiculos extends Component {
    constructor(props){
        super();
        this.state = {
            vehiculos : []
        }
    }

    componentDidMount(){
        fetch(`/getVehiculos?id=${this.props.id}&tabla=${this.props.tabla}&columna=${this.props.columna}`)
            .then(res => res.json())
            .then(vehiculos => this.setState({vehiculos}, () => console.log('vehiculos fetched',
            vehiculos)));
    }

    render(){
        return (
                            
                <select className="form-control" id="ID_EMPLEADO" name="ID_EMPLEADO" type="text">
                    {this.state.vehiculos.map(vehiculo =>
                        <option key={vehiculo.ID} value={vehiculo.ID}>{ vehiculo.DES }</option>
                        )}
                    
                </select>

            
        );
    }
}

export default Vehiculos;