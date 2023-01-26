import React from 'react'
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'
import './App.css'

function App() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  
  const onSubmit = (data) => {
    console.log(data)
    Swal.fire({
      title: 'Registro Exitoso',
      html: 
        `El usuario se guardo correctamente <br/>`+
        `¡Gracias por registrarte <strong>${data.Nombre}</strong>!`,
      icon: 'success'
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card text-start form shadow">

      <div className="mb-3">
        <label htmlFor="Nombre" className="form-label">Nombre</label>
        <input type="text" className="form-control"
          {...register("Nombre", { 
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z ]+$/i 
          }
        )} />
        {errors?.Nombre?.type === "required" && <span className='text-danger'>* Este campo es obligatorio</span>}
        {errors?.Nombre?.type === "maxLength" && <span className='text-danger'>* El nombre excedio el maximo de 20 caracteres</span>}
        {errors?.Nombre?.type === "pattern" && <span className='text-danger'>* Solo se admiten caracteres alfabéticos</span>}
      </div>


      <div className="mb-3">
        <label htmlFor="aPaterno" className="form-label">Apellido Paterno</label>
        <input type="text" className="form-control"
          {...register("aPaterno", { 
            required: true, 
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i 
          }
        )} />
        {errors?.aPaterno?.type === "required" && <span className='text-danger'>* Este campo es obligatorio</span>}
        {errors?.aPaterno?.type === "maxLength" && <span className='text-danger'>* El apellido excedio el maximo de 20 caracteres</span>}
        {errors?.aPaterno?.type === "pattern" && <span className='text-danger'>* Solo se admiten caracteres alfabéticos</span>}
      </div>



      <div className="mb-3">
        <label htmlFor="aMaterno" className="form-label">Apellido Materno</label>
        <input type="text" className="form-control"
          {...register("aMaterno", { 
            required: true, 
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i 
          })} 
        />
        {errors?.aMaterno?.type === "required" && <span className='text-danger'>* Este campo es obligatorio</span>}
        {errors?.aMaterno?.type === "maxLength" && <span className='text-danger'>* El apellido excedio el maximo de 20 caracteres</span>}
        {errors?.aMaterno?.type === "pattern" && <span className='text-danger'>* Solo se admiten caracteres alfabéticos</span>}
      </div>

      <div className="mb-3" >
        <label htmlFor="sexo" className="form-label">Genero</label>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" 
            value="Masculino"
            {...register("gender", {
              required: true, 
            })}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1" >
            Masculino
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" 
            value="Femenino"
            {...register("gender", {
              required: true
            })}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2" >
            Femenino
          </label>
        </div>
        {errors.gender && <span className='text-danger'>* Por favor elige tu genero</span>}
      </div>


      <div className="mb-3">
        <label htmlFor="telefono" className="form-label">Teléfono</label>
        <input type="text" className="form-control" 
          {...register("telefono", { 
            required: true,
            pattern: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
          })}
        />
        {errors?.telefono?.type === "required" && <span className='text-danger'>* Este campo es obligatorio</span>}
        {errors?.telefono?.type === "maxLength" && <span className='text-danger'>* El apellido excedio el maximo de 20 caracteres</span>}
        {errors?.telefono?.type === "pattern" && <span className='text-danger'>* Numero de teléfono inválido</span>}
      </div>


      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo</label>
        <input type="email" className="form-control"  {...register("email", { 
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        })} />
        {errors?.email?.type === "required" && <span className='text-danger'>* Este campo es obligatorio</span>}
        {errors?.email?.type === "pattern" && <span className='text-danger'>* Correo electronico es inválido</span>}
      </div>
      
      <button type="submit" className='btn btn-primary mt-3'>Enviar Registro</button>
    </form>
  );
}

export default App
