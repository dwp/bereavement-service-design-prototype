const { urls, registerController } = require("../../../utils/controller");
const beforeYouStart = require("./about-person-died");

const config = {
  name: urls.resultsPage,
  previous: urls.otherBenefits,
  next: urls.agePersonDied,
};

module.exports = registerController(config.name, config);
