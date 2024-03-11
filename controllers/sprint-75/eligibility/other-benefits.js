const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.otherBenefits,
  previous: [
    {
      page: urls.whatIsRelationship,
      condition: {
        field: urls.whatIsRelationship,
        value: ["family-member", "child", "parent", "friend"],
        match: match.value,
      },
    },
    {
      page: urls.partnerDetail,
      condition: {
        field: urls.whatIsRelationship,
        value: ["partner"],
        match: match.value,
      },
    },
    {
      page: urls.cohabitingSituation,
    },
  ],
  next: urls.aboutPersonDied,
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select yes if you are getting or waiting to hear about any of these benefits",
    },
  },
};

module.exports = registerController(config.name, config);
