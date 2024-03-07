const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.deathCertificate,
  previous: [
    {
      page: urls.deathDate,
      condition: {
        field: urls.otherBenefits,
        value: "no-other-benefits",
        match: match.anyOne,
      },
    },
    {
      page: urls.funeralDate,
    },
  ],
  next: [
    {
      page: urls.sortOutMoneyProperty,
      condition: {
        field: urls.partnerDetail,
        value: "cohabitee",
        match: match.value,
      },
    },
    {
      page: urls.checkAnswersDetails,
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
