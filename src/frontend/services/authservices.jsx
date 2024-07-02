// src/services/authService.js
export const authService = {
  login: (username, password) => {
    // Simulate an API call to authenticate the user
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "user" && password === "password") {
          resolve({ username });
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  },

  register: (username, password) => {
    // Simulate an API call to register the user
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username && password) {
          resolve({ username });
        } else {
          reject(new Error("Invalid input"));
        }
      }, 1000);
    });
  },
};
