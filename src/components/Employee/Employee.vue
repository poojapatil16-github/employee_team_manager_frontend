
<template>
  <div id="app" class="container ">
    <header class="jumbotron">
      <h3>Welcome to Employee dashboard</h3>
    </header>
          <button type="button" class="btn btn-dark mr-3" ><router-link :to="{ name: 'CreateEmployee' }">Add Employee</router-link></button>

          <button type="button" class="btn btn-dark" ><router-link :to="{ name: 'ShowEmployee' }">View Employee</router-link></button>

    <transition name="fade">
      <div class="gap">
        <router-view></router-view>        
      </div>
    </transition>
  </div>
</template>

<script>

export default {
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .gap {
      margin-top: 50px;
    }
</style>