const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.sortOutMoneyProperty,
  previous: urls.deathCertificate,
  next: urls.checkAnswersDetails,
  validation: [
    {
      name: "sort-out-money-property",
      type: validation.radios,
      errors: {
        required:
          "Select yes if you need to sort out money, property or personal belongings of the person who has died",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
