<template>
    <!-- banner -->
    <div class="banner">
        <img class="banner__blog-img" :src=item.imgSrc :alt=item.altSrc>
        <div class="intro">
            <h3 class="heading">{{ item.title }}</h3>
            <p class="text">{{ item.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BannerComp',
    props: {
        item: {
            type: Object,
            required: true,
            default: () => ({
                imgSrc: String,
                altSrc: String,
                title: String,
                text: String,
            })
        }
    },
    data() {
        return {

        };
    },

    mounted() {

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
$colorCounterBlock: #CDA274;
$colorBlock: #F4F0EC;



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

.banner {
    position: relative;
    margin-bottom: 96px;

    & img {
        max-width: 100%;
        height: auto;

    }

    &__blog-img {
        width: 100%;
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
.intro {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 37px 37px 0px 0px;
    background: $colorWhite;
    top: 41%;
    left: 35%;
    padding: 41px 78px;


}
</style>