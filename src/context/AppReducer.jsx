import { FILTER_LOCATION, FILTER_SEARCH, FULLTIME_CHECK } from "./caseTypes"

export const reducer = (state, {type, payload}) => {
    switch (type) {
        case FILTER_SEARCH:
            return { ...state, filterByTitle: payload }
        case FILTER_LOCATION: 
            return { ...state, filterByLocation: payload }
     default:
        break;
    }
}

