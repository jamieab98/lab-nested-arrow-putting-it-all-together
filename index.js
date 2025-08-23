function createLoginTracker(userInfo) {
  const { username, password } = userInfo;
  let attemptCount = 0;

  return (passwordAttempt) => {
    attemptCount++;

    if (passwordAttempt === password && attemptCount <= 3) {
      return `Login successful`;
    }

    if (attemptCount <= 3) {
      return `Attempt ${attemptCount}: Login failed`;
    }

    return `Account locked due to too many failed login attempts`;
  };
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};