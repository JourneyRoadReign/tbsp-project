<template>
    <div id="mySidebar" class="sidebar" @mouseover="sidebar.openNav()" @mouseleave="sidebar.closeNav()">
        <span class="avatar avatar-lg rounded-circle float-left ml-2">
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
        width: 10px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: rgba(77, 31, 3, 0.87);
        overflow-x: hidden;
        transition: 1s;
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
                sidebar: {
                    sidebarStatus: true,
                    openNav() {
                        document.getElementById("mySidebar").style.width = "250px";
                        document.getElementById("content").style.marginLeft = "250px";
                        document.getElementById("main-content").style.marginLeft = "250px";
                    },
                    closeNav() {
                        document.getElementById("mySidebar").style.width = "10px";
                        document.getElementById("mySidebar").style.color = "brown";
                        document.getElementById("content").style.marginLeft= "0px";
                        document.getElementById("main-content").style.marginLeft= "0px";
                    },
                    sidebarOpenClose(status) {
                        if(status === true){
                            this.closeNav()
                            this.sidebarStatus = false
                        } else {
                            this.openNav()
                            this.sidebarStatus = true
                        }
                    }
                }
            }
        }
    }
</script>