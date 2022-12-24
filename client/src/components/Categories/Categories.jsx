import React from 'react';
import './Categories.scss';
import {Link} from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <button>
                    <Link className='link' to='/products/1'>Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <button>
                        <Link className='link' to='/products/1'>Women</Link>
                    </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://images.unsplash.com/photo-1578939662863-5cd416d45a69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1107&q=80" alt="" />
                    <button>
                        <Link className='link' to='/products/1'>New Season</Link>
                    </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                        <button>
                            <Link className='link' to='/products/1'>Men</Link>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                            <button>
                                <Link className='link' to='/products/1'>Accessories</Link>
                            </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://images.unsplash.com/photo-1628413993904-94ecb60f1239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
                    <button>
                        <Link className='link' to='/products/1'>Shoes</Link>
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Categories;