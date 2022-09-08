<template>
  <div class="pill">
    <span class="name">{{ name }}</span>
    <span class="amount">{{ amount }}</span>
  </div>
</template>

<script>
export default {
  props: ["name", "amount"],
};
</script>

<style scoped>
    .pill{
        margin: 5px;
        padding: 5px;
        height: 20px;
        border-radius: 10px;
        background-color: cadetblue;
        color: white;
        font-size: 1.3rem;
        font-weight: lighter;
        display: flex;
        align-items: center;
    }

    .pill .name{
        margin-left: 3px;
    }

    .pill .amount{
        margin: 3px;
        padding: 3px;
        height: 17px;
        width: 50px;
        border-radius: 7px;
        background-color: white;
        color: cadetblue;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>