<template>
    <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <button 
                @click="showMenu = !showMenu"
                class="navbar-toggler">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div :class="{ show: showMenu }"
                @click="showMenu = !showMenu"
                class="collapse navbar-collapse"
                id="navbarTogglerDemo01">
                <router-link class="navbar-brand" to="/">Stock Trader</router-link>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <router-link class="nav-item" activeClass="active" tag="li" to="/portfolio">
                        <a class="nav-link">Portfolio</a>
                    </router-link>
                    <router-link class="nav-item" activeClass="active" tag="li" to="/stocks">
                        <a class="nav-link">Stocks</a>
                    </router-link>
                </ul>
                <ul class="navbar-nav my-2 my-lg-0">
                    <li class="nav-item">
                        <a class="nav-link">End Day</a>
                    </li>
                    <li class="nav-item dropdown" 
                            @mouseenter.self="showDropMenu = true"
                            @mouseleave="showDropMenu = false">
                            <a class="nav-link dropdown-toggle"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >
                                Save & Load
                            </a>
                            <transition name="slide-fade">
                                <div v-if="showDropMenu"
                                    class="dropdown-menu show"
                                    aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Save Data</a>
                                    <a class="dropdown-item" href="#">Load Data</a>
                                </div>
                            </transition>
                    </li>
                </ul>
            </div>
        </nav>
        <div :class="{'in': isActve}" class="main container">
            <div class="row">
                <div class="col-md-12">
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    isActve: boolean = false;
    showDropMenu: boolean = false;
    showMenu: boolean = false;
}
</script>

<style scoped>
.main {
  padding-top: 60px;
}

pre {
  tab-size: 8;
}

@media screen and (max-width: 768px) {
  .side-collapse-container {
    width: 100%;
    position: relative;
    left: 0;
    transition: left 0.4s;
  }
  .side-collapse-container.in {
    left: 200px;
  }
  .side-collapse {
    top: 60px;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 200px;
    position: fixed;
    overflow: hidden;
    transition: width 0.4s;
  }
  .side-collapse.out {
    width: 0;
  }
  .panel.in {
    width: 100%;
    display: block;
  }

  .pull-left {
    margin-left: 5px;
  }
}

.panel {
  display: none;
  top: 50px;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 0;
  opacity: 0;
  position: fixed;
  overflow: hidden;
  transition: width 0.4s;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(1px);
  opacity: 0;
}
</style>
