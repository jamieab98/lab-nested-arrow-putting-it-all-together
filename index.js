function createLoginTracker(userInfo) {
  console.log(userInfo.username);
  console.log(userInfo.password);
}

const jamie = {username: "jamieab98", password: "09091998"};
createLoginTracker(jamie);


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};