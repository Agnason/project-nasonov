<template>
    <div>

        <div class="banner center">
            <img class="center" :src=homeView.banner.imgSrc :alt=homeView.banner.imgAlt>
            <div class="banner_sub-content">
                <h3 class="banner_sub-content_title">{{ homeView.banner.title }}</h3>
                <p class="text"> {{ homeView.banner.text }}</p>
                <button class="banner_sub-content_btn">
                    <p>Get started</p>
                    <img :src=homeView.banner.imgButton :alt=homeView.banner.imgAltButton>
                </button>
            </div>

        </div>
        <!-- заголовок -->
        <div class="center">
            <div class="caption">
                <h3 class="heading">Follow Our Projects</h3>
                <p class="text">It is a long established fact that a reader will be distracted by the of readable content of
                    page lookings at its layouts points.</p>
            </div>

        </div>

        <div class="project center">
            <div class="project__item" v-for="item in homeView.projectItems" :key="item.id">
                <img class="project__item-img" :src=item.imgSrc :alt=item.imgAlt>
                <div class="project__item-bottom">
                    <div class="project__item-bottom-left">
                        <h2 class="project__item-bottom-heading">Modern Kitchan</h2>
                        <p class="project__item-bottom-text">Decor / Artchitecture</p>
                    </div>

                    <img :src=item.imgSrcIcon :alt=item.imgAltIcon class="project__item-bottom-icon">
                </div>

            </div>

        </div>
        <!-- счетчик -->
        <div class="wrapper">
            <div class="counter center">
                <!-- years of experiance -->
                <div class="counter__block">
                    <h1 class="counter__block-title">12</h1>
                    <p class="counter__block-text">Years Of Experiance</p>
                </div>
                <!-- success project -->
                <div class="counter__block">
                    <h1 class="counter__block-title">85</h1>
                    <p class="counter__block-text">Success Project</p>
                </div>
                <!-- active project -->
                <div class="counter__block">
                    <h1 class="counter__block-title">15</h1>
                    <p class="counter__block-text">Active Project</p>
                </div>
                <!-- happy customers -->
                <div class="counter__block withoutLine ">
                    <h1 class="counter__block-title">95</h1>
                    <p class="counter__block-text">Happy CUstomers</p>
                </div>
            </div>
        </div>
        <!-- заголовок -->
        <div class="center">
            <div class="caption">
                <h3 class="heading">Articles & News</h3>
                <p class="text">It is a long established fact that a reader will be distracted by the of readable content of
                    a page when lookings at its
                    layouts the points of using.</p>
            </div>

        </div>

        <!-- секция блога -->
        <div class="blog center">

            <div class="blog__wrapper" v-for="item in homeView.blogItems" :key="item.id">
                <div class="blog__item">

                    <img :src=item.imgSrc :alt=item.imgAlt class="blog__item-img">
                    <h3 class="blog__item-title">{{ item.title }}</h3>

                    <div class="project__item-bottom">
                        <div class="project__item-bottom-left">

                            <p class="project__item-bottom-text">{{ item.date }}</p>
                        </div>

                        <img :src=item.imgSrcIcon :alt=item.imgAltIcon class="project__item-bottom-icon">
                    </div>
                    <!-- кнопка-тэг -->
                    <button class="blog__item-btn">{{ item.btnText }}</button>
                </div>
            </div>
        </div>

       

    </div>
</template>


<script>

import { mapState } from 'vuex';

export default {
    name: 'HomeView',


    data() {
        return {

        };
    },

    mounted() {

    },
    computed: {
        ...mapState(['homeView'])
    },

    methods: {

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
$colorBlock: #CDA274;


* {
    margin: 0px;
    padding: 0px;
}

a {
    text-decoration: none;
}

.center {
    padding-left: calc(50% - $widthSite-laptop-center);
    padding-right: calc(50% - $widthSite-laptop-center);
}

.text {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: $colorText;
    text-align: center;
}

.heading {
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 125%;
    color: $colorHeader;
    text-align: center;
}

.caption {
    display: flex;
    margin-left: 232px;
    margin-right: 232px;
    margin-bottom: 96px;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
}

.banner {
    position: relative;
    margin-bottom: 96px;

    & img {
        max-width: 100%;
        height: auto;

    }

    &_sub-content {
        position: absolute;
        top: 208px;
        margin: 52px;

        width: 434px;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;

        &_title {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 65px;
            line-height: 125%;
        }

        &_btn {
            background: #292F36;
            box-shadow: 0px 10px 20px rgba(192, 192, 192, 0.35);
            border-radius: 18px;
            padding: 26px 49px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;

            & p {
                font-family: 'Jost';
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 125%;
                letter-spacing: 0.02em;
                color: $colorWhite;
            }

        }
    }
}

.project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 104px;
    margin-bottom: 96px;

    &__item {
        display: flex;
        flex-direction: column;
        gap: 28px;

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

            &-text {
                font-family: 'Jost';
                font-style: normal;
                font-weight: 400;
                font-size: 22px;
                line-height: 150%;
                color: $colorText;
            }
        }
    }
}

.wrapper {
    background-color: $colorBackground;
    margin-bottom: 96px;
}

.counter {
    display: flex;
    padding-top: 151px;
    padding-bottom: 151px;

    &__block {
        display: flex;
        padding-right: 60px;
        padding-left: 60px;
        border-right: 1px solid #CDA274;
        flex-wrap: wrap;
        justify-content: center;

        &-title {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 85px;
            line-height: 125%;
            color: $colorBlock;
        }

        &-text {
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 150%;
            color: $colorText;
        }
    }
}

.withoutLine {
    border: none;
}

.blog {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 96px;

    &__wrapper {
        border-radius: 45px 45px 0px 0px;
        border: 1px solid #EAEAEA;
        padding: 20px;
    }

    &__item {
        position: relative;
        display: flex;
        flex-direction: column;

        &-title {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 30px;
            line-height: 125%;
            color: $colorHeader;
            width: 305px;
            margin-top: 30px;
            margin-bottom: 30px;
        }

        &-btn {
            position: absolute;
            background: $colorWhite;
            border-radius: 8px 8px 8px 0px;
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            color: $colorText;
            padding: 5px;
            top: 240px;
            left: 21px;

        }
    }
}
</style>