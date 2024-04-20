<template>
  <div>
    admin
    <AddMetaData></AddMetaData>
    <AddVideo></AddVideo>
    <MyVideo />
    <VideoInfo />
  </div>
</template>
<script>
// @ is an alias to /src
import AddVideo from "../components/video/AddVideo.vue";
import MyVideo from "../components/video/MyVideo.vue";
import VideoInfo from "../components/video/VideoInfo.vue";
import AddMetaData from "../components/video/AddMetaData.vue";
export default {
  name: "HomeView",
  components: {
    VideoInfo,
    AddVideo,
    MyVideo,
    AddMetaData,
  },
};
</script>
