import { ERROR_MESSAGES } from '../../config/errorMessage.js';

export const inputValidateLength = (input, low, high, message) => {
  if (input.length < low || input.length > high) {
    throw new Error(message);
  }
};

export const validateCoach = (input) => {
  input.forEach((coach) => {
    inputValidateLength(coach, 2, 4, ERROR_MESSAGES.COACH_LEGTH);
  });
  inputValidateLength(input, 2, 5, ERROR_MESSAGES.COACH_COUNT);
};

export const validateBadFood = (input) => {
  input.forEach(() => {});
};
