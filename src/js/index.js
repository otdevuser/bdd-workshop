import './frontpage';
import RegistrationController from './register';
import './validation';
import '../scss/index.scss';

((doc, wnd) => {

  const registrationPage = new RegistrationController(doc, wnd);

})(document, window);
