import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Cards } from '../components/Cards';
import { Navbar } from '../components/Navbar'
import { getData } from '../redux/action';
import "./Products.css"
import FlashOnIcon from "@mui/icons-material/FlashOn";

export const Products = () => {
     const dispatch = useDispatch();
     const nft = useSelector((state) => state.AppReducer.nft);
     useEffect(() => {
      dispatch(getData());
     }, [dispatch])
     
     console.log(nft);
  return (
    <div className="products">
      <div className="collection">
        <h1>Top collections</h1> <FlashOnIcon style={{fontSize:"60px"}} />
      </div>
      <div className="card">
        {nft?.map((el) => (
          <Cards key={el.id} data={el} />
        ))}
      </div>
    </div>
  );
}
