const { urls, registerController } = require("../../../utils/controller");

const config = {
  name: urls.start,
  previous: urls.root,
  next: urls.aboutYou,
};

module.exports = registerController(config.name, config);
