<template>
    <div class="loader">
        <div class="ball first"></div>
        <div class="ball second"></div>
        <div class="ball third"></div>
    </div>
</template>

<style scoped>
.loader {
    height: 100px;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ball {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgb(190, 0, 0);
    margin: 0 10px;
    animation: slide 0.5s  ease-in-out infinite alternate;
}
.first { animation-delay: 0.025s; }
.second { animation-delay: 0.125s; }
.third { animation-delay: 0.25s; }

@keyframes slide{
    from{ transform: translateY(-30px); }
    to{ transform: translateY(0); }
}
</style>