<template>
  <aside class="sidenav">
    <div class="sidenav_list">
      <div class="sidenav_item" v-for="i in menus">
        <a class="sidenav_link" :href="i.href">
          <i class="sidenav_icon" :class="i.icon"></i>
          <p>{{i.name}}</p>
        </a>
      </div>
    </div>
  </aside>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        { name: "Dashboard", href: "#", icon: "fas fa-th" },
        { name: "Statistics", href: "#", icon: "fas fa-edit" },
        { name: "Milestones", href: "#", icon: "fas fa-copy" },
        { name: "Tickets", href: "#", icon: "fas fa-copy" }
      ]
    };
  },
   computed:{
    sidebarOpen(){
      return this.$store.state.app.sidebarOpen
    }
  },
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
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)
}
.sidenav_list {
  padding: 0;
  margin-top: 85px;
  list-style-type: none;
}
.sidebar_close .sidenav_link p{
  display: none;
}
.sidebar_close .sidenav_link .sidenav_icon{
  margin: 1.1em 0;
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
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  color: #fff;
  margin-bottom: 0.2rem;
  padding: 0.5rem 1rem;
}
.sidenav_link p {
  display: inline-block;
}
.sidenav_icon {
  font-size: 1.1rem;
  margin-right: 0.2rem;
  text-align: center;
  width: 1.6rem;
}
.sidenav_item:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
</style>
