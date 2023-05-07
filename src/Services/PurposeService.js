import axios from 'axios'

const PURPOSE_API_URL = process.env.REACT_APP_CHALLENGER_URL + "/api/storage/purpose"

class PurposeService {

    getPurposes() {
        return axios.get(PURPOSE_API_URL);
    }

    createPurpose(purpose) {
        return axios.post(PURPOSE_API_URL, purpose);
    }

    updatePurpose(purpose) {
        return axios.put(PURPOSE_API_URL, purpose)
    }

    getPurposeById(id) {
        return axios.get(PURPOSE_API_URL  +'/' + id);
    }

    deletePurpose(id) {
        return axios.delete(PURPOSE_API_URL + '/' + id)
    }
}

export default new PurposeService();