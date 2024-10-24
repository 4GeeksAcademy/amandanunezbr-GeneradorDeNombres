/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
//
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function generateDomains(pronouns, adjectives, nouns) {
  let domains = [];

  for (let p of pronouns) {
    for (let a of adjectives) {
      for (let n of nouns) {
        let domain = `${p}${a}${n}.com`;
        domains.push(domain);
      }
    }
  }

  return domains;
}

let allDomains = generateDomains(pronoun, adj, noun);

console.log(allDomains);
