<template>
    <div class="main-content">
        <div class="card ml-4 mt-2 float-left">
            <img class="image ml-3 mt-2 border border-dark" src="../../public/img/menu/kimchi.jpg"/>
        </div>
        <div class="order float-right mr-lg-5 mt-2">
            <b-btn class="quantity-button">+</b-btn>
        </div>
    </div>
</template>
<style>
    .main-content {
        height: 573.1px;
    }

    .card {
        background-color: #fffad9;
        width: 400px;
        height: 500px;
        box-shadow: 8px 8px 16px 2px rgb(144, 144, 144);
    }

    .order {
        background-color: #fffad9;
        width: 700px;
        height: 500px;
        box-shadow: 8px 8px 16px 2px rgb(144, 144, 144);
    }

    .quantity-button{
        border-radius: 100px;
    }

    .image {
        height: 90%;
        width: 92%;
    }

</style>