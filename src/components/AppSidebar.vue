<template>
  <div class="sidenav">
    <div class="sidenav_list">
      <div class="sidenav_list_item" v-for="i in menus">
        <a :href="i.href">{{i.name}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        { name: "Dashboard", href: "#" },
        { name: "Statistics", href: "#" },
        { name: "Milestones", href: "#" },
        { name: "Tickets", href: "#" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
$color: #404040;
$color-d: darken($color, 5%);
$color-l: lighten($color, 7.5%);

.sidenav header span {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 36px;
  margin: 0 10px 0 0;
  vertical-align: middle;
  border: 1px solid #fff;
}
.sidenav .sidenav_list span {
  display: block;
  padding: 15px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  border-bottom: 1px solid $color-d;
}

.sidenav_list_item a {
  position: relative;
  display: block;
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid $color-d;
}

.sidenav_list a:hover,
.sidenav_list a.active {
  background: $color-l;
}

.sidenav {
  display: flex; /* Will be hidden on mobile */
  flex-direction: column;
  grid-area: sidenav;
  background-color: $color;
}

.sidenav .sidenav_list a:hover,
.sidenav .sidenav_list a:active {
  background: $color-l;
}

.sidenav_list {
  padding: 0;
  margin-top: 85px;
  list-style-type: none;
}
.sidenav_list_item {
  color: #ddd;
  padding: 0 16px;
  min-height: 40px;
}

.sidenav_list_item:not(:last-child):not(:only-child){
  margin-bottom: 4px;
}

.sidenav_list-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
</style>
