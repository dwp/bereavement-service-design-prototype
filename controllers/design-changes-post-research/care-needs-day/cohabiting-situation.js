const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.cohabitingSituation,
  previous: urls.partnerDetail,
  next: urls.otherBenefits,
  validation: [
    {
      name: "cohabiting-situation",
      type: validation.checkboxes,
      errors: {
        required: "Select what situation applies to you.",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
