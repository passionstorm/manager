<template>
    <div class="app-root">
        <router-view></router-view>
        <!-- setting drawer -->
        <!-- global snackbar -->
    </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    data() {
      return {
        rightDrawer: false,
        snackbar: {
          show: false,
          text: '',
          color: '',
        },
      };
    },
    created() {
    },
    methods: {},
  };
</script>
<style>
    .container {
        display: flex;
    }
    .item {
        flex-grow: 1;
        height: 100px;
    }
    .item + .item {
        margin-left: 2%;
    }
</style>
