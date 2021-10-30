const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  let p = new Promise((resolve, reject) => {
    let A = 1 + 1;
    // console.log(a);
    if (A == 2) {
      resolve(A);
    } else {
      reject("Wrong Value");
    }
  });

  p.then((message) => {
    res.send(`Matched !, Value of A is :   ${message}`);
  }).catch((message) => {
    res.send("Unmatched !: " + message);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
