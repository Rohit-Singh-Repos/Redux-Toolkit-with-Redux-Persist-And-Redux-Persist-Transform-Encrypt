import { API_CALLS } from "../_commonApiCall/api";
import { API_STATUSES } from "../_helpers/statuses";
import * as COMMON_REDUCER_ACTIONS from "../_commonReducers/common.reducers";

const getAllProductsDataServices = () => {
    return async function getAllProductsData(dispatch){
        dispatch(COMMON_REDUCER_ACTIONS.getAllProductsStatusAction(API_STATUSES.REQUEST))
        try {
            const response = await API_CALLS.fetchAllProductsApiCall();
            dispatch(COMMON_REDUCER_ACTIONS.getAllProductsDataAction(response.data))
            dispatch(COMMON_REDUCER_ACTIONS.getAllProductsStatusAction(API_STATUSES.SUCCESS))
        } catch (error) {
            dispatch(COMMON_REDUCER_ACTIONS.getAllProductsStatusAction(error))
        }
    }
}

export const COMMON_SERVICES = {
    getAllProductsDataServices
}