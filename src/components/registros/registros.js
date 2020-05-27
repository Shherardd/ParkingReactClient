import React, {Component} from 'react';
import Vehiculos from '../customers/vehiculos';
import IsNotRegister from '../isNotRegister/isNotRegister';
import './registros.css';
import IsRegister from '../isRegister/isRegister';


class Registros extends Component {
    constructor(){
        super();
        this.state = {value: '',
        isNew: 'false',
        isEnable: false,
        ID_VEHICULO: 1,
        ID_SERVICIO: 1,
        tarifa: 0}

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleIsNew = this.handleIsNew.bind(this);
        this.getVehiculo = this.getVehiculo.bind(this);
        this.getServicio = this.getServicio.bind(this);
        this.getTarifa = this.getTarifa.bind(this);
    }

    getVehiculo = (val) =>{
        console.log(val)
        this.setState({ID_VEHICULO: val});
    }
    getServicio = (val) =>{
        console.log(val)
        this.setState({ID_SERVICIO: val});
    }
    getTarifa = () =>{
        this.setState({isEnable:true})
        fetch('/getTarifa')
        .then(res => res.text())
        .then(tarifa => this.setState({tarifa}));
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
        let button;
        let submit;
        if(this.state.isNew === 'false'){
            button = <IsNotRegister/>;
        }else{
            /*button = <Vehiculos tabla="VEHICULO" id="PLACAS" columna="PLACAS"/>*/
            button = <IsRegister/>
        }
        if(this.state.isEnable == true){
            submit = <button className='btn btn-success mt-3 w-100'>Registrar</button>;
        }else{submit=<button disabled className='btn btn-secondary mt-3 w-100'>Registrar</button>;}

        return (
            <div className=''>
               <form onSubmit={this.handleSubmit} className=''>
               <fieldset>
               <legend>Registro:</legend>
                    <div className='form-group p-3'>
                    <div onChange={this.handleIsNew.bind(this)}>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="isNew" id="isNew1" value="true" />
                        <label className="form-check-label" >Si</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="isNew" id="isNew2" value="false"/>
                        <label className="form-check-label" >No</label>
                        </div>
                    </div>
                        {button}
                        <div>
                        <label htmlFor="username">Tipo de vehiculo</label>
                        <Vehiculos tabla='TIPO_VEHICULO' id='ID_TIPO' columna='TIPO' callBack={this.getVehiculo}/>

                        <label htmlFor="username">Tipo de servicio</label>
                        <Vehiculos tabla='TIPO_SERVICIO' id='ID_SERVICIO' columna='TIPO_SERVICIO' callBack={this.getServicio}/>
                        <input className="form-control col-2" value={this.state.tarifa} id="tarifa" name="tarifa"/>
                        <button onClick={this.getTarifa} className="btn btn-warning" type="button">Obtener precio</button>
                        <div></div>

                        <label htmlFor="email">ID_TARIFA</label>
                        <input value={this.state.value} onChange={this.handleChange} id="ID_TARIFA" name="ID_TARIFA" type="text" className='form-control'/>

                        <label htmlFor="birthdate">ESTADO</label>
                        <input id="ESTADO" name="ESTADO" type="text" className='form-control' value={this.state.tarifa}/>
                        </div>
                        {submit}
                
                    </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Registros;