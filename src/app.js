let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function generateDomains(pronouns, adjectives, nouns) {
  let domains = [];

  for (let pronoun of pronouns) {
    for (let adj of adjectives) {
      for (let noun of nouns) {
        domains.push(`${pronoun}${adj}${noun}.com`);
      }
    }
  }

  return domains;
}

console.log(generateDomains(pronoun, adj, noun));
