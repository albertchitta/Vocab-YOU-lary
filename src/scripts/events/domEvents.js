import addVocabForm from '../components/forms/addVocabForm';
import { showVocab } from '../components/vocab';
import {
  createVocab,
  getSingleVocab,
  updateVocab,
  deleteVocab
} from '../helpers/data/vocabData';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR SUBMITTING A FORM TO ADD A VOCAB
    if (e.target.id === ('submit-vocab')) {
      e.preventDefault();
      const vocabObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category_id: document.querySelector('#category_id').value,
        uid
      };

      createVocab(vocabObject).then(showVocab);
    }

    // CLICK EVENT FOR EDITING/UPDATING A VOCAB
    if (e.target.id.includes('edit')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObject) => addVocabForm(uid, vocabObject));
    }
    if (e.target.id.includes('update-vocab')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const vocabObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category_id: document.querySelector('#category_id').value,
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
  });
};

export default domEvents;
