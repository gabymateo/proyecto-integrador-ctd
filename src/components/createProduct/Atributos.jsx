import React from "react";
import { useState} from "react";
import { useFeaturesApi } from '../../apis/featuresApi.js'

export const Atributos = (props) => {
  const {features, getFeatures} = useFeaturesApi()
  const atributos = features?.filter(x=> x.type!=='security'&&x.type!=='cancelation'&&x.type!=='rules')
  const [checkedState, setCheckedState] = useState(new Array(features.length).fill(false)
);

React.useEffect(() => {
  getFeatures()
}, [])


const handleOnChange = (position) => {
  const updatedCheckedState = checkedState.map((item, index) =>
    index === position ? !item : item
  );
  setCheckedState(updatedCheckedState);
  console.log(updatedCheckedState);
}

console.log(checkedState);


  return (
    <>
      <div className="atributos"> 
        <h1>Agregar atributos</h1>
          <div className="atributos__contenedor">
            <ul>
            {atributos.map((feature, index) => {
              return (
              <li key={feature.id}>
                <label key={feature.id} htmlFor={feature.id}> {feature.name}  </label>
                <input key={feature.id+1000} type="checkbox" id={feature.id} name={feature.name}  value={feature.id} 
                  onChange={handleOnChange} checked={checkedState[feature.id]}></input> 
              </li>
              )
            })}
            </ul>
            
          </div>

      </div>
    </>
  );
};
