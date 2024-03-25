const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.agePersonDied,
  previous: urls.aboutPersonDied,
  next: [
    {
      page: urls.deathDate,
    },
  ],
  validation: {
    type: validation.radios,
  },
};

module.exports = registerController(config.name, config);
