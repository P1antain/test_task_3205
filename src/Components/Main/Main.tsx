import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Main.module.css";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  getCount,
  getItem,
  getSearchResult,
  getValue,
} from "../../Redux/Reducer/defaultReducer";
import { instance, YOUR_ACCESS_KEY } from "../utils/Axios";

type Inputs = {
  search: string;
  count: string | undefined;
  value: RegExpMatchArray | null;
};

export const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    let result = data.search.toUpperCase();
    let regNumber = /\d/g || [];
    let regCurrency = /[A-Z]{3}/gi;
    let count = result?.match(regNumber)?.join("");
    const value = result.match(regCurrency);
    dispatch(getCount(count));
    dispatch(getValue(value));
  };

  const count: any = useAppSelector((state) => state.default.searching.count);
  const value: any = useAppSelector((state) => state.default.searching.value);
  const search: any = useAppSelector((state) => state.default.searching.result);
  const language = useAppSelector((state) => state.default.language.lang);

  async function getCurrency() {
    let data = await instance
      .get(`/latest?apikey=${YOUR_ACCESS_KEY}&base_currency=${value[0]}`)
      .then((res) => res.data.data);
    const result = Object.entries(data).map(([name, price]) => {
      return {
        name,
        price,
      };
    });
    let search = result.filter((e) => {
      return e.name.includes(value[1]);
    });
    dispatch(getSearchResult(search));
  }
  React.useEffect(() => {
    getCurrency();
  }, [value]);

  let hello = "";
  if (language === "en") {
    hello = "Search again";
  } else if (language === "ru") {
    hello = "Повторите поиск";
  }
  return (
    <div className={styles.block}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.wrapper}>
          <input
            defaultValue="15 usd in rub"
            {...register("search", { required: true })}
            className={styles.input}
          />
          <button className={styles.btn}>Seach</button>
        </div>
        {errors.search && (
          <span className={styles.err}>This field is required</span>
        )}
      </form>

      {search.length !== 0 ? (
        <ul className={styles.lists}>
          <h2>
            {count} {value[0]} ={" "}
          </h2>
          {search.map(
            (
              i: { name: React.ReactNode; price: number },
              index: string | number | null | undefined
            ) => {
              return (
                <li key={index} className={styles.list}>
                  <span>{Math.floor(i.price * count * 100) / 100}</span>
                  <span>{i.name}</span>
                </li>
              );
            }
          )}
        </ul>
      ) : (
        <>
          {count !== "" && (
            <>
              <h2 className={styles.noSearch}>{hello}</h2>
            </>
          )}
        </>
      )}
    </div>
  );
};
