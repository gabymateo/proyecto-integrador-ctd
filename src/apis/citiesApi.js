import React from 'react'
import axios from 'axios'

const baseUrl = 'http://3.142.76.191:8080'

// -----------------  ESTA ES LA API DE CIUDADES----------------------
export function useCitiesApi() {
    const [cities, setCities] = React.useState([]);


// ---------- FUNCIÓN PARA OBTENER LAS CIUDADES DE LA DB --------------- 
const getCities = async () => {
    try {
        const responseGetCities = await axios.get(`${baseUrl}/cities/`)
        //console.log("responseGetCities: ", responseGetCities);
        setCities(responseGetCities.data.data);
    }
    catch (error) {
        console.error('error', error.response.data)
    }
}

    React.useEffect(() => {
        getCities()
    }, [])

    // ---------- ESTE ES EL RETURN DE LA API ---------------------------
return {
    cities: cities,
    getCities: getCities,
    }


}
