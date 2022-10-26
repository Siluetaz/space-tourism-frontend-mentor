<script setup>

</script>

<template>
    <div class="background"></div>
    <div class="content">
        <div class="text-side">
            <div class="text">
                <div class="slogan">SO, YOU WANT TO TRAVEL TO</div>
                <div class="title">SPACE</div>
                <div class="description">Let's face it; if you want to go to space, you might as well genuinely go to
                    outer
                    space and not hover kind of on the
                    edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
                </div>
            </div>
        </div>
        <div class="explore-side">
            <button class="btn-explore">EXPLORE</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content {
    display: flex;
    color: white;
    height: 80%;
    align-items: flex-end;
    justify-content: space-around;

    .text-side {
        .text {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .slogan {
                font-size: 28px;
                letter-spacing: 4.72px;
            }

            .title {
                font-family: 'Bellefair';
                font-size: 150px;
                margin-bottom: 1rem;
            }

            .description {
                font-family: 'Barlow';
                font-size: 18px;
                letter-spacing: 0.1rem;
                width: 45rem;
            }
        }
    }

    .explore-side {
        .btn-explore {
            width: 22rem;
            height: 22rem;
            border-radius: 900px;
            font-family: 'Bellefair';
            font-size: 2rem;
            letter-spacing: 0.2rem;
            border: none;
            background-color: white;


            cursor: pointer;
        }

        &:hover {
            border-radius: 900px;
            animation: hover-btn-explore 0.5s forwards;

        }
    }
}

.background {
    width: 100%;
    height: 100%;
    background-image: url(./../../assets/home/background-home-desktop.jpg);
    background-size: cover;
    position: absolute;
    z-index: -1;
}

</style>
