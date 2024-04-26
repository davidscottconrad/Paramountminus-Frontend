<template>
  <div class="w-full">
    <form @submit.prevent="submitForm">
      <div class="m-2">
        <label for="title" class="block mb-2">Title:</label>
        <input
          type="text"
          id="input"
          v-model="formData.title"
          class="w-1/2 border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <div class="m-2">
        <label for="description" class="block mb-2">Description:</label>
        <textarea
          id="input"
          v-model="formData.description"
          class="w-1/2 border border-gray-300 rounded-md px-3 py-2"
        ></textarea>
      </div>
      <div class="m-2">
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddMetaData",
  data() {
    return {
      formData: {
        video: null,
      },
    };
  },
  methods: {
    submitForm() {
      const url = "/video-metadata/";
      const formData = new FormData();

      formData.append("name", this.formData.title);
      formData.append("description", this.formData.description);

      this.$axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
          alert("Video uploaded successfully!");
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          alert("Error uploading video. Please try again.");
          // Handle error
        });
    },
  },
};
</script>

<style>
#input {
  color: black;
}
</style>
