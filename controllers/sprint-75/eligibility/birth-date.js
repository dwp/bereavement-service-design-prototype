const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.birthDate,
  previous: [
    {
      page: urls.residenceCountry,
    },
  ],
  next: [
    {
      page: urls.whatIsRelationship,
    },
  ],
  validation: {
    type: validation.dateInput,
  },
};

module.exports = registerController(config.name, config);
