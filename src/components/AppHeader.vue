<template>
    <header class="app_header">
        <div class="header__search">Search...</div>
        <div class="header__avatar">Your face</div>
    </header>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Home',
        breadcrumbs: [],
      };
    },
    watch: {
      '$route.path': function(newVal) {
        this.computeBreadcrumbs();
      },
    },
    methods: {
      computeBreadcrumbs() {
        let breadcrumbs = [
          {
            text: 'Home',
            href: '/',
            disabled: false,
          },
        ];
        let appends = [];
        // appends = this.$route.matched.map(item => {
        //   return {
        //     text: item.meta.title || '',
        //     href: item.path || '/',
        //     disabled: item.path === this.$route.path,
        //   };
        // });
        this.breadcrumbs = breadcrumbs.concat(appends);
      },
    },
    created() {
      this.computeBreadcrumbs();
    },
  };
</script>
<style scoped>
    .disabled {
        color: grey;
        pointer-events: none;
        text-decoration: blink;
    }
</style>
