const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.toiletNightFrequency,
  previous: urls.toiletNightWhy,
  next: [
    {
      page: urls.medicationTreatmentNight,
      condition: {
        field: urls.nightDifficulties,
        value: ["nighttime-medication"],
        match: match.anyOne,
      },
    },
    {
      page: urls.checkAnswersNight,
    },
  ],
  validation: [
    {
      name: "toilet-typically-how-long",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required:
          "Enter how long it takes to manage your difficulties with toilet needs",
        maxLength:
          "Length of time it takes to manage your difficulties with your toilet needs must be 200 characters or less",
      },
      condition: {
        field: "night-frequency-2-loo",
        value: "once-a-night",
      },
    },
    {
      type: validation.radios,
      name: "night-frequency-2-loo",
      errors: {
        required:
          "Select how many times a night you have difficulties with your toilet needs",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
