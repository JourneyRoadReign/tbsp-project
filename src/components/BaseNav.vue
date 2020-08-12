<template>
    <nav class="bg-warning navbar navbar-expand-lg navbar-light navbar-nav mr-auto main" id="nav">
        <span class="avatar avatar-lg rounded-circle float-left">
            <img alt="Image placeholder" src="img/tbsp.jpg">
        </span>
        <div class="collapse navbar-collapse ml-3 " id="navbarNavDropdown">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="kimchi">
                        <a class="nav-link text-uppercase" style="font-size: medium"><b> Kimchi </b> </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <div class="nav-link dropdown text-uppercase font-weight-bold text-white" style="font-size: medium">
                        <span>Empanada</span>
                        <div class="dropdown-content">
                            <router-link to="empanada">
                                <div class="text-warning">Chicken</div>
                            </router-link>
                            <router-link to="ham-and-cheese">
                                <div class="text-warning">Ham & Cheese</div>
                            </router-link>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <router-link to="kimbap">
                        <a class="nav-link text-uppercase" ><b> Kimbap </b></a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="chicken-wings">
                        <a class="nav-link text-uppercase" ><b> Chicken Wings </b></a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <span class="nav-link text-uppercase text-white" id="sagyupsal" style="font-size: medium">
                        <b>
                            Samgyupsal
                        </b>
                    </span>
                    <b-tooltip variant="warning" placement="right" target="sagyupsal" triggers="hover">
                        Coming Soon!
                    </b-tooltip>
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
        data() {
            return {
            }
        }
    }
</script>
<style>
    .navbar ul li a b{
        font-size: medium;
        color: white;
        padding: 25px;
        border-radius: 25px;
    }
    .navbar ul li a b:hover {
        background-color: white;
        color: #ffc107;
    }
    .drop:hover {
        font-size: medium;
        color: white;
        padding: 25px;
        border-radius: 25px;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 200px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        z-index: 1;
        border-radius: 10px;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }
</style>