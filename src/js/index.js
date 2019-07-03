import './frontpage';
import RegistrationController from './register';
import Validation from './validation';
import Provider from './provider';
import md from './lib';
import '../scss/index.scss';

((doc, wnd) => {

  const lib = new md(doc, wnd);
  const validationService = new Validation();
  const registrationPage = new RegistrationController(wnd);
  const pro = new Provider();
  pro.provider('domlib');
  pro.instance(lib);
  registrationPage.provide(pro);
  pro.provider('validation');
  pro.instance(validationService);
  registrationPage.provide(pro);
  registrationPage.postInitial();

})(document, window);
