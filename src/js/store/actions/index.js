// src/js/actions/index.js
import { LOGGING_IN } from "../constants/action-types";
export function logIn(payload) {
    console.log('stored')
    return { type: LOGGING_IN, payload };
}
