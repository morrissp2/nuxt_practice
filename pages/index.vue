<template>
  <section class="container">
    <i style='font-size:66px' class="fab fa-500px"></i>
    <h1 class='heading'>Introduction:</h1>
    <gallery/>
    <div class='description'>
      {{$store.state.introduction}}
    </div>
  </section>
</template>

<script>
import gallery from '~/components/gallery.vue'

export default {
  transition: {
    duration:1000,
    enterActiveClass: 'animated slideInUp',
    leaveActiveClass: 'animated slideOutDown'
  },
  head(){
    return{
    title: 'Introduction',
    meta: [
      { hid: 'description', name: 'description', content: 'Toyoat Land Cruiser' }
    ]
    }
  },
  components: {
    gallery
  }
}
</script>

<style>
</style>
