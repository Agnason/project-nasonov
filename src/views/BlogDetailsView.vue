<template>
    <div class="blog-details center">
        <div class="blog-details__info">
            <component :is="changeTabs"></component>

        </div>

        <div class="blog-details__tags">
            <h2 class="blog-details__tags__heading textAlignLeft">Tags</h2>


            <div class="blog-details__tags__buttons">

                <button class="blog-details__tags__buttons__btn" @click="currentTab = nameButton"
                    v-for="nameButton in nameButtons" :key="nameButton.id">
                    {{ nameButton }}
                </button>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'BlogdetailsView',

    data() {
        return {
            nameButtons: ['Bathrom', 'Bedroom', 'Kitchen', 'LibingArea'],
            currentTab: 'Kitchen'
        };
    },

    mounted() {

    },
    computed: {
        changeTabs() {
            return `change-${this.currentTab}`;
        }
    },

    methods: {

    },
};
</script>

<style lang="scss" scoped></style>