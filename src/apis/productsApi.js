import React from 'react'
import axios from 'axios'
import { useSearchParams } from "react-router-dom";

const baseUrl = 'http://18.220.195.162:8080/grupo5'

// -----------------  ESTA ES LA API DE PRODUCTOS ----------------------
export function useProductsApi() {

    const [products, setProducts] = React.useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

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
    const getProductsFilter = async () => {
        
        try {
            if (searchParams.get("categoryId") && searchParams.get("cityId")) {
                console.log("categoria:",searchParams.get("categoryId"), " ciudad:", searchParams.get("cityId") );
                const responseGetProductsFilter = await axios.get(`${baseUrl}/products/?cityId=${searchParams.get("cityId")}&categoryId=${searchParams.get("categoryId")}`)
                console.log(`${baseUrl}/products/?cityId=${searchParams.get("cityId")}&categoryId=${searchParams.get("categoryId")}`);
                setProducts(responseGetProductsFilter.data)
            }
            else if (searchParams.get("categoryId") == undefined || searchParams.get("categoryId") == null) {
                const responseGetProductsFilter = await axios.get(`${baseUrl}/products/?cityId=${searchParams.get("cityId")}`)
                console.log(`${baseUrl}/products/?cityId=${searchParams.get("cityId")}`);
                setProducts(responseGetProductsFilter.data)
            }
            else if (searchParams.get("cityId") == undefined || searchParams.get("cityId") == null) {
                const responseGetProductsFilter = await axios.get(`${baseUrl}/products/?categoryId=${searchParams.get("categoryId")}`)
                console.log(`${baseUrl}/products/?categoryId=${searchParams.get("categoryId")}`);
                setProducts(responseGetProductsFilter.data)
            }
            else {
                const responseGetProductsFilter = await axios.get(`${baseUrl}/products/`)
                console.log(`${baseUrl}/products/`);
                setProducts(responseGetProductsFilter.data)
            }
        }     
        catch (error) {
            console.log("categoria:",searchParams.get("categoryId"), " ciudad:", searchParams.get("cityId") )
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