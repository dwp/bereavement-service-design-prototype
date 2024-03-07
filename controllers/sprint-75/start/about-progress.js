const { urls, registerController } = require("../../../utils/controller");
const beforeYouStart = require("./about-person-died");

const config = {
  name: urls.aboutProgress,
  previous: urls.funeralDate,
  next: urls.deathCertificate,
};

module.exports = registerController(config.name, config);
