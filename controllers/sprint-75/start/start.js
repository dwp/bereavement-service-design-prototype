const { urls, registerController } = require("../../../utils/controller");

const config = {
  name: urls.start,
  previous: urls.root,
  next: urls.residenceCountry,
};

module.exports = registerController(config.name, config);
