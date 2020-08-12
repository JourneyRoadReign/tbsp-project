<template>
    <nav class="bg-warning navbar navbar-expand-lg navbar-light navbar-nav mr-auto main" id="nav">
        <span class="avatar avatar-lg rounded-circle float-left">
            <img alt="Image placeholder" src="img/tbsp.jpg">
        </span>
        <div class="collapse navbar-collapse ml-3 " id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link text-white text-uppercase" href="#" style="font-size: medium"><b> Kimchi </b> </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white text-uppercase" href="#" style="font-size: medium"><b> Empanda </b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white text-uppercase" href="#" style="font-size: medium"><b> Kimbap </b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white text-uppercase" href="#" style="font-size: medium"><b> Chicken Wings </b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white text-uppercase disabled" href="#" style="font-size: medium"><b> Samgyupsal </b></a>
                </li>
            </ul>
        </div>
<!--        <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">-->
<!--            <div class="form-group mb-0">-->
<!--                <base-input placeholder="Search"-->
<!--                            class="input-group-alternative"-->
<!--                            alternative=""-->
<!--                            addon-right-icon="fas ">-->
<!--                </base-input>-->
<!--            </div>-->
<!--        </form>-->
    </nav>
</template>
<script>
    // import BaseInput from "./BaseInput";
    export default {
        name: "base-nav",
        // components: {BaseInput}
    }
</script>
<style>
    .navbar-link:hover {
        background: rgba(79, 31, 3, 0.8);
    }
</style>