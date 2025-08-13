function createLoginTracker(userInfo) {
  let attemptCount = 2;
  console.log(attemptCount);
  const tracker = (passwordAttempt) => {
    //console.log("tracker return here");
    attemptCount += 1;
    console.log(attemptCount);
    if (attemptCount > 3) {
      console.log("Account locked due to too many failed login attempts");
    }
    else {
      if (passwordAttempt === userInfo.password) {
        console.log("Login successful");
      }
      else {
        console.log(`Attempt ${attemptCount}: Login Failed`);
      }
    }
  }
  tracker();
  //console.log(userInfo.username);
  //console.log(userInfo.password);
}

const jamie = {
  username: "jamieab98", 
  password: "09091998"
};
createLoginTracker(jamie);


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};