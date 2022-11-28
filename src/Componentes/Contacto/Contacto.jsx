import React from "react";
import { useForm } from "react-hook-form";
import "./Contacto.css"


const Contacto = () => {
  document.title = `Mundo Café Contacto`
  const { register, formState: { errors }, watch, handleSubmit } = useForm("");
  const onSubmit = (data) => {
    console.log(data);

  }
  return (
    <section className="sectionContacto">
      <h2 className="tituloContacto">Formulario de Contacto</h2>
      <div className="nombre"> Nombre: {watch('nombre')}</div>
      <div className="apellido"> Apellido: {watch('apellido')}</div>
      <form onSubmit={handleSubmit(onSubmit)} className="formularioContacto" >
        <div className="divInput">
          <input className="inputContacto" placeholder="Nombre" type="text" {...register('nombre', {
            required: true,
            maxLength: 15,
            minLength: 3
          })} />

          {errors.nombre?.type === 'required' && <p className="p"> El campo Nombre es obligatorio </p>
          }
          {errors.nombre?.type === 'maxLength' && <p className="p"> El campo Nombre debe tener menos de 15 caracteres</p>
          }
          {errors.nombre?.type === 'minLength' && <p className="p"> El campo Nombre debe tener al menos 3 caracteres</p>
          }
        </div>

        <div className="divInput">

          <input className="inputContacto" placeholder="Apellido" type="text" {...register('apellido', {
            required: true,
            maxLength: 15,
            minLength: 3
          })} />
          {errors.apellido?.type === 'required' && <p className="p"> El campo Apellido es obligatorio </p>
          }
          {errors.apellido?.type === 'maxLength' && <p className="p"> El campo Apellido debe tener menos de 15 caracteres</p>
          }
          {errors.apellido?.type === 'minLength' && <p className="p"> El campo Apellido debe tener al menos 3 caracteres</p>
          }
        </div>
        <div className="divInput">
          <input className="inputContacto" placeholder="Edad" type="number" {...register('edad', {
            required: true,
            min: 18,
            max: 99
          })} />

          {errors.edad?.type === 'required' && <p className="p"> El campo Edad es obligatorio </p>
          }
          {errors.edad?.type === 'min' && <p className="p"> Debes tener al menos 18 años de edad</p>
          }
          {errors.edad?.type === 'max' && <p className="p">El Limite de edad es de 99 años</p>
          }
        </div>
        <div className="divInput">
          <input className="inputContacto" placeholder="Email" type="text" {...register('email', {
            pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
          })} />


          {errors.email?.type === 'pattern' && <p className="p"> El Formato es Incorrecto </p>
          }
        </div>
        <div className="divInput">
          <label className="labelbtn">Estilo Preferido</label>
          <select className="selectFormulario" {...register('sabor')}>
            <option value="Expresso">Expresso</option>
            <option value="Lungo">Lungo</option>
            <option value="Lagrima">Lágrima</option>
            <option value="Cortado">Cortado</option>
            <option value="Cafe con Leche">Café Con Leche</option>
            <option value="Mocca">Mocca</option>
            <option value="Capuccino">Capuccino</option>
            <option value="Irlandes">Café Irlandés</option>
          </select>
        </div>
        <div className="divInput">
        <input className="btnEnviar" type="Submit" value="Enviar" />
        </div>
      </form>
    </section>
  );
};

export default Contacto;
