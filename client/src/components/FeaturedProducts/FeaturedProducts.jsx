import React from 'react';
import './FeaturedProducts.scss';
import Card from '../Card/Card';


const data = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    img2: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: "Long T-shirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    img2: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: "Long T-shirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    img2: 'https://images.unsplash.com/photo-1627225924765-552d49cf47ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: "Long T-shirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: "Long T-shirt",
    isNew: false,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: "Long T-shirt",
    isNew: false,
    oldPrice: 19,
    price: 12,
  },
]


const FeaturedProducts = ({type}) => {
  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Reprehenderit blanditiis rem eveniet distinctio consequatur 
          dignissimos ipsam mollitia obcaecati eum ullam odio voluptate 
          voluptatibus consectetur at nulla, quo, iusto molestias. Quod!
        </p>
      </div>
      <div className="bottom">
         {data.map(item => (
          <Card item={item} key={item.id}/>
         ))}
      </div>
    </div>
  )
}

export default FeaturedProducts;

