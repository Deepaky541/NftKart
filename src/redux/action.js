import axios from "axios";
import * as types from "./actionType";

 export const getData =  () => async (dispatch) => {
  dispatch({ type: types.GET_NFT_REQUEST });
  await axios
    .get(`https://shrouded-mesa-85630.herokuapp.com/nft`)
    .then((r) => dispatch({ type: types.GET_NFT_SUCCESS, payload: r.data }))
    .then((e) => dispatch({ type: types.GET_NFT_FAILURE }));
};


