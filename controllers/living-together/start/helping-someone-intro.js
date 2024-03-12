const { urls, registerController } = require("../../../utils/controller");
const beforeYouStart = require("./about-person-died");

const config = {
  name: urls.helpingSomeoneIntro,
  previous: urls.personClaiming,
  next: urls.birthDate,
};

module.exports = registerController(config.name, config);
