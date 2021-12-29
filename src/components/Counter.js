import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";
import { bindActionCreators } from "redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementBy1Handler = () => {
    dispatch(counterActions.incrementby1());
  };
  const decrementBy1Handler = () => {
    dispatch(counterActions.decrementby1());
  };
  const incrementBy2Handler = () => {
    dispatch(counterActions.increase(2));
  };
  const decrementBy2Handler = () => {
    dispatch(counterActions.decrease(2));
  };
  const incrementBy5Handler = () => {
    dispatch(counterActions.increase(5));
  };
  const decrementBy5Handler = () => {
    dispatch(counterActions.decrease(5));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter} --</div>}
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
