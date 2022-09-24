
import axios from "axios";
import { appConfig } from "../../config/config";

const fetchAllProductsApiCall = () => axios(`${appConfig.baseUrl}/products?limit=3`)

export const API_CALLS = {
    fetchAllProductsApiCall
}