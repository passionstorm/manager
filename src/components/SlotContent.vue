<template>
    <div>
      <button class="btn" @click="test">click</button>
        <button>back</button>
    </div>
</template>

<script>
import {bus} from '@/main'
export default {
   methods:{
       test(){
            bus.$emit('click_save','me');
        }
   }    
}
</script>

<style>

</style>