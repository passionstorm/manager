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
    this.$store.registerModule('dashboard_footer', {
        namespaced: true,
        state () {
          return {
              ngu: 'a',
          }
        },
        actions: {
          clickSave ({ commit, state }) {
             console.log(this.ngu)
          }
        },
    })
    this.$store.subscribeAction((action, state) => {
      console.log("Action Type: ", action.type)
      console.log("Action Payload: ", action.payload)
      console.log("Current State: ", state)
    })
  },
  mounted: function(){
    console.log('mounted', this._inactive, this.item)
  },
  destroyed: function () {
    console.log('destroyed', this._inactive, this.item)
  }
};
</script>

<style scoped>
</style>