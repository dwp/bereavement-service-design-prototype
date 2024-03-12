const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.whatIsRelationship,
  previous: urls.birthDate,
  next: [
    {
      page: urls.partnerDetail,
      condition: {
        field: urls.whatIsRelationship,
        value: "partner",
        match: match.value,
      },
    },
    {
      page: urls.otherBenefits,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: "Select your relationship.",
    },
  },
};

module.exports = registerController(config.name, config);
