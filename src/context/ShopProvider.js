import React, { useEffect, useState } from 'react'
import Client from 'shopify-buy'
import Shop from '../pages/Shop'

const client = Client.buildClient({
    storefrontAccessToken: process.env.REACT_APP_ACCESS_TOKEN,
    domain: 'react-practcal.myshopify.com'
})

const ShopProvider = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetchAllProducts()
    }, [])

    const fetchAllProducts = async () => {
        await client.product.fetchAll()
        .then(products => {
            setProducts(products)
        })
        console.log('working')
    }

    return (
       <Shop products={products} />
    )
}

export default ShopProvider
