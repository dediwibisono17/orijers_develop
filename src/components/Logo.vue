<template>
    <div class="display--block">
        <div class="display--inline-block logo">
            <img src="@/assets/image/logo/arsenal.png" alt="">
        </div>
        <div class="display--inline-block logo">
            <img src="@/assets/image/logo/chelsea.png" alt="">
        </div>
        <div class="display--inline-block logo">
            <img src="@/assets/image/logo/manchester_united.png" alt="">
        </div>
        <div class="display--inline-block logo">
            <img src="@/assets/image/logo/manchester_city.png" alt="">
        </div>
        <div class="display--inline-block logo">
            <img src="@/assets/image/logo/spurs.png" alt="">
        </div>
        <div class="display--inline-block logo">
            <img src="@/assets/image/logo/inter.png" alt="">
        </div>
        <div class="display--inline-block logo">
            <img src="@/assets/image/logo/ac_milan.png" alt="">
        </div>
        <div class="display--inline-block logo">
            <img src="@/assets/image/logo/juventus.png" alt="">
        </div>
        <div class="display--inline-block logo">
            <img src="@/assets/image/logo/dortmund.png" alt="">
        </div>
        <div class="display--inline-block logo">
            <img src="@/assets/image/logo/muenchen.png" alt="">
        </div>
        <div class="display--inline-block logo">
            <img src="@/assets/image/logo/madrid.png" alt="">
        </div>
        <div class="display--inline-block logo">
            <img src="@/assets/image/logo/barcelona.png" alt="">
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .logo {
        width: 32px;
        height: 32px;
        margin: 8px;
        cursor: pointer;
        border-radius: 50%;
        padding: 8px;
        box-shadow: 0px 0px 2px 3px rgba(0,0,0,0.1);
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        &:hover {
            box-shadow: 0px 0px 1px 2px #039be5;

        }
    }
</style>
