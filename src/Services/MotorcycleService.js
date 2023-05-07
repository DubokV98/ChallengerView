import axios from 'axios'

const MOTORCYCLE_API_URL = process.env.REACT_APP_CHALLENGER_URL + "/api/storage/motorcycle"

class MotorcycleService {

    getMotorcycles() {
        return axios.get(MOTORCYCLE_API_URL + "/find-all");
    }

    getMotorcyclesByBrandId(brandId) {
        return axios.get(MOTORCYCLE_API_URL + "/find-all-by-brand-id", {params: {brandId: brandId}});
    }

    //Check it 
    // async getMotorcycles() {
    //     return await fetch(MOTORCYCLE_API_URL)
    //     // return axios.get(PURPOSE_API_URL);
    // }
}

export default new MotorcycleService();