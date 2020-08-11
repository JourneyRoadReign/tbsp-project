<template>
    <div>
        <base-sidebar id="mySidebar" @click="sidebar.sidebarOpenClose(sidebar.sidebarStatus)"/>
        <div id="content" class="main">
            <base-nav class="navbar"></base-nav>
        </div>
    </div>
</template>
<script>
    import BaseNav from "../components/BaseNav";
    import BaseSidebar from "../components/BaseSizeBar";
    export default {
        components: {BaseSidebar, BaseNav},
        data() {
            return{
                sidebar: {
                    sidebarStatus: true,
                    openNav() {
                        document.getElementById("mySidebar").style.width = "250px";
                        //document.getElementById("content").style.marginLeft = "250px";
                    },
                    closeNav() {
                        document.getElementById("mySidebar").style.width = "10px";
                        //document.getElementById("content").style.marginLeft= "0px";
                    },
                    sidebarOpenClose(status) {
                        console.log(status)
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
        background: #cb9207;
        transition: margin-left .5s;
        padding: 16px;
        color: black;
    }
</style>
