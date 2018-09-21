function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(x => goodUsers.some(arrVal => x == arrVal))
  };
}

module.exports = checkUsersValid