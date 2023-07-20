<template>
    <div class="project__item">
        <img @click="starClick" class="project__item-img" :src=item.imgSrc :alt=item.altSrc>
        <img v-if="isClicked" class="project__item-star" src="../assets/Star.png">
        <div class="project__item-bottom">
            <div class="project__item-bottom-left">
                <h2 class="project__item-bottom-heading"> {{ item.title }}</h2>
                <p class="project__item-bottom-text">{{ item.text }}</p>
            </div>

            <router-link to="/blogdetails"><img :src=item.imgIconSrc :alt=item.imgIconAlt class="project__item-bottom-icon"> </router-link>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectItem',
    props: {
        item: {
            type: Object,
            required: true,
            default: () => ({
                id: Number,
                imgSrc: String,
                altSrc: String,
                title: String,
                text: String,
                imgIconSrc: String,
                imgIconAlt: String
            }),

        }
    },
    data() {
        return {
            isClicked: false
        };
    },

    mounted() {

    },

    methods: {
        starClick() {
            this.isClicked = !this.isClicked;
        }
    },
};
</script>

<style lang="scss" scoped>
$widthSite-laptop: 1201px;
$widthSite-laptop-center: $widthSite-laptop / 2;
$colorHeader: #292F36;
$colorText: #4D5053;
$colorWhite: #FFFFFF;
$colorBackground: #F4F0EC;
$colorCounterBlock: #CDA274;
$colorBlock: #F4F0EC;

.center {
    padding-left: calc(50% - $widthSite-laptop-center);
    padding-right: calc(50% - $widthSite-laptop-center);
}


.project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 104px;
    margin-bottom: 96px;


    &__item {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 28px;

        &-img {
            width: 100%;
        }

        &-star {
            position: absolute;
            right: 10px;
        }

        &-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &-left {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            &-heading {
                font-family: 'DM Serif Display';
                font-style: normal;
                font-weight: 400;
                font-size: 25px;
                line-height: 125%;
                color: $colorHeader;
            }

        }
    }
}
</style>