import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLocalStorageCounter } from "./redux/_commonReducers/persistedLocalStorage.reducers";
import { changeSessionStorageCounter } from "./redux/_commonReducers/persistedSessionStorage.reducers";
import { COMMON_SERVICES } from "./redux/_commonServices/common.services";


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(COMMON_SERVICES.getAllProductsDataServices());
  }, []);
  const { allProductsData, allProductsDataStatus } =
    useSelector((state) => state.commonReducers) || [];
  const { localStorageCounterState } =
    useSelector((state) => state.localStorageReducer) || [];
  const { sessionStorageCounterState } =
    useSelector((state) => state.sessionStorageReducer) || [];

  if (allProductsDataStatus === "request") {
    return <h3>Loading...</h3>;
  }
  return (
    <div className="container">
      <h3 className="text-center">List of Available Products</h3>
      <div className="row">
        {allProductsData &&
        allProductsData?.products &&
        allProductsData?.products.length !== 0 ? (
          allProductsData?.products.map((item) => (
            <div className="col-lg-4">
              <div
                key={item.id}
                className="card mb-3 me-3"
                style={{ width: "18rem", height: "400px" }}
              >
                <img src={item.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}

        <div className="d-flex justify-content-between">
          <div>
            <h2>Local Storage Data : {localStorageCounterState}</h2>
            <button className="btn btn-primary" onClick={() => dispatch(changeLocalStorageCounter(localStorageCounterState + 1))}>Increment</button>
          </div>
          <div>
            <h2>Session Storage Data : {sessionStorageCounterState}</h2>
            <button className="btn btn-primary" onClick={() => dispatch(changeSessionStorageCounter(sessionStorageCounterState + 1))}>Increment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
