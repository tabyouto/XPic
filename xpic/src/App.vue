<template>
  <div>
    <router-view></router-view>
    <!--<router-view class="content-view" name="content_view"></router-view>-->
    <!--<router-view class="login-view" name="login_view"></router-view>-->
  </div>

</template>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        },
        ready() {
          console.log(1);
        }
    }
</script>
