
import React from 'react'
import { ProductsCard } from '../ProductsCard/ProductsCard'
import OffcanvasTitle from 'react-bootstrap/esm/OffcanvasTitle'
import { products } from '../../ProductsData'
export const Products = () => {
 
  return (
    <div>
        { products.map((Product)=>{
            return <ProductsCard data={Product}></ProductsCard>
        })}
        
        
        
        
        
        
    </div>
  )
}

