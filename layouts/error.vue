<template>
    <div id='error_page'>
        <li v-for="(value,key,index) in error" :key='index'>
            <b>{{key}}:</b>{{value}}
        </li>
        <hr>
        <img src="/dogs.jpg" alt="error">
        <hr>
        <a href="http://localhost:8081/">
            <i class="fas fa-home"></i>
        </a>
    </div>
</template>

<script>
export default {
    head() {
       return{
           title:this.error.message,
           meta:[
               {hid:'description', name:'description', content:this.error.message}
           ]
       } 
    },
    layout: 'error_layout',
    props: ['error']
}
</script>

<style scoped>
#error_page {
    font-family: Arial, Helivetica, sans-serif;
    text-align: center;
    font-size:22px;
    line-height:36px;
}
#error_page a{
    font-size:24px;
    color: green;
    text-decoration: none;
}
#error_page a:hover {
    text-decoration:underline;
}
</style>