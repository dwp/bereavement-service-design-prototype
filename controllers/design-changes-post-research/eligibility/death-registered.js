const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.deathRegistered,
  previous: urls.aboutProgress,
  next: [
    {
      page: urls.deathCertificate,
      condition: {
        field: urls.deathRegistered,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.checkAnswersDetails,
    },
  ],
  validation: [
    {
      name: "death-registered",
      type: validation.radios,
      errors: {
        required: "Select yes if the death has been registered",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
