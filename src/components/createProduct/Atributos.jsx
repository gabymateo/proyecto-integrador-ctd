import React from "react";
import { useFeaturesApi } from '../../apis/featuresApi.js'
import {FaWindowClose} from 'react-icons/fa'
import {FaPlusSquare} from 'react-icons/fa'


export const Atributos = (props) => {
  const {features, getFeatures} = useFeaturesApi()
  const atributos = features?.filter(x=> x.type!=='security'&&x.type!=='cancelation'&&x.type!=='rules')
  
  console.log(atributos);
  return (
    <>
      <div className="atributos">
        <h1>Agregar atributos</h1>
        <div className="atributos__contenedor">
          <label>
            Nombre
            <div>
              <input 
              type="text"
              value={props.atribute}
              onChange={ev=> props.setAtributeName(ev.target.value)} />
            </div>
          </label>
          <label>
            Ícono
            <div>
              <input 
              type="text" 
              value={props.atribute}
              onChange={ev=> props.setAtributeIcon(ev.target.value)}/>
            </div>
          </label>
          {/* <FaWindowClose/> */}
          <FaPlusSquare/>
        </div>
      </div>
    </>
  );
};
