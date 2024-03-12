const { urls, registerController } = require("../../../utils/controller");

const config = {
  name: urls.resultsPage,
  previous: urls.checkAnswersDetails,
};

module.exports = registerController(config.name, config);
