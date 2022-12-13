import React from 'react'
import axios from 'axios'
import { useSearchParams } from "react-router-dom";


const baseUrl = 'http://3.142.76.191:8080'

// -----------------  ESTA ES LA API DE PRODUCTOS ----------------------
export function useProductsApi() {

    const [products, setProducts] = React.useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

     // ---------- FUNCIÓN PARA CREAR PRODUCTOS EN LA DB ---------------   
    const postProducts = async (name, city, category, desc, descTitle, availability, price, address, feacturesIds, archivos, Authorization) => {
    try{    
        console.log("nombre: ", name);
        console.log("city: " ,city);
        console.log("category: " ,category);
        console.log("desc: " ,desc);
        console.log("descTitle: " ,descTitle);
        console.log("availability: " ,availability);
        console.log("price: " ,price);
        console.log("address: " ,address);
        console.log("feacturesIds: " ,feacturesIds);
        console.log("archivos: " ,archivos);
        console.log("Authorization: " ,Authorization);
        console.log("respuesta de la API: ", products);

        const responsePostProducts = await axios.post(`${baseUrl}/products/`, {
            name: name,
            cityId: city,             //numeros
            categoryId: category,     //numeros
            description: desc,
            descriptionTitle: descTitle,
            availability: availability,     //boolean
            price: price,           //string
            address: address,       //String   
            features: feacturesIds, 
            files: archivos           
        }, {
            headers: {
                "Authorization": Authorization,
                'content-type': 'multipart/form-data',
            },
        })
        return true
        console.log("responsePostProducts: ", responsePostProducts);
    }
    catch (error) {
        console.error('error en el llamado de la API postProducts', error.response)
        return true
    }
}

    // ---------- FUNCIÓN PARA OBTENER TODOS LOS PRODUCTOS DE LA DB --------------- 
    const getProducts = async (id) => {
    try {
        if(id){
            const responseGetProducts = await axios.get(`${baseUrl}/products/${id}`)
            //console.log("responseGetProducts: ", responseGetProducts);
            setProducts(responseGetProducts.data);

        }else {
            const responseGetProducts = await axios.get(`${baseUrl}/products/`)
            //console.log("responseGetProducts: ", responseGetProducts);
            setProducts(responseGetProducts.data);
        }

        }
    catch (error) {
        console.error('error', error)
    }
}
    // ---------- FUNCIÓN PARA OBTENER PRODUCTOS FILTRADOS POR CIUDAD DE LA DB --------
    const getProductsFilter = async (checkIn, checkOut) => {        
        try {
        if (checkIn != undefined) 
            {
            if (searchParams.get("categoryId") && searchParams.get("cityId")) {
                //console.log("categoria:",searchParams.get("categoryId"), " ciudad:", searchParams.get("cityId") );
                const responseGetProductsFilter = await axios.get(`${baseUrl}/products/?cityId=${searchParams.get("cityId")}&categoryId=${searchParams.get("categoryId")}&checkIn=${checkIn}&checkOut=${checkOut}`)
                console.log(`${baseUrl}/products/?cityId=${searchParams.get("cityId")}&categoryId=${searchParams.get("categoryId")}&checkIn=${checkIn}&checkOut=${checkOut}`);
                setProducts(responseGetProductsFilter.data)
            }
            else if ((searchParams.get("categoryId") == undefined || searchParams.get("categoryId") == null) && searchParams.get("cityId")) {
                const responseGetProductsFilter = await axios.get(`${baseUrl}/products/?cityId=${searchParams.get("cityId")}&checkIn=${checkIn}&checkOut=${checkOut}`)
                console.log(`${baseUrl}/products/?cityId=${searchParams.get("cityId")}&checkIn=${checkIn}&checkOut=${checkOut}`);
                setProducts(responseGetProductsFilter.data)
            }
            else if ((searchParams.get("cityId") == undefined || searchParams.get("cityId") == null) && searchParams.get("categoryId")) {
                const responseGetProductsFilter = await axios.get(`${baseUrl}/products/?categoryId=${searchParams.get("categoryId")}&checkIn=${checkIn}&checkOut=${checkOut}`)
                console.log(`${baseUrl}/products/?categoryId=${searchParams.get("categoryId")}&checkIn=${checkIn}&checkOut=${checkOut}`);
                setProducts(responseGetProductsFilter.data)
            }
            else {
                const responseGetProductsFilter = await axios.get(`${baseUrl}/products/?checkIn=${checkIn}&checkOut=${checkOut}`)
                console.log(`${baseUrl}/products/?checkIn=${checkIn}&checkOut=${checkOut}`);
                setProducts(responseGetProductsFilter.data)
            }
        }
        else {
            if (searchParams.get("categoryId") && searchParams.get("cityId")) {
                //console.log("categoria:",searchParams.get("categoryId"), " ciudad:", searchParams.get("cityId") );
                const responseGetProductsFilter = await axios.get(`${baseUrl}/products/?cityId=${searchParams.get("cityId")} & categoryId=${searchParams.get("categoryId")}`)
                console.log(`${baseUrl}/products/?cityId=${searchParams.get("cityId")} & categoryId=${searchParams.get("categoryId")}`);
                setProducts(responseGetProductsFilter.data)
            }
            else if ((searchParams.get("categoryId") == undefined || searchParams.get("categoryId") == null) && searchParams.get("cityId")) {
                const responseGetProductsFilter = await axios.get(`${baseUrl}/products/?cityId=${searchParams.get("cityId")}`)
                console.log(`${baseUrl}/products/?cityId=${searchParams.get("cityId")}`);
                setProducts(responseGetProductsFilter.data)
            }
            else if ((searchParams.get("cityId") == undefined || searchParams.get("cityId") == null) && searchParams.get("categoryId")) {
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
        }     
        catch (error) {
            console.error('error', error.response.data)
        }
    } 

    // ---------- ESTE ES EL RETURN DE LA API ---------------------------
return {
    products: products,
    setProducts: setProducts,
    getProducts: getProducts,
    getProductsFilter: getProductsFilter,
    postProducts: postProducts,
    }
}