<script setup>
import Home from "./components/Home.vue";
</script>

<template>
  <div class="container">
    <nav class="navbar">
      <div class="img-logo">
        <img src="./../assets/shared/logo.svg" alt="">
      </div>
      <hr class="line">
      <div class="nav">
        <div class="nav-options">
          <div class="nav-btn"><a href="">
              <strong> 00</strong> HOME
            </a>
          </div>
          <div class="nav-btn">
            <a href=""><strong>01</strong> DESTINATION</a>
          </div>
          <div class="nav-btn">
            <a href=""><strong>02</strong> CREW</a>
          </div>
          <div class="nav-btn">
            <a href=""><strong>03</strong> TECHNOLOGY</a>
          </div>
        </div>
      </div>
    </nav>
    <home></home>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;

  .navbar {
    position: fixed;
    right: 0rem;
    left: 0;
    top: 3.6rem;
    display: grid;
    grid-template-columns: repeat(19, minmax(0, 1fr));
    align-items: center;

    .img-logo {
      grid-column: 1/3;
      grid-row: 1/1;
      text-align: center;
    }

    .line {
      grid-column: 3/9;
      grid-row: 1/1;
      z-index: 1;
      transform: translateX(5%);
      opacity: 20%;
      width: 100%;
    }

    //min-width: 54rem;
    .nav {
      grid-column: 9/20;
      grid-row: 1/1;
      background: rgba(255, 255, 255, 0.04);
      backdrop-filter: blur(40.7742px);
      justify-content: center;
      display: grid;
      grid-template-columns: repeat(23, minmax(0, 1fr));
      align-items: center;

      .nav-options {
        grid-column: 4/24;
        display: flex;
        gap: 5%;

        .nav-btn {
          letter-spacing: 0.25rem;
          height: 9rem;
          align-items: center;
          display: flex;
          cursor: pointer;
          transition: .3s;

          &:hover {
            box-shadow: inset 0px -0.3rem rgb(204, 204, 204);
          }
          &:active {
            box-shadow: inset 0px -0.3rem white;
          }

          a {
            text-decoration: none;
            color: white;
          }
        }

      }
    }
  }
}
</style>
