import React, {Component} from 'react';
import './tablaControl.css';

class TablaControl extends Component {
    constructor(props){
        super();
        this.state = {
            registros : []
        }
        
        
    }

  

    componentDidMount(){
        fetch(`/getRegistro`)
            .then(res => res.json())
            .then(registros => this.setState({registros}, () => console.log('vehiculos fetched',
            registros)));
            
    }

    render(){
        
        return (
                      
                
            <div className="over">
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">Folio</th>
                            <th scope="col">Placas</th>
                            <th scope="col">Fecha de ingreso</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Servicio</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.registros.map(registro =>
                        
                        <tr key={registro.FOLIO}>
                            <th scope="row">{registro.FOLIO}</th>
                            <td >{registro.IDV}</td>
                            <td >{registro.HR}</td>
                            <td >{registro.MARCA}</td>
                            <td >{registro.MODELO}</td>
                            <td >{registro.TS}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
                </div>
                

            
        );
    }
}

export default TablaControl;