const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.funeralDate,
  previous: urls.deathDate,
  next: urls.aboutProgress,
  validation: [
    {
      name: "funeral-date",
      type: validation.radios,
      errors: {
        required: "Select yes if the funeral already happened",
      },
    },
    {
      name: "funeral-date-reveal",
      type: validation.dateInput,
      condition: {
        field: "funeral-date",
        value: "yes",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
