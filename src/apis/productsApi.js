import React from 'react'
import axios from 'axios'

const baseUrl = 'http://18.220.195.162:8080/grupo5'

// -----------------  ESTA ES LA API DE PRODUCTOS ----------------------
export function useProductsApi() {
    const [products, setProducts] = React.useState([]);

     // ---------- FUNCIÓN PARA CREAR PRODUCTOS EN LA DB ---------------   
//     const postProducts = async (name, email, description, images, availability, description, category, city) => {
//     try{    
//         const responsePostProducts = await axios.post(`${baseUrl}/products/`, {
//             name: name,
//             email: email,
//             description: description,
//             images: images,
//             availability: availability,
//             category: category,
//             city: city
//         })
//         console.log("responsePostProducts: ", responsePostProducts);
//     }
//     catch (error) {
//         console.error('error', error.response.data)

//     }
// }

    // ---------- FUNCIÓN PARA OBTENER TODOS LOS PRODUCTOS DE LA DB --------------- 
    const getProducts = async () => {
    try {
        const responseGetProducts = await axios.get(`${baseUrl}/products/`)
        //console.log("responseGetProducts: ", responseGetProducts);
        setProducts(responseGetProducts.data);
    }
    catch (error) {
        console.error('error', error)
    }
}
    // ---------- FUNCIÓN PARA OBTENER PRODUCTOS FILTRADOS POR CIUDAD DE LA DB --------
    const getProductsFilter = async (ciudadId, categoriaId) => {
        try {
            console.log(`${baseUrl}/products/?cityId=${ciudadId}&categoryId=${categoriaId}`);
            const responseGetProductsFilter = await axios.get(`${baseUrl}/products/?cityId=${ciudadId}&categoryId=${categoriaId}`)
            setProducts(responseGetProductsFilter.data);
            //console.log("responseGetProductsFilterCity: ", responseGetProductsFilterCity.data);
        }     
        catch (error) {
            console.error('error', error.response.data)
        }
    } 
    // React.useEffect (()=> {
    //     console.log("productos en la api:", products.data);
    // },[getProductsFilterCity])

    // ---------- ESTE ES EL RETURN DE LA API ---------------------------
return {
    products: products.data,
    setProducts: setProducts,
    getProducts: getProducts,
    getProductsFilter: getProductsFilter,
    //postProducts: postProducts,
    }
}