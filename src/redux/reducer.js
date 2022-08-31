import * as types from "./actionType";
const initialState = {
  nft: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_NFT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_NFT_SUCCESS:
      return {
        ...state,
        nft: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_NFT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
