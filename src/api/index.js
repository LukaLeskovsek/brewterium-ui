import axios from 'axios';
var axiosInstance = axios.create({
    baseURL: 'http://localhost:9000',
    /* other custom settings */
  });
export default {
    warehouse : {
        list : (filter = {}) => {
            return axiosInstance.get('warehouse/list', filter);
        }
    }
}