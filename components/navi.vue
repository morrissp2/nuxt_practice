<template>
    <div id='navi'>
        <nuxt-link :class="{active:$route.path=='/'}" to='/'>Home</nuxt-link>
        <nuxt-link :class="{active:$route.path=='/resource'}" :to="{name:'resource'}">Resource</nuxt-link>
        <nuxt-link :class="{active:$route.path=='/ui'}" to='/ui'>UI</nuxt-link>
        <nuxt-link :class="{active:$route.path=='/vuex'}" to='/vuex'>VueX</nuxt-link>
        <nuxt-link :class="{active:$route.path=='/route'}" to='/route'>Route</nuxt-link>
        <nuxt-link :class="{active:$route.path=='/route/my_route'}" :to="{name:'route-my_route'}">Route: my_route</nuxt-link>
    </div>    
</template>

<style scoped>
.active{
    background:#007bff;color:white;
    border-radius:4px;
}  
#navi{
    margin:10px 0px 20px 0px;
    text-align: center;
}
#navi a{
    text-decoration:none;display:inline-block;
    font-size:20px;line-height:24px;
    padding:5px 10px 5px 10px;
}
#navi a:hover{
    background:#007bff;color:white;
    border-radius:4px;
}
</style>
