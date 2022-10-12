"use strict";
const moon = document.getElementById("moon");
const mars = document.getElementById("mars");
const europa = document.getElementById("europa");
const titan = document.getElementById("titan");

async function populate(index) {
  const requestFile = "../data.json";
  const request = new Request(requestFile);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes, index);
}

function populateHeader(obj, index) {
  const myheader = document.getElementById("des-name");
  myheader.textContent = `${obj.contact[index]["name"]}`;

  const myPara = document.getElementById("des-description");
  myPara.textContent = `${obj.contact[index]["description"]}`;

  const connection_type = document.getElementById("connect-type");
  connection_type.textContent = `${obj.contact[index]["connect_type"]}`;

  const myPara1 = document.getElementById("des-distance");
  myPara1.textContent = `${obj.contact[index]["account"]}`;

  const action_name = document.getElementById("connect-action-name");
  action_name.textContent = `${obj.contact[index]["action_name"]}`;

  const connect_url = document.getElementById("connect-url");
  connect_url.href = obj.contact[index]["connect-url"];

  const myPara2 = document.getElementById("des-travel");
  myPara2.textContent = `${obj.contact[index]["connect"]}`;

  const myImage = document.getElementById("contact-image");
  myImage.src = obj.contact[index]["images"];
}

populate(0);

function myFunction1() {
  populate(0);

  moon.setAttribute("aria-selected", true);
  mars.setAttribute("aria-selected", false);
  europa.setAttribute("aria-selected", false);
  titan.setAttribute("aria-selected", false);
}

function myFunction2() {
  populate(1);

  moon.setAttribute("aria-selected", false);
  mars.setAttribute("aria-selected", true);
  europa.setAttribute("aria-selected", false);
  titan.setAttribute("aria-selected", false);
}

function myFunction3() {
  populate(2);

  moon.setAttribute("aria-selected", false);
  mars.setAttribute("aria-selected", false);
  europa.setAttribute("aria-selected", true);
  titan.setAttribute("aria-selected", false);
}

function myFunction4() {
  populate(3);

  moon.setAttribute("aria-selected", false);
  mars.setAttribute("aria-selected", false);
  europa.setAttribute("aria-selected", false);
  titan.setAttribute("aria-selected", true);
}
