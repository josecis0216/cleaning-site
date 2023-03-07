<template>
    <section>
        <header-nav />
            <post-list :posts="loadedPosts" />
        <footer-nav />
    </section>
</template>


<script>
import HeaderNav from '@/components/Nav/HeaderNav.vue';
import FooterNav from '@/components/Nav/FooterNav.vue';
import PostList from '@/components/Posts/PostList.vue';

export default {
    components: {
        HeaderNav,
        FooterNav,
        PostList,
    },
    computed: {
        loadedPosts() {
            return this.$store.getters.loadedPosts;
        }
    }
}
</script>