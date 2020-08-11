<template>
    <div id="mySidebar" class="sidebar">
        <span class="avatar avatar-lg rounded-circle float-left ml-2" @click="sidebar.openNav()">
            <img alt="Image placeholder" src="img/tbsp.jpg">
        </span>
        <div class="text-uppercase text-warning h1 mr-2 mt-1">
            tbsp.ph
        </div>
        <br>
        <a href="#">Menu</a>
        <a href="#">Contact Us</a>
        <a href="#">About</a>
        <a href="#">Apply Now!</a>
    </div>
</template>
<style>
    .sidebar {
        height: 100%;
        width: 250px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: rgba(77, 31, 3, 0.87);
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
    }

    .sidebar a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        color: #b0820a;
        font-size: 20px;
        display: block;
        transition: 0.3s;
    }

    .sidebar a:hover {
        color: #ffab0f;
    }
</style>
<script>
    export default {
        name: "base-sidebar",
        data() {
            return{
            }
        }
    }
</script>