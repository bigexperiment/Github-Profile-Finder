"use strict";

const url = "https://api.github.com/users/gorakhjoshi";

// promise = result of async option.

// promise itself is synchronous. it will be excuted. but its result is async.
// promise does not contain data itself.
// but it can  get the data after sometime

const response = fetch(url)
  .then((result) => result.json())

  .then((data) => console.log(data))

  .catch(() => console.log("Error"));

for (let i = 0; i < 100; i++) {
  console.log(1);
}
