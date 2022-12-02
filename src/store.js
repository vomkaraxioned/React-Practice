import {createStore} from "redux";
import changeValue from "./reducer/changeValueReducer";

const value = createStore(changeValue);

return value;