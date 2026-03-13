let pmr = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve();
  }, 5000);
});

pmr
  .then(function () {
    // console.log("Promise resolved");
  })
  .catch(function () {
    // console.log("Promise reject");
  });

// fetching data using promises
fetch(`https://randomuser.me/api/`)
  .then((rawData) => {
    return rawData.json();
  })
  .then((data) => {
    // console.log(data.results[0].name.first);
  })
  .catch((err) => {
    console.log(err);
  });

// Async await. => await can be used jha pe bhi promise mile or hme .then ya .catch nhi krna pde.

async function fetchData() {
  let rawData = await fetch(`https://randomuser.me/api/`);
  let data = await rawData.json();
  //   console.log(data.results[0].name.first);
}

fetchData();

// Custom promise and await use:

function randomNum() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let num = Math.floor(Math.random() * 10);
      if (num > 5) resolve(true);
      else reject(false);
    }, 1000);
  });
}

async function getNum() {
  let result = await randomNum();
  console.log(result);
}

getNum();
