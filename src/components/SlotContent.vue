<template>
    <div>
      <button @click="test">click</button>
        <button>back</button>
    </div>
</template>

<script>
export default {
        
   methods:{
       test(){
            this.$store.dispatch("dashboard_footer/clickSave");
       }
   }    
}
</script>

<style>

</style>