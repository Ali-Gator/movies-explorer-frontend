const constants = {
  BEATFILM_URL: 'https://api.nomoreparties.co/beatfilm-movies',
  API_URL: 'https://api.me.nomoredomains.sbs',
  SERVER_ERR_MSG:
    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
  REGISTER_FORM: {
    title: 'Добро пожаловать!',
    buttonText: 'Зарегистрироваться',
    text: 'Уже зарегистрированы?',
    linkText: 'Войти',
    linkTo: '/signin',
    inputsData: [
      {
        id: 'name',
        label: 'Имя',
        type: 'text',
        error: ''
      },
      {
        id: 'email',
        label: 'E-mail',
        type: 'email',
        error: ''
      },
      {
        id: 'password',
        label: 'Пароль',
        type: 'password',
        error: 'Что-то пошло не так...'
      }
    ]
  }
};

export default constants;
