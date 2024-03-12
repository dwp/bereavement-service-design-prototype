const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.residenceCountry,
  previous: urls.aboutYou,
  next: [
    {
      page: urls.residenceCountryIneligible,
      condition: {
        field: urls.residenceCountry,
        value: "abroad",
        match: match.value,
      },
    },
    {
      page: urls.birthDate,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: "Select the country where you live",
    },
  },
};

module.exports = registerController(config.name, config);
