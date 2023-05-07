import axios from 'axios'

const BRAND_API_URL = process.env.REACT_APP_CHALLENGER_URL + "/api/storage/brand"
class BrandService {

    getBrands() {
        return axios.get(BRAND_API_URL);
    }
}

export default new BrandService();