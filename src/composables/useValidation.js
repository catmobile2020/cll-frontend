import { ref, computed } from "vue";

/**
 * A composable function to validate a mobile number.
 * @returns {Object} An object containing the phone number state, validation error, and validation logic.
 */
export function useValidation() {
  const phoneNumber = ref("");
  const phoneError = ref("");

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^(01)[0-9]{9}$/;
    return phoneRegex.test(number);
  };

  const isPhoneValid = computed(() => {
    const isValid = validatePhoneNumber(phoneNumber.value);
    phoneError.value = isValid ? "" : "Please enter a valid mobile number.";
    return isValid;
  });

  return {
    phoneNumber,
    phoneError,
    isPhoneValid,
  };
}
