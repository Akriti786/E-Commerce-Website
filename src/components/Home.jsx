import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import HomeProducts from './HomeProducts';
import { AiFillEye } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

const Home = () => {

  const [trendingProduct, setTrendingProduct] = useState(HomeProducts);

  //FILTER FOR TRENDING PRODUCTS
  const filtercate = (x) =>
  {
    const filterproduct = HomeProducts.filter((curElm) =>
    {
      return curElm.type === x
    })
    setTrendingProduct(filterproduct)
  }

//ALL TRENDING PRODUCTS
const allTrendingProduct = () =>
{
  setTrendingProduct(HomeProducts)
}

  return (
    <>
      <div className='home'>
        <div className='top_banner'>
          <div className='content'>
            <h3>Samsung Galaxy S8</h3>
            <h2>Samsung Phone</h2>
            <p>30% off on your first order</p>
            <Link to='/shop' className='link'>Shop Now</Link>
          </div>
        </div>
        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='headers'>
                <div className='heading'>
                  <h2 onClick={()=> allTrendingProduct ()}>trending product</h2>
                </div>
                <div className='cate'>
                  <h3 onClick={() => filtercate ('new')} >New</h3>
                  <h3 onClick={() => filtercate ('featured')}>Featured</h3>
                  <h3 onClick={() => filtercate ('top')}>Top Selling</h3>
                </div>
              </div>
              <div className='products'>
                <div className='container'>
                  {
                    trendingProduct.map((curElm) => {
                      return(
                        <>
                          <div className='box'>
                            <div className='img_box'>
                              <img src={curElm.image} alt={curElm.Name}></img>
                              <div className='icon'>
                                <div className='icon_box'>
                                  <AiFillEye />
                                </div>
                                  <div className='icon_box'>
                                  <AiFillHeart />
                                </div>
                              </div>
                            </div>
                            <div className='info'>
                              <h3>{curElm.Name}</h3>
                              <p>INR.{curElm.price}</p>
                              <button className='btn'>Add to cart</button>
                            </div>
                          </div>
                        </>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className='right_box'></div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home
