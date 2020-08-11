<template>
    <nav class="bg-warning navbar navbar-expand-lg navbar-light navbar-nav mr-auto main" id="nav">
        <span class="avatar avatar-lg rounded-circle float-left">
            <img alt="Image placeholder" src="img/tbsp.jpg">
        </span>
        <div class="collapse navbar-collapse ml-3 " id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
            </ul>
        </div>
        <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <div class="form-group mb-0">
                <base-input placeholder="Search Menu"
                            class="input-group-alternative"
                            alternative=""
                            addon-right-icon="fas fa-search">
                </base-input>
            </div>
        </form>
    </nav>
</template>
<script>
    import BaseInput from "./BaseInput";
    export default {
        name: "base-nav",
        components: {BaseInput}
    }
</script>
<style>
    nav{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
</style>