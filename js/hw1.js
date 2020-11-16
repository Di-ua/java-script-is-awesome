const userPassword = "jqueryismyjam";

const ADMIN_PASSWORD = "jqueryismyjam";

const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_IS_ALLOWED = "Добро пожаловать!";
const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
let message;

// Write code under this line
console.log(message);

if (userPassword === ADMIN_PASSWORD) {
  message = ACCES_IS_ALLOWED;
} else if (userPassword === null) {
  message = CANCELED_BY_USER;
} else {
  message = ACCESS_DENIED;
}

//если userPassword равно 'jqueryismyjam'
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null
// то значение message будет равно
// 'Отменено пользователем!'

//если userPassword равно '123'
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'

N4;
const orderPieces = 4;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";

let totalPrice = orderPieces * pricePerDroid; // Write code on this line
let balanceCredit = credits - totalPrice; // Write code on this line
let message;

// Write code under this line
if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (credits >= totalPrice) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
} else if (credits <= totalPrice) {
  message = ACCESS_DENIED;
}

// console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'

N5;

const countryName = "КитаЙ";

const CANCELED_BY_USER = "Отменено пользователем!";
const NO_DELIVERY = "В выбранную страну доставка недоступна.";
const CHINA = "Китай";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAICA = "Ямайка";
let message;
let price = 0;
let country;

if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();

  //вариант1
  switch (country) {
    case CHINA:
      price = 100;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;

    case AUSTRALIA:
      price = 170;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    case INDIA:
      price = 80;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;

    case JAMAICA:
      price = 120;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;

    default:
      message = NO_DELIVERY;
  }
}

//вариант2
switch (country) {
  case CHINA:
    price = 100;
    break;
  case AUSTRALIA:
    price = 170;
    break;
  case INDIA:
    price = 80;
    break;
  case JAMAICA:
    price = 120;
  default:
    message = NO_DELIVERY;
}

if (price > 0) {
  // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

// console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'
