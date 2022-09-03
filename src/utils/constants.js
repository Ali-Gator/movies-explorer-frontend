const constants = {
  BEATFILM_URL: 'https://api.nomoreparties.co/beatfilm-movies',
  API_URL: 'https://api.me.nomoredomains.sbs',
  IMG_URL: 'https://api.nomoreparties.co',
  MESSAGE: {
    BEATFILM_ERR:
      'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
    WRONG_LOGIN_PASSWORD: 'Вы ввели неправильный логин или пароль',
    NO_TOKEN: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате',
    WRONG_TOKEN: 'При авторизации произошла ошибка. Переданный токен некорректен.',
    CONFLICT_USER: 'Пользователь с таким email уже существует',
    REGISTER_ERR: 'При регистрации пользователя произошла ошибка',
    PATCH_USER_ERR: 'При обновлении профиля произошла ошибка',
    SERVER_ERR: 'На сервере произошла ошибка',
    NOT_FOUND_ERR: 'Страница по указанному маршруту не найдена',
    NAME_ERR: 'Имя может содержать только латиницу, кириллицу, пробел или дефис',
    EDIT_PROFILE: 'Ваши данные успешно обновлены',
    SEARCH_QUERY_ERR: 'Введите ключевое слово',
    NO_MOVIE_FOUND: 'Ничего не найдено',
    START_SEARCH: 'Введите название фильма в поисковой строке'
  },
  MESSAGE_TYPE: {
    ERROR: 'error',
    OK: 'ok'
  },
  INPUT_SHORT: 'short',
  STORAGE: {
    JWT: 'jwt',
    MOVIES_DATA: 'movies'
  },
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
        type: 'text'
      },
      {
        id: 'email',
        label: 'E-mail',
        type: 'email'
      },
      {
        id: 'password',
        label: 'Пароль',
        type: 'password'
      }
    ]
  },
  LOGIN_FORM: {
    title: 'Рады видеть!',
    buttonText: 'Войти',
    text: 'Ещё не зарегистрированы?',
    linkText: 'Регистрация',
    linkTo: '/signup',
    inputsData: [
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
        error: ''
      }
    ]
  }
};

export default constants;
