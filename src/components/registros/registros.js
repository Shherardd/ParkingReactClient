import React, {Component} from 'react';
import Vehiculos from '../customers/vehiculos';
import IsNotRegister from '../isNotRegister/isNotRegister';
import './registros.css';
import IsRegister from '../isRegister/isRegister';
import TablaControl from '../tablaControl/tablaControl';


class Registros extends Component {
    constructor(){
        super();
        this.state = {value: '',
        showTable: false,
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
        this.showTable = this.showTable.bind(this);
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
        fetch(`/getTarifa?idV=${this.state.ID_VEHICULO}&idS=${this.state.ID_SERVICIO}`)
        .then(res => res.text())
        .then(tarifa => this.setState({tarifa}));
        console.log(this.state.tarifa)
    }
    showTable (event){
        if(this.state.showTable){this.setState({showTable:false})}else{this.setState({showTable:true})}
    }

    reloadFunc(){
        this.forceUpdate();
    }

    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/registro',{
            method: 'POST',
            body: data,
        });
        this.setState({isNew:'true', isEnable: false, tarifa: 0})
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
        let tabla;
        if(this.state.isNew === 'false'){
            button = <IsNotRegister/>;
        }else{
            /*button = <Vehiculos tabla="VEHICULO" id="PLACAS" columna="PLACAS"/>*/
            button = <IsRegister/>
        }
        if(this.state.isEnable == true){
            submit = <button className='btn btn-success mt-3 w-100'>Registrar</button>;
        }else{submit=<button disabled className='btn btn-secondary mt-3 w-100'>Registrar</button>;}

        if(this.state.showTable){
            tabla = <TablaControl/>;
        }else{tabla = <div></div>;}

        return (
            <div className=''>
               <form onSubmit={this.handleSubmit} className=''>
               <fieldset>
               <legend>Registro:</legend>
                    <div className='form-group p-3'>
                    <div onChange={this.handleIsNew.bind(this)}>
                        <label>Nuevo Registro?</label><div></div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="isNew" id="isNew1" value="true" />
                        <label className="form-check-label" >No</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="isNew" id="isNew2" value="false"/>
                        <label className="form-check-label" >Si</label>
                        </div>
                    </div>
                        {button}
                        <div>
                        <label htmlFor="username">Tipo de vehiculo</label>
                        <Vehiculos tabla='TIPO_VEHICULO' id='ID_TIPO' columna='TIPO' callBack={this.getVehiculo}/>

                        <label htmlFor="username">Tipo de servicio</label>
                        <Vehiculos tabla='TIPO_SERVICIO' id='ID_SERVICIO' columna='TIPO_SERVICIO' callBack={this.getServicio}/>
                        <div className="row my-3"><div className="col-5"></div>
                        <button onClick={this.getTarifa} className="btn btn-warning col-4" type="button">Obtener precio</button>
                        <input className="form-control col-2 mx-2" value={this.state.tarifa} id="tarifa" name="tarifa" readOnly/>
                        MXN</div>

                        <div></div>

                        

                        <label htmlFor="birthdate">ESTADO</label>
                        <input id="ESTADO" name="ESTADO" type="text" className='form-control' readOnly value="ACTIVO"/> 
                        </div>
                        {submit}
                        <button onClick={this.showTable} type="button" className="btn btn-info my-4">Mostrar Actuales</button>
                        <div>
                        {tabla}
                        
                        </div>
                
                    </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Registros;