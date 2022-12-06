import React from 'react'
import './form.css';

  const initValues = {
    descripcion: "",
  };

export const Descripcion = () => {
  const [description, setDesciption] = useState(undefined)
  //---------------------------------INIT Controlar valores del form----------------------
  const handleChangeFormValues = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleBlurDescription = ()=> {
    const hasError = !((formValues.name).length>15)
    setDesciption(hasError)
    // handleValidationAll();
  }

  return (
    <>
    <div className="descripcion">
        <p>Descripción</p>
        <div>
            <textarea
            onClick={handleChangeFormValues}
            onBlur={handleBlurDescription}
            ></textarea>
        </div>
        <button type="submit" >
          test
        </button>

    </div>
    </>
  )
}
