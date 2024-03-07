const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.partnerDetail,
  previous: urls.whatIsRelationship,
  next: [
    {
      page: urls.cohabitingSituation,
      condition: {
        field: urls.partnerDetail,
        value: "cohabiting",
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
      required: "Select your relationship to your partner",
    },
  },
};

module.exports = registerController(config.name, config);
