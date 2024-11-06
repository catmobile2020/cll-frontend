<template>
  <div class="mx-auto px-4 sm:px-8">
    <div class="py-8">
      <div v-if="loading" class="flex justify-center items-center py-8">
        <div
          class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"
        ></div>
      </div>
      <div v-else class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div
          class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
        >
          <table
            class="min-w-full leading-normal border-separate"
            style="border-spacing: 5px 5px"
          >
            <thead>
              <tr>
                <th
                  class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                  style="background-color: #114576; color: white"
                >
                  Table
                </th>
                <th
                  class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                  style="background-color: #114576; color: white"
                >
                  Moderator
                </th>
                <th
                  class="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                  style="background-color: #114576; color: white"
                >
                  Case Discussion
                </th>
                <th class="px-5 py-3" style="background-color: #114576"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(table, index) in tables" :key="index">
                <td
                  class="px-5 py-5 text-sm w-40"
                  style="background-color: #e8eef0; border-spacing: 0 10px"
                >
                  <div class="flex">
                    <div>
                      <p
                        class="text-gray-900 whitespace-no-wrap table-cell-color"
                      >
                        {{ table.name ? table.name : "--" }}
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  class="px-5 py-5 text-left text-sm"
                  style="background-color: #e8eef0"
                >
                  <p class="text-gray-900 whitespace-no-wrap table-cell-color">
                    {{ table.moderator }}
                  </p>
                </td>
                <td
                  class="px-5 py-5 text-left text-sm"
                  style="background-color: #e8eef0"
                >
                  <p class="text-gray-900 whitespace-no-wrap table-cell-color">
                    {{ table.case_discussion }}
                  </p>
                </td>
                <td
                  class="px-5 py-5 text-sm text-right"
                  style="background-color: #e8eef0"
                >
                  <div class="flex justify-center items-center">
                    <router-link
                      v-if="table.available"
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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
                  </div>
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
.table-cell-color {
  color: #114576;
  font-weight: 600;
  font-size: 16px;
  text-align: left;
  white-space: nowrap;
}
</style>
