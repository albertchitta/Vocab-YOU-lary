import addVocabForm from '../components/forms/addVocabForm';
import { showVocab } from '../components/vocab';
import { getSearchedVocab, getVocab } from '../helpers/data/vocabData';
import signOut from '../helpers/signOut';

// NAVIGATION EVENTS
const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // VOCAB-YOU-LARY HOME
  document.querySelector('#home').addEventListener('click', () => {
    getVocab(uid).then(showVocab);
  });

  // CREATE AN ENTRY
  document.querySelector('#create-entry').addEventListener('click', addVocabForm);

  // SEARCH VOCAB
  document.querySelector('#search-btn').addEventListener('click', () => {
    const string = document.querySelector('#searchBar').value;
    getSearchedVocab(uid, string).then(showVocab);
  });
};

export default navigationEvents;
