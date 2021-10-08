import thunk from "redux-thunk";
import checker from "./checker";
import {applyMiddleware} from "redux";
import logger from "./logger";


export default applyMiddleware (
    thunk, checker, logger
)