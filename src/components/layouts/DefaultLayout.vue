<template>
  <div class="app_container">
    <app-header />
    <app-sidebar />
    <app-main />
    <app-footer />
  </div>
</template>

<script>
import AppSidebar from "@/components/AppSidebar";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppMain from "@/components/AppMain";

export default {
  components: {
    AppSidebar,
    AppHeader,
    AppFooter,
    AppMain
  },
  data() {
    return {
      showDrawer: true
    };
  },
  methods: {
    handleDrawerVisiable() {
      this.showDrawer = !this.showDrawer;
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
$color: #404040;
$color-d: darken($color, 5%);
$color-l: lighten($color, 7.5%);
$width_sidenav: 260px;
$height_header: 50px;
$height_footer: 50px;

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  content: "";
  display: block;
  position: absolute;
}

html,
body {
  height: 100%;
}
body {
  font: 15px/1 "Open Sans", sans-serif;
  color: #777;
}

a {
  cursor: pointer;
}

.app_container {
  display: grid;
  grid-template-columns: $width_sidenav 1fr;
  grid-template-rows: $height_header 1fr $height_footer;
  grid-template-areas:
    "sidenav header"
    "sidenav main"
    "sidenav footer";
  height: 100vh;
}

.app_header {
  grid-area: header;
  background-color: #648ca6;
}
.app_header,
.app_footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: #648ca6;
}


/* Non-mobile styles, 750px breakpoint */
@media only screen and (min-width: 46.875em) {
  /* Show the sidenav */
  .grid-container {
    grid-template-columns: 240px 1fr; /* Show the side nav for non-mobile screens */
    grid-template-areas:
      "sidenav header"
      "sidenav main"
      "sidenav footer";
  }
  .sidenav {
    display: flex;
    flex-direction: column;
  }
}
/* Medium-sized screen breakpoint (tablet, 1050px) */
@media only screen and (min-width: 65.625em) {
  /* Break out main cards into two columns */
  .main-cards {
    column-count: 2;
  }
}
</style>
