import React from 'react'
import axios from 'axios'

const baseUrl = 'http://3.142.76.191:8080/'

// -----------------  ESTA ES LA API DE CATEGORIAS----------------------
export function useCategoriesApi() {
    const [categories, setCategories] = React.useState([]);

     // ---------- FUNCIÓN PARA CREAR PRODUCTOS EN LA DB ---------------   
//     const postCategories = async (title, description, imageUrl) => {
//     try{    
//         const responsePostCategories = await axios.post(`${baseUrl}/categories/`, {
//             title: title,
//             description: description,
//             imageUrl: imageUrl,
//         })
//         console.log("responsePostCategories: ", responsePostCategories);
//     }
//     catch (error) {
//         console.error('error', error.response.data)
//     }
// }

// ---------- FUNCIÓN PARA OBTENER LAS CATEGORIAS DE LA DB --------------- 
const getCategories = async () => {
    try {
        const responseGetCategories = await axios.get(`${baseUrl}/categories/`)
        //console.log("responseGetCategories: ", responseGetCategories);
        setCategories(responseGetCategories.data);
    }
    catch (error) {
        console.error('error', error.response.data)
    }
}

    React.useEffect(() => {
        getCategories()
    }, [])

    // ---------- ESTE ES EL RETURN DE LA API ---------------------------
return {
    categories: categories.data,
    //postCategories: postCategories,
    getCategories: getCategories,
    }


}
