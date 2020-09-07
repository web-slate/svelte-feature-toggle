import INContext from './IN';
import SGContext from './SG';
import USContext from './US';

const country = process.env.COUNTRY;

export const setCountryContext = () => {
  let countryContext = USContext;

  if (country === "SG") {
    countryContext = SGContext;
  } else if (country === "IN") {
    countryContext = INContext;
  }

  return countryContext
};

export const setFeatureContext = () => {
  return {
    registerForm: true,
    ...setCountryContext(),
  };
};