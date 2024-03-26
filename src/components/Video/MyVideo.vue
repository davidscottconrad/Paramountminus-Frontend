<template>
  <div>
    <VideoPlayerComponent :options="videoOptions" />
  </div>
</template>

<script>
import VideoPlayerComponent from "./VideoPlayerComponent.vue";

export default {
  name: "MyVideo",
  components: {
    VideoPlayerComponent,
  },
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: "http://localhost:8000/video/?id=1",
            type: "video/mp4",
          },
        ],
        width: "480",
        height: "270",
        muted: true,
      },
    };
  },
};
</script>
