import React from 'react'
import axios from 'axios'

const baseUrl = 'http://3.19.63.189:8080/grupo5'

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
    const getProductsFilterCity = async (option) => {
        try {
            console.log(`${baseUrl}/products/?cityId=${option}`);
            const responseGetProductsFilterCity = await axios.get(`${baseUrl}/products/?cityId=${option}`)
            setProducts(()=>responseGetProductsFilterCity.data);
            //console.log("responseGetProductsFilterCity: ", responseGetProductsFilterCity.data);
        }     
        catch (error) {
            console.error('error', error.response.data)
        }
    }
    
    // ---------- FUNCIÓN PARA OBTENER PRODUCTOS FILTRADOS POR CATEGORÍA DE LA DB --------------- 
    const getProductsFilterCategory = async (option) => {
        try {
            console.log(`${baseUrl}/products/?categoryId=${option}`);
            const responseGetProductsFilterCategory = await axios.get(`${baseUrl}/products/?categoryId=${option}`)
            //console.log("responseGetProductsFilterCategory: ", responseGetProductsFilterCategory.data);
            setProducts(responseGetProductsFilterCategory.data);
        }
        catch (error) {
            console.error('error', error.response.data)
        }
        
    }

    // React.useEffect (()=> {
    
    // },[products])


    // ---------- ESTE ES EL RETURN DE LA API ---------------------------
return {
    products: products.data,
    //postProducts: postProducts,
    getProducts: getProducts,
    getProductsFilterCity: getProductsFilterCity,
    getProductsFilterCategory: getProductsFilterCategory,
    }
}