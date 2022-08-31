import React, { useState } from 'react'
import "./cards.css";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getData } from '../redux/action';

export const Cards = ({data}) => {
    const [check, setcheck] = useState(data.Cart_quantity);
    const dispatch=useDispatch()

    function buy(){
        axios
          .patch(`https://shrouded-mesa-85630.herokuapp.com/nft/${data.id}`, {
            Cart_quantity: 1,
          })
          .then((r) => console.log(r))
          .then((e) => console.log(e));
          dispatch(getData());
          setcheck(1);
        }
  
  console.log(data.Cart_quantity);
  return (
    <div className="cards">
      <div className="card-img">
        <img src={data.url} alt="" />
      </div>
      <div className="card-text">
        <div className="name">{data.name}</div>
        <div className="owner">
          <div className="owner-info">
            <img src={data.owner_pic} alt="" />
            <div className="owned-by">
              <p>Owned by</p>
              <p>{data.owned_by}</p>
            </div>
          </div>
        </div>
        <div className="button-price">
          {check === 0? (
            <button
              onClick={() => {
                buy();
                setcheck(1);
              }}
            >
              Buy
            </button>
          ) : (
            ""
          )}
          <p>
            {data.price} <CurrencyBitcoinIcon />
          </p>
        </div>
      </div>
    </div>
  );
}
