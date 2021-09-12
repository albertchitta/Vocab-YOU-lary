import addVocabForm from '../components/forms/addVocabForm';
import { sortByName, sortNewestToOldest, sortOldestToNewest } from '../components/sort';
import { showVocab } from '../components/vocab';
import {
  createVocab,
  getSingleVocab,
  updateVocab,
  deleteVocab,
  getFilteredVocab,
  getVocab
} from '../helpers/data/vocabData';
import { getDate, getTime, getUTCTime } from '../helpers/date';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR SUBMITTING A FORM TO ADD A VOCAB
    if (e.target.id === ('submit-vocab')) {
      e.preventDefault();
      const vocabObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        time: `${getDate()} @ ${getTime()}`,
        utcTime: getUTCTime(),
        uid
      };

      createVocab(vocabObject).then(showVocab);
    }

    // CLICK EVENT FOR EDITING/UPDATING A VOCAB
    if (e.target.id.includes('edit')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObject) => addVocabForm(vocabObject));
    }
    if (e.target.id.includes('update-vocab')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const vocabObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        time: `${getDate()} @ ${getTime()}`,
        utcTime: getUTCTime(),
        firebaseKey,
        uid
      };

      updateVocab(vocabObject).then(showVocab);
    }

    // CLICK EVENT FOR DELETING A VOCAB
    if (e.target.id.includes('delete')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocab(uid, firebaseKey).then(showVocab);
      }
    }

    // CLICK EVENT FOR FILTERING VOCAB BY CATEGORY
    if (e.target.id.includes('filter--')) {
      const [, category] = e.target.id.split('--');
      getFilteredVocab(uid, category).then(showVocab);
    }

    // CLICK EVENT FOR SORTING VOCAB BY NAME
    if (e.target.id === 'sort-name') {
      getVocab(uid).then((array) => {
        showVocab(sortByName(array));
      });
    }

    // CLICK EVENT FOR SORTING VOCAB BY NEWEST TO OLDEST
    if (e.target.id === 'sort-newest') {
      getVocab(uid).then((array) => {
        showVocab(sortNewestToOldest(array));
      });
    }

    // CLICK EVENT FOR SORTING VOCAB BY OLDEST TO NEWEST
    if (e.target.id === 'sort-oldest') {
      getVocab(uid).then((array) => {
        showVocab(sortOldestToNewest(array));
      });
    }
  });
};

export default domEvents;
