const button1 = document.querySelector("btn1");
const button2 = document.querySelector("btn2");
const space = document.querySelector("here");

const handleBoy = function (event) {
  event.preventDefault();
  getBoy();
};
const handleGirl = function (event) {
  event.preventDefault();
  getGirl();
};

function getBoy() {
  let requestUrl = "";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      button1.setAttribute("style", "display: none");
      button2.setAttribute("style", "display: none");

      const verse = document.createElement("p");

      verse.textContent = data.reference + '"' + data.text + '"';

      here.appendChild(verse);
    });
}

function getGirl() {
  let requestUrl = "";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      button1.setAttribute("style", "display: none");
      button2.setAttribute("style", "display: none");

      const verse = document.createElement("p");

      verse.textContent = data.reference + '"' + data.text + '"';

      here.appendChild(verse);
    });
}

getBoy.addEventListener("click", handleBoy);
getGirl.addEventListener("click", handleGirl);
