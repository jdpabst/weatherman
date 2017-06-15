import { createStore } from "redux";
import promiseMiddleware from 'redux-promise-middleware';
import { applyMiddleware } from 'redux';
import weather from "./ducks/weather";

export default createStore( weather, null, applyMiddleware( promiseMiddleware() ));
