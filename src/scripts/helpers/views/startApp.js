import domBuilder from '../../components/domBuilder';
import navBar from '../../components/navBar';
import logoutButton from '../../components/logoutButton';
import navigationEvents from '../../events/navigationEvents';
import { getVocab } from '../data/vocabData';
import { showVocab } from '../../components/vocab';
import domEvents from '../../events/domEvents';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  navBar();
  logoutButton();
  navigationEvents(user.uid);
  getVocab(user.uid).then(showVocab);
};

export default startApp;
