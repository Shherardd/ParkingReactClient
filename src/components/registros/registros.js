import React, {Component} from 'react';
import Vehiculos from '../customers/vehiculos';
import IsNotRegister from '../isNotRegister/isNotRegister';
import './registros.css';


class Registros extends Component {
    constructor(){
        super();
        this.state = {value: '', isNew: 'false'}

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleIsNew = this.handleIsNew.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/registro',{
            method: 'POST',
            body: data,
        });
        
    }

    handleChange(event){
        this.setState({value : event.target.value})
    }

    handleIsNew(event){
        //alert(event.target.value);
        this.setState({isNew: event.target.value});
    }



    render(){
        let isBtn = false;
        let button;
        if(this.state.isNew == 'false'){
            button = <IsNotRegister/>;
        }

        return (
            <div className=''>
               <form onSubmit={this.handleSubmit} className=''>
               <fieldset>
               <legend>Registro:</legend>
                    <div className='form-group p-3'>
                    <div onChange={this.handleIsNew.bind(this)}>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="isNew" id="isNew1" value="true" />
                        <label className="form-check-label" for="inlineRadio1">Si</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="isNew" id="isNew2" value="false"/>
                        <label className="form-check-label" for="inlineRadio1">No</label>
                        </div>
                    </div>
                    {button}
                        <div>
                        <label htmlFor="username">ID_EMPLEADO</label>
                        <Vehiculos tabla='TIPO_VEHICULO' id='ID_TIPO' columna='TIPO'/>

                        <label htmlFor="username">Vehiculo</label>
                        <Vehiculos tabla='VEHICULO' id='PLACAS' columna='MODELO'/>

                        <label htmlFor="username">REGISTRO</label>
                        <Vehiculos tabla='REGISTRO' id='FOLIO' columna='HORA_REGISTRO'/>

                        <label htmlFor="email">ID_TARIFA</label>
                        <input value={this.state.value} onChange={this.handleChange} id="ID_TARIFA" name="ID_TARIFA" type="text" className='form-control'/>

                        <label htmlFor="birthdate">ESTADO</label>
                        <input id="ESTADO" name="ESTADO" type="text" className='form-control'/>
                        </div>
                        <button className='btn btn-success mt-3 w-100'>Registrar</button>
                
                    </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Registros;