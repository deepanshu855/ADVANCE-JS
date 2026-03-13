// Jha bhi function call hoyga... usme aap ek or function de sakte ho.
// vo function ab as a callback accept hoga function definition me.
// use function ko run krdo.

// This is callback hell/ Christmas tree- Callback ke andar callback.
function abcd(fn) {
  // use function ko run krdia.
  fn(function (fn3) {
    fn3(function (fn5) {
      fn5();
    });
  });
}

abcd(function (fn2) {
  fn2(function (fn4) {
    fn4(function () {
      //   console.log("hey");
    });
  });
});

// Real world backend me suppose medicine leke aana hai:
// 1. MedicineLeneJao- jab address milega uske bad fn chlao.
// 2. MedicineBuyKro- medicinebuy tb krenge jb user btayega konsi medicine leni hai. uske bad callback chalega.

function MedicineLeneJao(address, cb) {
  // Logic. address milne ke bad jo krna hai suppose medicie pta chalegi.
  cb("Medicie name");
}

MedicineLeneJao("Bkpur..", function (details) {
  // This fn will run after getting address
});

// Something like this will occur in real world.

// -------------------------QUESTION-------------------------

// ## Exercise 1 — Very Easy (Warming up)

// **Task (Hindi):** Ek function banao `afterDelay`
function afterDelay(time, cb) {
  setTimeout(function () {
    cb();
  }, time);
}

afterDelay(2000, function () {
  //   console.log("Callback executed");
});

// **Requirements:**
// - Ye function do cheezein lega:
//   1. `time` (milliseconds)
//   2. `callback` function
// - Given `time` ke baad `callback` call kare
// - Callback ke andar `"Callback executed"` print hona chahiye

// **Use case:**
// > “2 second baad ek kaam karna hai”

// **Goal:**
// - Samajhna ki callback delay ke baad kaise execute hota hai
// - Ye `setTimeout` + callback connection hai

// ---

// ## Exercise 2 — Intermediate (Data flow)

// **Task (Hindi):** Ek function banao `getUser`

function getUser(username, cb) {
//   console.log("Getting user details...");
  setTimeout(function () {
    cb({ id: 500, username: "Harsh" });
  }, 1000);
}

function getUserPosts(id, cb) {
//   console.log("Getting user posts...");
  setTimeout(function () {
    cb(["Good Morning", "Good Afternoon", "Good Evening"]);
  }, 1000);
}

getUser("Harsh", function (userData) {
  getUserPosts(userData.id, function (data) {
    // console.log(userData.username);
    // console.log(data);
  });
});

// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`

// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

// **Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice

// ---

// ## Exercise 3 — Intermediate (Callback dependency — thoda painful)

// **Task (Hindi):** Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

function loginUser(username, cb) {
  console.log("Getting User details...");
  setTimeout(function () {
    cb({ id: 213, username: "Deepanshu" });
  }, 1000);
}
function fetchPermissions(id, cb) {
  console.log("Granting Permissions...");
  setTimeout(function () {
    cb(["Read", "Write", "Delete"]);
  }, 1000);
}
function loadDashboard(Permissions, cb) {
  setTimeout(function () {
    cb();
  }, 1000);
}

loginUser("Deepanshu", function (data) {
  fetchPermissions(data.id, function (permission) {
    loadDashboard(permission, function () {
      console.log("Dashboard loaded");
    });
  });
});

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// **Goal:**
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai

// ---
