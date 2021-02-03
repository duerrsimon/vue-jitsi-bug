<template>
  <div class="home">
    <Jitsi :id="123" />
  </div>
</template>

<script>
import Jitsi from '@/components/Jitsi.vue'

export default {
  name: 'Home',
  components: {
    Jitsi
  },
  mounted() {
    this.$router.replace({
      query:{
        "id":"test",
         "foo":"bar"
      }
    })
  },
}
</script>
