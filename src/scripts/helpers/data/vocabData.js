// API CALLS FOR BOOKS
import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// import { getSingleCategory } from './categoryData';

const dbUrl = firebaseConfig.databaseURL;

// GET VOCAB
const getVocab = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET FILTERED VOCAB
const getFilteredVocab = (userId, category) => new Promise((resolve, reject) => {
  getVocab(userId)
    .then((filteredVocabArray) => {
      const filteredVocab = filteredVocabArray.filter((vocab) => vocab.category === category);
      resolve(filteredVocab);
    }).catch(reject);
});

// GET SEARCHED VOCAB
const getSearchedVocab = (userId, string) => new Promise((resolve, reject) => {
  getVocab(userId)
    .then((filteredVocabArray) => {
      const filteredVocab = filteredVocabArray.filter((vocab) => vocab.category.toLowerCase().includes(string) || vocab.title.toLowerCase().includes(string) || vocab.definition.toLowerCase().includes(string));
      resolve(filteredVocab);
    }).catch(reject);
});

// GET SINGLE VOCAB
const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// CREATE VOCAB
const createVocab = (vocabObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocab.json`, vocabObj)
    .then((response) => {
      const body = {
        firebaseKey: response.data.name,
      };
      axios.patch(`${dbUrl}/vocab/${response.data.name}.json`, body)
        .then(() => {
          getVocab(vocabObj.uid).then(resolve);
        });
    }).catch((error) => reject(error));
});

// UPDATE VOCAB
const updateVocab = (vocabObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocab/${vocabObj.firebaseKey}.json`, vocabObj)
    .then(() => getVocab(vocabObj.uid).then(resolve))
    .catch(reject);
});

// DELETE VOCAB
const deleteVocab = (userId, firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then(() => {
      getVocab(userId).then(resolve);
    })
    .catch(reject);
});

export {
  getVocab,
  getSingleVocab,
  createVocab,
  updateVocab,
  deleteVocab,
  getFilteredVocab,
  getSearchedVocab
};
