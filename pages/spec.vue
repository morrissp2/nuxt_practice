<template>
  <section class="container">
    <h1 class='heading'>Spec:</h1>
    <gallery/>
    <div class='description'>
        <ul id='list'>
            <li v-for="(value,key,index) in $store.state.spec" :key='index'>
               <b>{{key}}</b> : <i>{{value}}</i>
            </li>
        </ul>
    </div>
  </section>
</template>

<script>
import gallery from '~/components/gallery.vue'

export default {
  components: {
    gallery
  }
}
</script>

<style>
</style>
