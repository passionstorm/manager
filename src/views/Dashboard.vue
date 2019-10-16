<template>
  <div>
    <div class="cards">
      <Card>saccasjj</Card>
    </div>
    <button type="button" >Click here</button>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import {bus} from '@/main'
export default {
  components:{
  },
  methods:{
  },
  data(){
    return{
        abc: 'ngu',
    }
  },
  computed: {
    ...mapState('dashboard_footer', ['ngu']),
  },
  created() {
    this.$emit('slot-footer', () => import('_c/SlotContent'));
    bus.$on('click_save', (data) => {
      console.log('x');
    })
  },
  mounted: function(){
    console.log('mounted', this._inactive, this.item)
  },
  destroyed: function () {
    console.log('destroyed', this._inactive, this.item)
  },
  activated: function(){
    console.log('activated', this._inactive, this.item)
  },
  deactivated: function(){
    console.log('deactivated', this._inactive, this.item)
  },
};
</script>

<style scoped>
</style>