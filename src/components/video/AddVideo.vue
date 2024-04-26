<template>
  <div class="w-full">
    test
    <form @submit.prevent="submitForm">
      <div class="m-2">
        <label for="video" class="block mb-2">Video (MP4):</label>
        <input
          type="file"
          id="video"
          @change="handleVideoUpload"
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
  name: "AddVideo",
  props: {
    id: {
      require: true,
    },
  },
  data() {
    return {
      formData: {
        video: null,
        background: false,
      },
    };
  },
  methods: {
    handleVideoUpload(event) {
      this.formData.video = event.target.files[0];
    },

    submitForm() {
      let url = "/movie-upload/";

      if (this.formData.background) {
        url = "/movie-upload?background=true";
      }

      const formData = new FormData();
      formData.append("video", this.formData.video);
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
