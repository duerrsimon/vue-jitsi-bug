<template>
  <div id="jitsi-container"></div>
</template>

<script>
module.exports = {
  name: "Jitsi",
  props: ["id"],
  methods: {
    startConference() {
      var _this = this;
      try {
        const domain = "meet.jit.si";
        const options = {
          audioInput: "<deviceLabel>",
          audioOutput: "<deviceLabel>",
          videoInput: "<deviceLabel>",
          roomName: "HashtagBug"+this.id,
          height: 400,
          parentNode: document.getElementById("jitsi-container"),
          interfaceConfigOverwrite: {
            DEFAULT_BACKGROUND: "#eee",
            TOOLBAR_ALWAYS_VISIBLE: true,
            TOOLBAR_BUTTONS: [
              "microphone",
              "camera",
              "desktop",
              "fullscreen",
              "hangup",
              "chat",
              "settings",
              "tileview",
            ],
          },
          configOverwrite: {
            prejoinPageEnabled: false,
          },
        };
        this.api = new JitsiMeetExternalAPI(domain, options);
        this.api.addEventListener("videoConferenceJoined", () => {
          console.log("Local User Joined");

          _this.api.executeCommand("displayName", _this.username);
        });
      } catch (error) {
        console.error("Failed to load Jitsi API", error);
      }
    },
    openRoom() {
      if (window.JitsiMeetExternalAPI) {
        this.startConference();
      } else alert("Jitsi Meet API script not loaded");
    },
  },
  mounted() {
    this.openRoom();
  },
};
</script>