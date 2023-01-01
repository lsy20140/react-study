import React, {useState} from 'react'
import useProducts from '../../hooks/use-products';

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({salesOnly: checked});
  const handleChange = () => {
    setChecked((prev) => !prev);
  }



  if(loading){
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
