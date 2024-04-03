<template>
  <div class="w-full">
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
        <label for="thumbnail" class="block mb-2">Thumbnail:</label>
        <input
          type="file"
          id="thumbnail"
          @change="handleThumbnailUpload"
          class="w-1/2 border rounded-md px-3 py-2"
        />
      </div>
      <div class="m-2">
        <label for="title" class="block mb-2">Title:</label>
        <input
          type="text"
          id="title"
          v-model="formData.title"
          class="w-1/2 border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <div class="m-2">
        <label for="description" class="block mb-2">Description:</label>
        <textarea
          id="description"
          v-model="formData.description"
          class="w-1/2 border border-gray-300 rounded-md px-3 py-2"
        ></textarea>
      </div>
      <div class="m-2">
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddVideo",
  data() {
    return {
      formData: {
        video: null,
      },
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
      const url = "/video/";
      const formData = new FormData();
      formData.append("video", this.formData.video);
      formData.append("name", this.formData.title);
      formData.append("description", this.formData.description);
      formData.append("photo", this.formData.thumbnail);
      console.log(formData);
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
