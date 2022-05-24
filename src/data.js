const { faker } = require("@faker-js/faker");

let companies, productMap;

companies = JSON.parse(window.localStorage.getItem("companies"));
productMap = JSON.parse(window.localStorage.getItem("productMap"));

if (!companies || !productMap) {
  companies = new Array(50).fill("").map((_) => faker.company.companyName());
  window.localStorage.setItem("companies", JSON.stringify(companies));

  productMap = companies.reduce((acc, company) => {
    acc[company] = new Array(1 + faker.random.numeric(2))
      .fill("-")
      .map((_) => faker.commerce.productName());
    return acc;
  }, {});
  window.localStorage.setItem("productMap", JSON.stringify(productMap));
}

module.exports = {
  companies,
  productMap,
};
