// start
const verificationCode = require("./start/verification-code");
const start = require("./start/start");
const aboutYou = require("./start/about-you");
const aboutPersonDied = require("./start/about-person-died");
const aboutProgress = require("./start/about-progress");
const resultsPage = require("./start/results-page");

// eligibility
const birthDate = require("./eligibility/birth-date");
const deathDate = require("./eligibility/death-date");
const deathRegistered = require("./eligibility/death-registered");
const birthDateIneligible = require("./eligibility/birth-date-ineligible");
const otherBenefits = require("./eligibility/other-benefits");
const otherBenefitsIneligible = require("./eligibility/other-benefits-ineligible");
const nationality = require("./eligibility/nationality");
const nationalityOther = require("./eligibility/nationality-other");
const residenceCountry = require("./eligibility/residence-country");
const whatIsRelationship = require("./eligibility/what-is-relationship");
const deathCertificate = require("./eligibility/death-certificate");
const partnerDetail = require("./eligibility/partner-detail");

// identity
const nationalInsurance = require("./identity/national-insurance");
const fullName = require("./identity/full-name");
const homeAddressPostCode = require("./identity/home-address-postcode");
const homeAddressSelect = require("./identity/home-address-select");
const homeAddressManual = require("./identity/home-address-manual");
const homeAddressInternational = require("./identity/home-address-international");

// illness and disabilities
const illnessDisability = require("./illness-and-disabilities/illness-disability");
const illnessDisabilityDate = require("./illness-and-disabilities/illness-disability-date");
const illnessDisabilityDateManual = require("./illness-and-disabilities/illness-disability-date-manual");
const illnessDisabilityAdded = require("./illness-and-disabilities/illness-disability-added");
const illnessDisabilityManual = require("./illness-and-disabilities/illness-disability-manual");

// care needs daytime
const funeralDate = require("./care-needs-day/funeral-date");
const cohabitingSituation = require("./care-needs-day/cohabiting-situation");
const agePersonDied = require("./care-needs-day/age-person-died");

// aids and adaptations
const sortOutMoneyProperty = require("./aids-and-adaptations/sort-out-money-property");

// contact details
const telephoneNumber = require("./contact-details/telephone-number");
const telephoneNumberOther = require("./contact-details/telephone-number-other");
const addContactDetails = require("./contact-details/add-contact-details");
const preferenceContact = require("./contact-details/preference-contact");
const alternativeFormats = require("./contact-details/alternative-formats");
const emailConfirm = require("./contact-details/email-confirm");

// claim submission
const claimSubmission = require("./claim-submission/claim-submission");
const done = require("./claim-submission/done");

// check your answers
const checkAnswersDetails = require("./check-your-answers/check-answers-details");
const checkAnswersDay = require("./check-your-answers/check-answers-day");
const checkAnswersNight = require("./check-your-answers/check-answers-night");
const checkAnswersStartDate = require("./check-your-answers/check-answers-start-date");
const checkAnswersContactDetails = require("./check-your-answers/check-answers-contact-details");
const checkAnswersFullList = require("./check-your-answers/check-answers-full-list");
const checkAnswersSpecialRules = require("./check-your-answers/check-answers-special-rules");

module.exports = {
  verificationCode,
  start,
  aboutYou,
  aboutPersonDied,
  aboutProgress,
  agePersonDied,
  resultsPage,
  deathRegistered,
  whatIsRelationship,
  deathCertificate,
  birthDate,
  deathDate,
  birthDateIneligible,
  otherBenefits,
  otherBenefitsIneligible,
  residenceCountry,
  nationalInsurance,
  fullName,
  homeAddressPostCode,
  homeAddressManual,
  homeAddressInternational,
  illnessDisability,
  illnessDisabilityDate,
  illnessDisabilityDateManual,
  illnessDisabilityAdded,
  illnessDisabilityManual,
  telephoneNumber,
  telephoneNumberOther,
  preferenceContact,
  emailConfirm,
  alternativeFormats,
  homeAddressSelect,
  checkAnswersFullList,
  checkAnswersDetails,
  checkAnswersStartDate,
  checkAnswersContactDetails,
  checkAnswersSpecialRules,
  checkAnswersNight,
  nationality,
  nationalityOther,
  partnerDetail,
  cohabitingSituation,
  funeralDate,
  checkAnswersDay,
  sortOutMoneyProperty,
  claimSubmission,
  done,
  addContactDetails,
};
