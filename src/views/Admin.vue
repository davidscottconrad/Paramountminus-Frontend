<template>
  <div>
    admin
    <AddMetaData></AddMetaData>
    <AddVideo></AddVideo>

    <VideoInfo />
  </div>
</template>
<script>
// @ is an alias to /src
// import AddVideo from "../components/video/AddVideo.vue";
import VideoInfo from "../components/video/VideoInfo.vue";
import AddMetaData from "../components/video/AddMetaData.vue";
export default {
  name: "HomeView",
  components: {
    VideoInfo,
    // AddVideo,

    AddMetaData,
  },
};
</script>
