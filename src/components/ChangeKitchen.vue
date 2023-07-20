<template>
    <div class="project center">
        <ProjectItem :item="project" v-for="project in kitchens" :key="project.id">

        </ProjectItem>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProjectItem from './ProjectItem.vue';

export default {
    name: "ChangeKitchen",

    components: {
        ProjectItem
    },
    data() {
        return {
           
        };
    },
    mounted() {
    },
    computed: {
        ...mapState(['kitchens'])
    }

};
</script>

<style lang="scss" scoped>
.project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 104px;
    margin-bottom: 96px;
}
</style>