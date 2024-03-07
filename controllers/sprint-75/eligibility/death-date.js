const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.deathDate,
  previous: [
    {
      page: urls.agePersonDied,
    },
  ],
  next: [
    {
      page: urls.deathCertificate,
      condition: {
        field: urls.otherBenefits,
        value: "no-other-benefit",
        match: match.anyOne,
      },
    },
    {
      page: urls.funeralDate,
    },
  ],
  validation: {
    type: validation.dateInput,
  },
};

module.exports = registerController(config.name, config);
