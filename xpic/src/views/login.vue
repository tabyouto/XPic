<template>
  <div class="">
    <div class="col-md-4 col-md-offset-4 form-wrap">
      <form class="form">
        <h3 class="text-center">Login</h3>
        <div class="form-group">
          <input id="email" class="form-control" placeholder="email" type="email">
          <br>
          <input id="password" class="form-control" type="password" placeholder="password">
        </div>
        <button type="button" class="btn btn-default btn-block btn-login">登录</button>
      </form>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
