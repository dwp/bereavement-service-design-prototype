const express = require("express");

const router = express.Router();
const controllers = require("../controllers/married-or-civil-partnership");
const { urls } = require("../utils/constants");

// start
router.use(urls.root, controllers.verificationCode);
router.use(`/${urls.start}`, controllers.start);
router.use(`/${urls.aboutPersonDied}`, controllers.aboutPersonDied);
router.use(`/${urls.aboutYou}`, controllers.aboutYou);
router.use(`/${urls.aboutProgress}`, controllers.aboutProgress);
router.use(`/${urls.deathRegistered}`, controllers.deathRegistered);
router.use(`/${urls.resultsPage}`, controllers.resultsPage);

// eligibility
router.use(`/${urls.whatIsRelationship}`, controllers.whatIsRelationship);
router.use(`/${urls.deathCertificate}`, controllers.deathCertificate);
router.use(`/${urls.partnerDetail}`, controllers.partnerDetail);
router.use(`/${urls.birthDate}`, controllers.birthDate);
router.use(`/${urls.deathDate}`, controllers.deathDate);
router.use(`/${urls.birthDateIneligible}`, controllers.birthDateIneligible);
router.use(`/${urls.otherBenefits}`, controllers.otherBenefits);
router.use(
  `/${urls.otherBenefitsIneligible}`,
  controllers.otherBenefitsIneligible
);
router.use(`/${urls.nationality}`, controllers.nationality);
router.use(`/${urls.nationalityOther}`, controllers.nationalityOther);
router.use(`/${urls.residenceCountry}`, controllers.residenceCountry);

// identity
router.use(`/${urls.nationalInsurance}`, controllers.nationalInsurance);
router.use(`/${urls.fullName}`, controllers.fullName);
router.use(`/${urls.homeAddressPostcode}`, controllers.homeAddressPostCode);
router.use(`/${urls.homeAddressSelect}`, controllers.homeAddressSelect);
router.use(`/${urls.homeAddressManual}`, controllers.homeAddressManual);
router.use(
  `/${urls.homeAddressInternational}`,
  controllers.homeAddressInternational
);

// illness and disabilities
router.use(`/${urls.illnessDisability}`, controllers.illnessDisability);
router.use(`/${urls.illnessDisabilityDate}`, controllers.illnessDisabilityDate);
router.use(
  `/${urls.illnessDisabilityDateManual}`,
  controllers.illnessDisabilityDateManual
);
router.use(
  `/${urls.illnessDisabilityAdded}`,
  controllers.illnessDisabilityAdded
);
router.use(
  `/${urls.illnessDisabilityManual}`,
  controllers.illnessDisabilityManual
);
router.use(`/${urls.illnessDisabilityRemove}`, (req, res) => {
  req.session.data["illness-disability"] = req.session.data[
    "illness-disability"
  ].filter(
    (e) => e.toLowerCase().replace(/[^a-z0-9]/gi, "") !== req?.query?.remove
  );
  req.session.data["illness-disability-rows"] = req.session.data[
    "illness-disability-rows"
  ].filter(
    (e) =>
      e?.[0]?.text.toLowerCase().replace(/[^a-z0-9]/gi, "") !==
      req?.query?.remove
  );
  return res.redirect(`${urls.illnessDisability}`);
});

// care needs daytime
router.use(`/${urls.funeralDate}`, controllers.funeralDate);
router.use(`/${urls.cohabitingSituation}`, controllers.cohabitingSituation);
router.use(`/${urls.agePersonDied}`, controllers.agePersonDied);

// aids and adaptations
router.use(`/${urls.sortOutMoneyProperty}`, controllers.sortOutMoneyProperty);

// contact details
router.use(`/${urls.telephoneNumber}`, controllers.telephoneNumber);
router.use(`/${urls.telephoneNumberOther}`, controllers.telephoneNumberOther);
router.use(`/${urls.addContactDetails}`, controllers.addContactDetails);
router.use(`/${urls.preferenceContact}`, controllers.preferenceContact);
router.use(`/${urls.alternativeFormats}`, controllers.alternativeFormats);
router.use(`/${urls.emailConfirm}`, controllers.emailConfirm);

// claim submission
router.use(`/${urls.claimSubmission}`, controllers.claimSubmission);
router.use(`/${urls.done}`, controllers.done);

// check your answers
router.use(`/${urls.checkAnswersDetails}`, controllers.checkAnswersDetails);
router.use(`/${urls.checkAnswersDay}`, controllers.checkAnswersDay);
router.use(`/${urls.checkAnswersNight}`, controllers.checkAnswersNight);
router.use(`/${urls.checkAnswersStartDate}`, controllers.checkAnswersStartDate);
router.use(
  `/${urls.checkAnswersContactDetails}`,
  controllers.checkAnswersContactDetails
);
router.use(`/${urls.checkAnswersFullList}`, controllers.checkAnswersFullList);
router.use(
  `/${urls.checkAnswersSpecialRules}`,
  controllers.checkAnswersSpecialRules
);

module.exports = router;
