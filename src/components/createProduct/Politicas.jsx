import React from 'react'

export const Politicas = (props) => {
  return (    
    <>
    <div className='politicas'>
        <h1>Políticas del producto</h1>
        <div className="politicas__contenedor">
            <div>
                <h1>Normas de la Casa</h1>
                <p>Descripción</p>
                <div>
                    <textarea
                    type="text"
                    value={props.policies}
                    onChange={ev=> props.setPolicies(ev.target.value)}
                    ></textarea>
                </div>
            </div>
            <div>
                <h1>Salud y seguridad</h1>
                <p>Descripción</p>
                <div>
                    <textarea
                    type="text"
                    value={props.policies}
                    onChange={ev=> props.setPolicies(ev.target.value)}
                    ></textarea>
                </div>
            </div>
            <div>
                <h1>Política de cancelacion</h1>
                <p>Descripción</p>
                <div>
                    <textarea
                    type="text"
                    value={props.policies}
                    onChange={ev=> props.setPolicies(ev.target.value)}
                    ></textarea>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
