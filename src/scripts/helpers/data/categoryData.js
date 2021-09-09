// API CALLS FOR BOOKS
import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET CATEGORIES
const getCategories = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/category.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET SINGLE CATEGORY
const getSingleCategory = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/category/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export { getCategories, getSingleCategory };
