const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.deathCertificate,
  previous: urls.aboutProgress,
  next: urls.sortOutMoneyProperty,
  // [
  //   {page:

  //     condition: {
  //       field: urls.partnerDetail,
  //       value: "cohabiting",
  //       match: match.value,
  //     },
  //   },
  //   {
  //     page: urls.checkAnswersDetails,
  //   },
  // ],
  validation: {
    type: validation.radios,
    errors: {
      required: "Select the option that best describes you",
    },
  },
};

module.exports = registerController(config.name, config);
