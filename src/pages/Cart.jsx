import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../components/Navbar';
import { getData } from '../redux/action';
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import "./cart.css"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";

export const Cart = () => {
         const [total, setTotal] = useState(0);
        
     

         const dispatch=useDispatch();
         const nft = useSelector((state) => state.AppReducer.nft);
        
         useEffect(() => {
           dispatch(getData());
         },[]);

         useEffect(()=>{
             var t=0;
             nft.map((el)=>{
                   let temp = el.Cart_quantity * el.price;
                   temp.toFixed(2);
                   t=t+temp;
             })
            setTotal(t);
         },[dispatch,nft])
 

          async function inc(id,count) {
             await axios
               .patch(`https://shrouded-mesa-85630.herokuapp.com/nft/${id}`, {
                 Cart_quantity: count + 1,
               })
               .then((r) => console.log(r))
               .then((e) => console.log(e));
             dispatch(getData());
           }

         async  function  dec(id, count) {
            await axios
              .patch(`https://shrouded-mesa-85630.herokuapp.com/nft/${id}`, {
                Cart_quantity: count - 1,
              })
              .then((r) => console.log(r))
              .then((e) => console.log(e));
             dispatch(getData());
           }

                async function close(id) {
                  await axios
                    .patch(
                      `https://shrouded-mesa-85630.herokuapp.com/nft/${id}`,
                      {
                        Cart_quantity: 0,
                      }
                    )
                    .then((r) => console.log(r))
                    .then((e) => console.log(e));
                  dispatch(getData());
                }
         var flag = 0;
  return (
    <div className="main-cart">
      <div className="nav">
        <Navbar />
      </div>

      <div className="nfts">
        <div className="cart-icon" style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
          <ShoppingCartIcon
            style={{ fontSize: "80px", marginBottom: "40px" }}
          />
          <p>Max quantity of a single item : 6</p>
        </div>
        {nft.map((el) => {
          if (el.Cart_quantity > 0) {
            flag = 1;
            return (
              <div key={el.id} className="cart">
                <div className="cart-info">
                  <img src={el.url} alt="" />
                  <p>{el.name}</p>
                </div>
                <div className="cart-btn">
                  <button
                    disabled={el.Cart_quantity > 5}
                    onClick={() => inc(el.id, el.Cart_quantity)}
                  >
                    +
                  </button>

                  <button
                    disabled={el.Cart_quantity < 1}
                    onClick={() => dec(el.id, el.Cart_quantity)}
                  >
                    -
                  </button>
                </div>
                <div>qtn:{el.Cart_quantity}</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  item-total:{(el.Cart_quantity * el.price).toFixed(2)}
                  <CurrencyBitcoinIcon />
                </div>
                <div className="close-icon">
                  <CloseIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => close(el.id)}
                  />
                </div>
              </div>
            );
          }
        })}
        {flag === 0 ? <h1>Cart is empty</h1> : ""}
      </div>
      {flag !== 0 ? (
        <div>
          <h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            Total: {total.toFixed(2)}
            <CurrencyBitcoinIcon style={{fontSize:"35px"}} />
          </h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
