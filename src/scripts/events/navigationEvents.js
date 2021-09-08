import addVocabForm from '../components/forms/addVocabForm';
import signOut from '../helpers/signOut';

// NAVIGATION EVENTS
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // CREATE AN ENTRY
  // document.querySelector('#navigation').addEventListener('click', (e) => {
  //   if (e.target.id.includes('create-entry')) {
  //     addVocabForm();
  //   }
  // });
  document.querySelector('#create-entry').addEventListener('click', addVocabForm);
};

export default navigationEvents;
