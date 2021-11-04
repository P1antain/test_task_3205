import axios from "axios";
//import {useAppSelector} from "../../Redux/hooks";

//const currentValue = useAppSelector((state)=> state.default.language.currency)
//
// let item = ''
// if(currentValue === 'USD'){
//   item = 'EUR,CNY,RUB'
// } else{
//   item  = 'EUR,USD,EUR'
// }

export const instance = axios.create({
  baseURL: "https://freecurrencyapi.net/api/v2",
});

export const YOUR_ACCESS_KEY = "143c5c20-3d55-11ec-a0b7-770eb5c13def";

// export const getCurrency = {
//   currency() {
//     return instance
//       .get(`/latest?access_key=${YOUR_ACCESS_KEY}&base=${currentValue}&symbols=${item}`)
//       .then((res) => res.data);
//   },
// };
