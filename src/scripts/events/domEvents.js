import { showVocab } from '../components/vocab';
import { createVocab } from '../helpers/data/vocabData';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR SUBMITTING A FORM TO ADD A VOCAB
    if (e.target.id.includes('submit-vocab')) {
      e.preventDefault();
      const vocabObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category_id: document.querySelector('#category_id').value,
        uid
      };

      createVocab(vocabObject).then(showVocab);
    }
  });
};

export default domEvents;
