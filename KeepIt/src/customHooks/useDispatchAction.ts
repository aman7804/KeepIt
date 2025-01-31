import { ActionMethod } from "../App";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/root/root.store";
import { Action } from "redux";
// Custom hook
const useDispatchAction = () => {
  const dispatch: AppDispatch = useDispatch();

  const dispatchAction = <T extends string,  P>(
    actionMethod: () => ActionMethod<T, P>
  ) =>
    dispatch(actionMethod());

  return dispatchAction;
};

export { useDispatchAction };
