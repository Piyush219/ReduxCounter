import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementBy1Handler = () => {
    dispatch({ type: "incrementby1" });
  };
  const decrementBy1Handler = () => {
    dispatch({ type: "decrementby1" });
  };
  const incrementBy2Handler = () => {
    dispatch({ type: "incrementby2" });
  };
  const decrementBy2Handler = () => {
    dispatch({ type: "decrementby2" });
  };
  const incrementBy5Handler = () => {
    dispatch({ type: "incrementby5" });
  };
  const decrementBy5Handler = () => {
    dispatch({ type: "decrementby5" });
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <div>
      <button onClick={incrementBy1Handler}>IncrementBy1</button>
        <button onClick={decrementBy1Handler}>DecrementBy1</button>
        <button onClick={incrementBy2Handler}>Incrementby2</button>
        <button onClick={decrementBy2Handler}>Decrementby2</button>
        <button onClick={incrementBy5Handler}>Incrementby5</button>
        <button onClick={decrementBy5Handler}>Decrementby5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
