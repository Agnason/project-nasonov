<template>
    <!-- header -->
    
    <div class="header center">
        <div class="header_logo">
            <img :src="header.imgSrc" :alt="header.imgAlt">
            <a :href=header.logoLink> {{ header.logoText }}</a>
        </div>
        <div class="header_menubar">
            <router-link to="/">Home</router-link>
            <router-link to="/project">Project</router-link>
            <router-link to="/blog">Blog</router-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'HeaderComp',

    data() {
        return {

        };
    },
    computed: {
        ...mapState(['header'])
    }

};
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

a {
    text-decoration: none;
}


.center {
    padding-left: calc(50% - $widthSite-laptop-center);
    padding-right: calc(50% - $widthSite-laptop-center);
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 44px;
    margin-bottom: 57px;

    &_logo {
        display: flex;
        align-items: center;
        gap: 10px;

        & a {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 40px;
            line-height: 125%;
            color: $colorHeader
        }
    }

    &_menubar {
        display: flex;
        align-items: center;
        gap: 45px;

        & a {
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 125%;
            color: $colorHeader;
        }
    }

}
</style>