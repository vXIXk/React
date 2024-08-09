import queryString from "query-string";
import { BASE_URL } from "../assets/constants";

export const loadUsers = options => {
    const defaultOptions = {
        page: 1,
        results: 10,
        gender: "",
        // seed: "seed",
        inc: ["login", "name", "gender", "dob", "nat", "picture"],
    };
    const resultsOptions = {
        ...defaultOptions,
        ...options,
    };

    return fetch(
        `${BASE_URL}?${queryString.stringify(resultsOptions, {
            arrayFormat: "comma",
        })}`,
    ).then(response => response.json());
};
