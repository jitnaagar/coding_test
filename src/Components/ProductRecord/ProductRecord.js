import React, { useCallback, useEffect, useState } from 'react'
import ProductTable from '../ProductTable/ProductTable'
import AddProduct from '../Product/AddProduct'

function ProductRecord() {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [products, setProducts] = useState([])
    const [productId, setProductId] = useState('')

    const handleDeleteId = e => {
        delete products[e]
        const results = products.filter(element => element !== '');
        console.log("delete::::::::::",results)
        setProducts(results);
        setProductId(e)
    }
    const getProducts = useCallback((newValue='')=> {
        setLoading(true)
        var data = [];
        console.log("products::::::::::::::",Object.keys(products).length)
        if(Object.keys(products).length>0){
            data = products;
        }else{
            data = [{product: 'water', type: 'drinks', quantity: 10, unitPrice: 1},
                {product: 'chicken wings', type: 'food', quantity: 3, unitPrice: 5},
                {product: 'steak', type: 'food', quantity: 1, unitPrice: 9},
                {product: 'coffee', type: 'drinks', quantity: 4, unitPrice: 2},
                {product: 'wine bottle', type: 'drinks', quantity: 1, unitPrice: 7}]
        }
        if(newValue){
            data.push(newValue)
        }
        console.log("Product data ::::::::::",data)
        setLoading(false)
        setProducts(data);
    },[products])

    useEffect(()=>{
        getProducts()
    },[getProducts])

    

    return (
        <>
            <ProductTable 
                setOpen={setOpen}
                loading={loading}
                products={products}
                handleDeleteId={handleDeleteId}
            />
            <AddProduct
                open={open}
                id={productId}
                setOpen={setOpen}
                getProducts={getProducts}
            />
        </>
    )
}

export default ProductRecord