<template>
  <div
    class="app_container"
    :class="{'sidebar_close': !sidebarOpen}"
  >
    <app-header>
      <component :is="slotHeader"></component>
    </app-header>
    <app-sidebar />
    <main>
      <router-view
        @slot-footer="slot => slotFooter = slot"
        @slot-header="slot => slotHeader = slot"
      />
    </main>
    <app-footer>
      <component :is="slotFooter"></component>
    </app-footer>
    <div
      class="sidebar_overlay"
      @click="sidebarOverlayClick"
    ></div>
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
      showDrawer: true,
      slotFooter: null,
      slotHeader: null
    };
  },
  computed: {
    sidebarOpen() {
      return this.$store.state.app.sidebarOpen;
    }
  },
  watch: {},
  methods: {
    sidebarOverlayClick() {
      this.$store.dispatch("toggleSidebar");
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
$width_sidenav: 250px;
$height_header: 50px;
$height_footer: 70px;
$min_width_display_sidenav: 46.875em;
$width_sidenav_close: $width_sidenav - 190px;

main {
  padding: 15px 0.5rem;
  overflow: scroll;
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
.sidebar_overlay {
  background-color: rgba(0, 0, 0, 0.1);
  bottom: 0;
  display: block;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9;
}
.app_container {
  display: grid;
  grid-template-rows: $height_header 1fr $height_footer;
  grid-template-areas:
    "header"
    "main"
    "footer";
  height: 100vh;
  background: #f4f6f9;
  transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out;
}
.sidenav {
  position: fixed;
  height: 100vh;
  z-index: 10;
  width: $width_sidenav;
  transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out;
}

.sidebar_close .sidenav {
  width: $width_sidenav_close;
  transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out;
}

.sidebar_close .sidenav {
  display: none;
}

.sidebar_close .sidebar_overlay {
  display: none;
}

.app_container.sidebar_close {
  grid-template-columns: 1fr; /* Side nav is hidden on mobile */
}

.app_header {
  grid-area: header;
}
.app_header,
.app_footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.disabled {
  color: grey;
  pointer-events: none;
  text-decoration: blink;
}



/* Non-mobile styles, 750px breakpoint */
@media only screen and (min-width: $min_width_display_sidenav) {
  .app_container.sidebar_close {
    grid-template-columns: $width_sidenav_close 1fr;
    grid-template-areas:
      "sidenav header"
      "sidenav main"
      "sidenav footer";
    transition: all 1s ease-in-out;
  }
  .app_container {
    grid-template-columns: $width_sidenav 1fr; /* Show the side nav for non-mobile screens */
    grid-template-areas:
      "sidenav header"
      "sidenav main"
      "sidenav footer";
  }
  .sidebar_close .sidenav {
    display: block;
  }
  .sidebar_overlay {
    display: none;
  }
  .sidenav {
    display: flex;
    position: relative;
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
