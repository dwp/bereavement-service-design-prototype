const { urls, registerController } = require("../../../utils/controller");
const beforeYouStart = require("./about-person-died");

const config = {
  name: urls.aboutPersonDied,
  previous: urls.otherBenefits,
  next: urls.agePersonDied,
};

module.exports = registerController(config.name, config);
