<script setup>
import { onMounted } from "@vue/runtime-core";


onMounted(() => {

})
</script>

<template>
    <main class="content">
        <section class="text-side">
            <div class="text">
                <h1 class="slogan">SO, YOU WANT TO TRAVEL TO</h1>
                <div class="title-home">SPACE</div>
                <div class="description">Let's face it; if you want to go to space, you might as well genuinely go
                    to
                    outer
                    space and not hover kind of on the
                    edge of it. Well sit back, and relax because we'll give you a truly out of this world
                    experience!
                </div>
            </div>
        </section>
        <section class="explore-side">
            <router-link to="/space-tourism-frontend-mentor/destination"><button class="btn-explore">EXPLORE</button>
            </router-link>
        </section>
    </main>
</template>

<style lang="scss" scoped>

</style>
