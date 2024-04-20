<template>
  <div class="w-full">
    <form @submit.prevent="submitForm">
      <div class="m-2">
        <label for="thumbnail" class="block mb-2">Thumbnail:</label>
        <input
          type="file"
          id="thumbnail"
          @change="handleThumbnailUpload"
          class="w-1/2 border rounded-md px-3 py-2"
        />
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
  name: "AddThumbnail",
  props: {
    id: {
      require: true,
    },
  },
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    handleVideoUpload(event) {
      this.formData.video = event.target.files[0];
    },
    handleThumbnailUpload(event) {
      this.formData.thumbnail = event.target.files[0];
    },
    submitForm() {
      const url = "/thumbnail/";
      const formData = new FormData();
      formData.append("image", this.formData.thumbnail);
      formData.append("id", this.id);
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
