<template>
  <div class="flex items-center justify-center px-4">
    <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-[800px]">
      <h2 class="text-2xl font-bold mb-4 text-center">Register</h2>

      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label
            for="name"
            class="block text-left text-gray-700 font-semibold mb-2"
            >Name</label
          >
          <input
            v-model="name"
            type="text"
            id="name"
            placeholder="Enter your name"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="mb-4">
          <label
            for="phoneNumber"
            class="block text-left text-gray-700 font-semibold mb-2"
            >Phone number</label
          >
          <input
            v-model="phoneNumber"
            type="tel"
            id="phoneNumber"
            placeholder="Enter your phone number"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p v-if="phoneError" class="text-left text-red-500 text-sm mt-1">
            {{ phoneError }}
          </p>
        </div>

        <div class="mb-4">
          <label
            for="affiliate"
            class="block text-left text-gray-700 font-semibold mb-2"
            >Affiliate</label
          >
          <input
            v-model="affiliate"
            type="text"
            id="affiliate"
            placeholder="Enter your affiliate"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="flex flex-col md:flex-row justify-between">
          <button
            type="submit"
            class="w-full md:w-[48%] bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
            :disabled="!name || !isPhoneValid || !affiliate"
          >
            Submit
          </button>

          <router-link
            class="mt-2 md:mt-0 w-full md:w-[48%] bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-400"
            to="/"
          >
            Cancel
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useValidation } from "../composables/useValidation";
import apiService from "../api/api";
import { useRoute, useRouter } from "vue-router";
import Swal from "sweetalert2";

export default defineComponent({
  name: "card-1",
  setup() {
    const name = ref("");
    const affiliate = ref("");
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;
    const { phoneNumber, phoneError, isPhoneValid } = useValidation();

    const handleSubmit = async () => {
      if (!isPhoneValid.value) {
        return; // Prevent submission if the phone number is invalid
      }

      try {
        const response = await apiService.register({
          name: name.value,
          mobile: phoneNumber.value,
          affiliate: affiliate.value,
          table_id: id,
        });
        if (response) {
          Swal.fire({
            title: "Done!",
            text: "Item Added successfully.",
            icon: "success",
            timer: 2000, // Auto close after 2 seconds
            showConfirmButton: false, // Hide the confirm button
          });
          router.push({ name: "home" });
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error,
          icon: "error",
          timer: 2000, // Auto close after 2 seconds
          showConfirmButton: false, // Hide the confirm button
        });
      }
    };

    return {
      name,
      affiliate,
      phoneNumber,
      phoneError,
      handleSubmit,
      isPhoneValid,
    };
  },
});
</script>

<style scoped>
.form-width {
  max-width: 48%;
}
</style>
