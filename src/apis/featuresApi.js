import React from 'react'
import axios from 'axios'

const baseUrl = 'http://3.142.76.191:8080'

// -----------------  ESTA ES LA API DE PRODUCTOS ----------------------
export function useFeaturesApi() {
    const [features, setFeatures] = React.useState([]);

    // ---------- FUNCIÓN PARA OBTENER LAS CIUDADES DE LA DB --------------- 
const getFeatures = async () => {
    try {
        const responseGetFeatures = await axios.get(`${baseUrl}/features/`)
        // console.log("responseGetFeatures: ", responseGetFeatures);
        setFeatures(responseGetFeatures.data.data)
    }
    catch (error) {
        console.error('error', error.response.data)
    }
}

    React.useEffect(() => {
        getFeatures()
    }, [])

    // ---------- ESTE ES EL RETURN DE LA API ---------------------------
return {
    features: features,
    getFeatures: getFeatures,
    }

}