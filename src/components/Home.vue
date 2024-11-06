<template>
  <div class="mx-auto px-4 sm:px-8">
    <div class="py-8">
      <div v-if="loading" class="flex justify-center items-center py-8">
       
         <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
      <div v-else class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div
          class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
        >
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Table
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Moderator
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Time
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Case discussion
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Modirators
                </th>

                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(table, index) in tables" :key="index">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex">
                    <div>
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ table.table_name ? table.table_name : "--" }}
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  class="px-5 py-5 text-left border-b border-gray-200 bg-white text-sm"
                >
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ table.moderator }}
                  </p>
                </td>
                <td
                  class="px-5 py-5 border-b text-left border-gray-200 bg-white text-sm"
                >
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ table.start_time }}
                  </p>
                </td>
                <td
                  class="px-5 py-5 text-left border-b border-gray-200 bg-white text-sm"
                >
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ table.case_discussion }}
                  </p>
                </td>
                <td
                  class="px-5 py-5 text-left border-b border-gray-200 bg-white text-sm"
                >
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{
                      table.additional_moderators
                        ? table.additional_moderators
                        : "--"
                    }}
                  </p>
                </td>
                <td
                  class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                >
                  <router-link
                    v-if="table.available"
                    class="bg-blue-500 hover:bg-blue-700 text-white hover:text-white font-bold py-2 px-4 rounded-full"
                    :to="'/register/' + table.id"
                  >
                    Register
                  </router-link>
                  <button
                    v-else
                    class="bg-blue-500 text-white font-bold py-2 px-4 rounded-full opacity-50 cursor-not-allowed"
                  >
                    Register
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import apiService from "../api/api";

export default defineComponent({
  name: "home-page",
  setup() {
    const loading = ref(true);
    const tables = ref([]);
    const fetchTable = async () => {
      loading.value = true;
      try {
        const response = await apiService.fetchTables();
        tables.value = response.data.data;
        console.log("fetching successful:", response.data);
        // Handle success with toast
      } catch (error) {
        console.error("fetching failed:", error);
        // Handle error with toast error msg
      } finally {
        loading.value = false; // Stop loader
      }
    };
    onMounted(() => {
      fetchTable();
    });

    return {
      fetchTable,
      tables,
      loading,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
