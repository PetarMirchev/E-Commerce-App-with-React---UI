import React from 'react';
import './List.scss';
import Card from '../Card/Card';


const data = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1556347961-f9521a88cb8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      img2: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: "Long T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      img2: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: "Long T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      img2: 'https://images.unsplash.com/photo-1627225924765-552d49cf47ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: "Long T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1556347961-f9521a88cb8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      img2: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: "Long T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      img2: 'https://images.unsplash.com/photo-1627225924765-552d49cf47ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: "Long T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
]


// call CARD & pass new data to be rendered
const List = () => {
  return (
    <div className='list'>
        {data.map( item => (
        <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List;