// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];

// const numbers = [1, 2, 3, 4, 5];

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems(friends);
// logItems(numbers);

// Функция findFriends для поиска друзей

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
const nameToFind1 = "Poly";

const findFriend = function (allFriends, name) {
  console.log("allFriends: ", allFriends);
  console.log("name: ", name);

  for (const friend of friends) {
    if (name === friend) {
      return "Нашли такого друга";
    }
  }

  return "Не нашли.";
};

const r1 = findFriend(friends, "Poly");
console.log(r1);

const r2 = findFriend(friends, "Chelsy");
console.log(r2);
