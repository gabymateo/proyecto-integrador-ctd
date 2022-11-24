import React from 'react'
import axios from 'axios'

const baseUrl = 'http://34.201.99.165:8080/grupo5'

// -----------------  ESTA ES LA API DE RESERVAS---------------------
export function useBookingsApi() {
    const [bookings, setBookings] = React.useState([]);

     // ---------- FUNCIÓN PARA CREAR RESERVAS EN LA DB ---------------   
    const postBookings = async (productId, userId, guestName, guestLastName, guestEmail, guestCity, startHour, startDate, endDate, Authorization) => {
    try{    
        const responsePostBookings = await axios.post(`${baseUrl}/bookings/`, {
            productId:productId,
            userId:userId,
            guestName:guestName,
            guestLastName:guestLastName,
            guestEmail:guestEmail,
            guestCity:guestCity,
            startHour:startHour,
            startDate:startDate,
            endDate:endDate,
        }, {
            headers: {
                "Authorization": Authorization,
            },
        })
        console.log("responsePostBookings: ", responsePostBookings);
    }
    catch (error) {
        console.error('error', error.response.data)
    }
}

// ---------- FUNCIÓN PARA OBTENER LAS RESERVAS DE LA DB --------------- 
const getBookings = async () => {
    try {
        const responseGetBookings = await axios.get(`${baseUrl}/bookings/`)
        //console.log("responseGetCategories: ", responseGetCategories);
        setBookings(responseGetBookings.data);
    }
    catch (error) {
        console.error('error', error.response.data)
    }
}

// ---------- FUNCIÓN PARA OBTENER LAS RESERVAS POR ID DE LA DB --------------- 
const getBookingsById = async (id) => {
    try {
        const responseGetBookingsById = await axios.get(`${baseUrl}/bookings/${id}`)
        //console.log("responseGetCategories: ", responseGetCategories);
        setBookings(responseGetBookingsById.data);
    }
    catch (error) {
        console.error('error', error.response.data)
    }
}

//------------------- OBTENER LAS RESERVAS DE UN PRODUCTO POR ID ------------

const getBookingByProductId = async (productId) => {
        try {
            const response = await axios.get(`${baseUrl}/bookings/products/${productId}`);

        } catch (error) {
            console.log(error);
        }
}
    // ---------- ESTE ES EL RETURN DE LA API ---------------------------
return {
    bookings: bookings.data,
    postBookings: postBookings,
    getBookings: getBookings,
    getBookingsById:getBookingsById,
    }


}