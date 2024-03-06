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
      page: urls.partnerDetail,
      condition: {
        field: urls.partnerDetail,
        value: ["married", "civil-partnership"],
        match: match.value,
      },
    },
    {
      page: urls.cohabitingSituation,
      condition: {
        field: urls.partnerDetail,
        value: ["cohabiting"],
        match: match.value,
      },
    },
    {
      page: urls.whatIsRelationship,
    },
  ],
  next: urls.sortOutMoneyProperty,
  validation: {
    type: validation.checkboxes,
    errors: {
      required: "Select which benefit you get",
    },
  },
};

module.exports = registerController(config.name, config);
