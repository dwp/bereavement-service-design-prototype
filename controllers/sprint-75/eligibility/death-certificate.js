const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.deathCertificate,
  previous: urls.sortOutMoneyProperty,
  next: [
    {
      page: urls.specialRulesDeclaration,
      condition: {
        field: urls.bestDescribe,
        value: "friend",
        match: match.value,
      },
    },
    {
      page: urls.specialRulesDeclaration,
      condition: {
        field: urls.bestDescribe,
        value: "charity",
        match: match.value,
      },
    },
    {
      page: urls.whoIsApplyingIneligible,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: "Select the option that best describes you",
    },
  },
};

module.exports = registerController(config.name, config);
