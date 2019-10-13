<template>
  <aside class="sidenav">
    <div class="sidenav_list">
      <div class="sidenav_item" v-for="i in menus">
        <router-link :to="{name: i.name}" class="sidenav_link">
          <div class="sidenav_icon" v-html="i.meta.icon"></div>
          <span>{{i.meta.title}}</span>
        </router-link>
      </div>
    </div>
  </aside>
</template>

<script>
import routes from "@/router/routers";
export default {
  data() {
    return {
      menus: routes[0].children
    };
  },
  computed: {
    sidebarOpen() {
      return this.$store.state.app.sidebarOpen;
    },
    listLink() {
      return routes[0].children;
    }
  },
  created() {
    // console.log(this.listLink);
  }
};
</script>

<style lang="scss" scoped>
$color: #394362;
$color-d: darken($color, 5%);
$color-l: lighten($color, 7.5%);
.sidenav {
  display: flex; /* Will be hidden on mobile */
  flex-direction: column;
  grid-area: sidenav;
  position: relative;
  background-color: $color;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.sidenav_list {
  padding: 0;
  margin-top: 85px;
  list-style-type: none;
}
.sidebar_close .sidenav_link span{
  display: none;
}
.sidebar_close .sidenav_link .sidenav_icon {
  margin: 0.9em 0;
}
.sidenav_close_icon {
  position: absolute;
  visibility: visible;
  top: 8px;
  right: 12px;
  cursor: pointer;
  font-size: 20px;
  color: #ddd;
}
.sidenav_item {
  color: #ddd;
  min-height: 40px;
}
.sidenav_link {
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.2em;
  padding: 0 1rem;
}
.sidenav_link span{
  padding: 1em
}
.sidenav_icon {
  font-size: 1 em;
  margin-right: 0.2em;
}
.sidenav_link:hover{
  font-weight: bold;
}

.router-link-exact-active{
 color: #fff;
 font-weight: bold;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
}

.sidenav_item:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
}
</style>
