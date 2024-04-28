<template>
  <div>
    <button @click="downloadPdf">Resume</button>
  </div>
</template>

<script>
export default {
  name: "DownloadResume",
  data() {
    return {
      pdfUrl: "/Resume.pdf",
      pdfFileName: "David_Conrad_Resume.pdf",
    };
  },
  methods: {
    downloadPdf() {
      // Create a link element
      const link = document.createElement("a");
      link.href = this.pdfUrl;
      link.download = this.pdfFileName;

      // Simulate a click on the link element
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>
