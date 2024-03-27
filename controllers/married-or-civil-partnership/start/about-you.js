const { urls, registerController } = require("../../../utils/controller");
const beforeYouStart = require("./about-person-died");

const config = {
  name: urls.aboutYou,
  previous: urls.start,
  next: urls.residenceCountry,
};

module.exports = registerController(config.name, config);
