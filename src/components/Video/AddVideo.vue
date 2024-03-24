<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="video">Video (MP4):</label>
        <input type="file" id="video" @change="handleVideoUpload" />
      </div>
      <div>
        <label for="thumbnail">Thumbnail:</label>
        <input type="file" id="thumbnail" @change="handleThumbnailUpload" />
      </div>
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="formData.title" />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="formData.description"></textarea>
      </div>
      <button type="submit">Submit</button>
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
