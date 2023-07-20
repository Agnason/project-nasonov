<template>
   <div>

      <div class="btnNav center">

         <button @click="currentTab = nameButton.name" v-for="nameButton in nameButtons" :key="nameButton.id" :class="{
            active: nameButton.isActive,
            'btnNav-item': nameButton.isNonActive
         }">
            {{ nameButton.text }}
         </button>
      </div>
      <component class="component" :is="changeTabs"></component>



   </div>
</template>

<script>


import ChangeBedroom from '@/components/ChangeBedroom.vue';
import ChangeKitchen from '@/components/ChangeKitchen.vue';
import ChangeBathroom from '@/components/ChangeBathroom.vue';
import ChangeLivingArea from '@/components/ChangeLivingArea.vue';


export default {
   name: 'App',
   components: {

      ChangeBedroom,
      ChangeKitchen,
      ChangeBathroom,
      ChangeLivingArea
   },
   data() {
      return {
         nameButtons: [
            { name: 'Bathroom', text: 'Bathroom', isActive: false, isNonActive: true },
            { name: 'Bedroom', text: 'Bedroom', isActive: false, isNonActive: true },
            { name: 'Kitchen', text: 'Kitchen', isActive: false, isNonActive: true },
            { name: 'LivingArea', text: 'Living Area', isActive: false, isNonActive: true }
         ],
         currentTab: 'Bedroom',


      };
   },
   computed: {
      changeTabs() {
         return `Change${this.currentTab}`;
      },

   },
   methods: {
      isClicked(nameButton) {
         //    let btnAll = document.querySelectorAll('.active');

         //    btnAll.forEach(element => {
         //    element.isActive=false
         // });
         nameButton.isActive = true;
         nameButton.isNonActive = false
      }
   },
}
</script>

<style lang="scss">
$widthSite-laptop: 1201px;
$widthSite-laptop-center: $widthSite-laptop / 2;
$colorHeader: #292F36;
$colorText: #4D5053;
$colorWhite: #FFFFFF;
$colorBackground: #F4F0EC;
$colorCounterBlock: #CDA274;
$colorBlock: #F4F0EC;

* {
   margin: 0px;
   padding: 0px;
}

.active {
   padding: 26px 66px 26px 66px;
   background-color: $colorCounterBlock;
   border-color: $colorWhite;
   border-radius: 18px;
   color: $colorWhite;
   border: none;
}

.center {
   padding-left: calc(50% - $widthSite-laptop-center);
   padding-right: calc(50% - $widthSite-laptop-center);
}

.btnNav {
   border: 2px solid $colorCounterBlock;
   margin-bottom: 60px;
   width: 800px;
   display: block;
   margin: auto;
   border-radius: 18px;


   &-item {
      padding: 26px 66px 26px 66px;
      background-color: $colorWhite;
      border-color: $colorWhite;
      border-radius: 18px;
      border: none;

      &:hover {
         background-color: $colorCounterBlock;
         color: $colorWhite;
      }


   }
}
.component {
   margin-top: 60px;
}
</style>
