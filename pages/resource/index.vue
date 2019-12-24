<template>
    <div id='resource'>
        <img src='~/assets/asset.png'/>
        <hr/>
        <img :src='image[1]'/>
        <hr/>
        <!-- <div id='frame'></div> -->
    </div>

</template>

<script>
export default {
  head(){
    return{
    title: 'Resources Page',
    meta: [
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    }
  },    data(){
        return{
            image: [
                '~/assets/asset.png',
                '/static.png'
            ]
        }
    }
}
</script>

<style scoped>
#resource{text-align:center;}
#frame{
    margin:0 auto;width:300px;height:225px;
    background-image:url('/static.png')
}
</style>