function createLoginTracker(userInfo) {
  let attemptCount = 0;
  //console.log(attemptCount);
  const attempt = (passwordAttempt) => {
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
        console.log(passwordAttempt);
      }
    }
  }
  attempt();
  //console.log(userInfo.username);
  //console.log(userInfo.password);
}

const jamieab98 = {
  username: "jamieab98", 
  password: "09091998"
};


createLoginTracker(jamieab98);


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};