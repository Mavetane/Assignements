import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://ac88a44a6935711e982b602f197ebe6f-1529281652.eu-west-2.elb.amazonaws.com/person/'
});
export default instance;