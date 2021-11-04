import React from "react";
import "./App.css";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import { Main } from "../Main/Main";
import { Currency } from "../Currency/Currency";
import { Layout } from "../Layout/Layout";
import {
  getCurrencyReduce,
  getLanguageReduce,
} from "../../Redux/Reducer/defaultReducer";
import { useAppDispatch } from "../../Redux/hooks";

const App: React.FC = () => {
  const location = useLocation()
  const history = useHistory()
  React.useEffect(()=>{
      history.push('/')

  },[])
  const dispatch = useAppDispatch();
  function initialLanguage() {
    let userLang = navigator.language.slice(0, 2).toLowerCase();
    dispatch(getLanguageReduce(userLang));
    let currency = "";
    if (userLang === "en") {
      currency = "USD";
      dispatch(getCurrencyReduce(currency));
    } else if (userLang === "ru") {
      currency = "RUB";
      dispatch(getCurrencyReduce(currency));
    }
  }
  React.useEffect(() => {
    initialLanguage();
  }, []);

  return (
    <>
      <Layout>
        <Switch>
          <Route exact path={"/"} component={Main} />
          <Route path={"/currency"} component={Currency} />
        </Switch>
      </Layout>
    </>
  );
};

export default App;
