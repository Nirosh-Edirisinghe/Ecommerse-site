import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShowContext';

const Product = () => {
  const {productId} = useParams();
  const {products} = useContext(ShopContext);
  const [productData, setProdductData] = useState(false);

  const fetchProdctData = async ()=>{
    products.map((item)=>{
      if (item._id === productId){
        setProdductData(item)
        console.log(item);
        
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProdctData();
  },[productId,products])


  return (
    <div>
      
    </div>
  )
}

export default Product
