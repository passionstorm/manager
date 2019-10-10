<template>
    <div class="app-container">
        <app-header/>
        <app-sidebar/>
        <app-footer/>
    </div>
</template>

<script>
  import AppSidebar from '@/components/AppSidebar';
  import AppHeader from '@/components/AppHeader';
  import AppFooter from '@/components/AppFooter';

  export default {
    components: {
      AppSidebar,
      AppHeader,
      AppFooter,
    },
    data() {
      return {
        showDrawer: true,
      };
    },
    methods: {
      handleDrawerVisiable() {
        this.showDrawer = !this.showDrawer;
      },
    },
    created() {
    },
  };
</script>

<style scoped>
    .app-container {
        display: grid;
        grid-template-columns: 240px 1fr;
        grid-template-rows: 50px 1fr 50px;
        grid-template-areas: "sidenav header" "sidenav main" "sidenav footer";
        height: 100vh;
    }

    .app-header {
        grid-area: header;
        background-color: #648ca6;
    }

    .app-sidebar {
        grid-area: sidenav;
        background-color: #394263;
    }

    .app-header, .app-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        background-color: #648ca6;
    }
</style>
