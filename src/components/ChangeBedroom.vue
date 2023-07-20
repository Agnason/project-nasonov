<template>
    <div class="project center">
        <ProjectItem :item="project" v-for="project in bedrooms" :key="project.id">

        </ProjectItem>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProjectItem from './ProjectItem.vue';

export default {
    name: "ChangeBedroom",

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
        ...mapState(['bedrooms'])
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