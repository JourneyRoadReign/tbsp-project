<template>
    <div>
        <base-sidebar id="mySidebar"/>
        <div id="content" class="main bg-warning">
            <base-nav class="navbar-top navbar-horizontal"></base-nav>
        </div>
        <router-view id="main-content" class="main"></router-view>
    </div>
</template>
<script>
    import BaseNav from "../components/BaseNav";
    import BaseSidebar from "../components/BaseSideBar";
    export default {
        components: {BaseSidebar, BaseNav},
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
                        document.getElementById("content").style.marginLeft= "0px";
                        document.getElementById("main-content").style.marginLeft = "250px";
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
<style>
    .main {
        transition: 1s;
        padding: 16px;
        color: black;
    }
</style>
