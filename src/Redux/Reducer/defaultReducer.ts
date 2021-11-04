import { createSlice } from "@reduxjs/toolkit";

interface Item {
  name: string;
  price: string;
}
export interface DefaultState {
  language: {
    lang: string;
    currency: string;
  };
  item: Item[];
  searching: {
    count: string;
    value: object[];
    result: object[];
  };
}

const initialState: DefaultState = {
  language: {
    lang: "",
    currency: "",
  },
  item: [],
  searching: {
    count: "",
    value: [],
    result: [],
  },
};

export const defaultReducer = createSlice({
  name: "Default",
  initialState,
  reducers: {
    getLanguageReduce(state, action) {
      return {
        ...state,
        language: { ...state.language, lang: action.payload },
      };
    },
    getCurrencyReduce(state, action) {
      return {
        ...state,
        language: { ...state.language, currency: action.payload },
      };
    },
    getItem(state, action) {
      return {
        ...state,
        item: [...action.payload],
      };
    },
    getCount(state, action) {
      return {
        ...state,
        searching: { ...state.searching, count: action.payload },
      };
    },
    getValue(state, action) {
      return {
        ...state,
        searching: { ...state.searching, value: [...action.payload] },
      };
    },
    getSearchResult(state, action) {
      return {
        ...state,
        searching: { ...state.searching, result: [...action.payload] },
      };
    },
  },
});

export const {
  getLanguageReduce,
  getCurrencyReduce,
  getItem,
  getValue,
  getCount,
  getSearchResult,
} = defaultReducer.actions;

export default defaultReducer.reducer;
