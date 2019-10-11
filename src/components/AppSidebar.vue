<template>
  <aside class="sidenav">
    <div class="sidenav_list">
      <div class="sidenav_item" v-for="i in menus">
        <a
          class="sidenav_link"
          :href="i.href"
        >
          <i
            class="sidenav_icon"
            :class="i.icon"
          ></i>
          <p> {{i.name}}</p>
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
  }
};
</script>
<style lang="scss" scoped>
$color: #343a40;
$color-d: darken($color, 5%);
$color-l: lighten($color, 7.5%);

.sidenav {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22) !important;
}

.sidenav header span {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 36px;
  margin: 0 10px 0 0;
  vertical-align: middle;
  border: 1px solid #fff;
}

.sidenav {
  display: flex; /* Will be hidden on mobile */
  flex-direction: column;
  grid-area: sidenav;
  background-color: $color;
}

.sidenav_list {
  padding: 0;
  margin-top: 85px;
  list-style-type: none;
}

.sidenav_item {
  color: #ddd;
  padding: 0 16px;
  min-height: 40px;
}

.sidenav_link {
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  color: #c2c7d0;
  margin-bottom: .2rem;
  padding: .5rem 1rem;
}


.sidenav_link:hover{

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
