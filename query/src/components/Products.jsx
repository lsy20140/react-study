import React, {useState} from 'react'
import {useQuery} from '@tanstack/react-query';

export default function Products() {
  const [checked, setChecked] = useState(false);
  const {
    isLoading, 
    error, 
    data: products,
  } = useQuery(['products', checked], async ()=> {
    console.log("fetching...");
    return fetch(`data/${checked? 'sale_' : ''}products.json`)
    .then(res => res.json()
    );
  },{
    staleTime: 1000 * 60 * 5, 
  })
  const handleChange = () => {
    setChecked((prev) => !prev);
  }

  if(isLoading){
    return <div>loading 중~!</div>
  }

  if(error){
    return <div>{error}</div>
  }


  return (
    <>
    <input id='checkbox' type='checkbox' value={checked} onClick={handleChange}></input>
    <label htmlFor='checkbox'>세일 상품 보기</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>

  );
}
