import React from "react";
import { YOUR_ACCESS_KEY, instance } from "../utils/Axios";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Currency.module.css";
import { getCurrencyReduce, getItem } from "../../Redux/Reducer/defaultReducer";
enum CurrencyVal {
  USD = "USD",
  RUB = "RUB",
  EUR = "EUR",
}

interface IFormInput {
  currency: CurrencyVal;
}

interface ValueMap {
  name: string;
  price: string;
}

export const Currency: React.FC = () => {
  //use-hook-form
  const { register, handleSubmit } = useForm<IFormInput>();
  // Redux
  const currentValue = useAppSelector(
    (state) => state.default.language.currency
  );
  const language = useAppSelector((state) => state.default.language.lang);
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(getCurrencyReduce(data.currency));
  };

  async function getCurrency() {
    let data = await instance
      .get(`/latest?apikey=${YOUR_ACCESS_KEY}&base_currency=${currentValue}`)
      .then((res) => res.data.data)
      .catch((res) => res);
    const result = Object.entries(data).map(([name, price]) => {
      return {
        name,
        price,
      };
    });
    dispatch(getItem(result));
  }
  React.useEffect(() => {
    getCurrency();
  }, [currentValue]);
  const item = useAppSelector((state) => state.default.item);

  let message = "";
  let messageName = "";
  let messagePrice = "";
  let messageInfo = "";
  let messageBtn = "";
  if (language === "en") {
    message = "Request your currency";
    messageName = "Currency";
    messagePrice = "Price";
    messageInfo = "Price for";
    messageBtn = "Request";
  } else if (language === "ru") {
    message = "Запросить цену";
    messageName = "Валюта";
    messagePrice = "Цена";
    messageInfo = "Цена за ";
    messageBtn = "Запросить";
  }
  return (
    <>
      <div className={styles.block}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label>{message}</label>
          <div className={styles.wrapper}>
            <select {...register("currency")} className={styles.select}>
              <option value="USD">USD</option>
              <option value="RUB">RUB</option>
              <option value="EUR">EUR</option>
            </select>
            <input type="submit" value={messageBtn} className={styles.btn} />
          </div>
        </form>
        <h2 className={styles.header}>
          {messageInfo} 1 {currentValue}
        </h2>
        <ul className={styles.items}>
          <div className={styles.item}>
            <span className={styles.span}>{messageName}:</span>
            <span className={styles.span}>{messagePrice}:</span>
          </div>
          {item.slice(0, 10).map((v, index) => {
            return (
              <li key={index} className={styles.item}>
                <span className={styles.span}>{v.name}</span>{" "}
                <span className={styles.span}>{v.price}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
