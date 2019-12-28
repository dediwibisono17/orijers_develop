<template>
    <div class="detail">
        <div class="breadcumb">
            <ul>
                <li>
                    <router-link to='/'>Home</router-link>
                </li>
                <li>
                    <router-link to="/list">
                        List
                    </router-link>
                </li>
                <li>Detail</li>
            </ul>
        </div>
        <div class="wrapper">
            <!-- <img src="@/assets/image/arsenal/1.jpg" alt=""> -->
            <carousel
                    :items="1"
                    :autoplay="false"
                    :nav="false"
                >
                <img src="@/assets/image/arsenal/1.jpg" alt="">
                <img src="@/assets/image/arsenal/2.jpg" alt="">
                <img src="@/assets/image/arsenal/3.jpg" alt="">
            </carousel>
        </div>
        <Button />
        <div class="description">
            <h3>Arsenal Adult 19/20 Home Shirt</h3>
            <div class="text--left">
                <h4>Deskripsi</h4>
                <p>
                    Kaos Resmi Arsenal 19/20 resmi telah dibuat oleh adidas untuk para penggemar kami dengan setelan yang lebih longgar dari yang dikenakan oleh para pemain di lapangan.
                </p>
                <p>
                    Kaos ini menampilkan warna-warna ikonik yaitu merah dan putih dengan lengan yang pas bentuk dan mengambil isyarat desain dari awal tahun sembilan puluhan dengan kerah retro memberikan jersey tampilan klasik dan elegan dengan sentuhan kontemporer.
                </p>
                <p>
                    Kain ringan ini memiliki teknologi Climalite yang berfungsi menyalurkan kelembaban dari tubuh agar Anda tetap sejuk dan kering.
                </p>
                <h4>Material</h4>
                <p>50% Polyester / 50% Recycled Polyester</p>
            </div>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'
import carousel from 'vue-owl-carousel'
export default {
	components: {
		Button,
		carousel
	}
}
</script>

<style lang="scss" scoped>
    .detail {
        background: #fff;

         .breadcumb {
            text-align: left;
            font-size: 10px;
            cursor: pointer;
            ul {
                li {
                    list-style-type: none;
                    display: inline-block;
                   // margin: 0 -4px;
                    //border:2px solid #fff;
                    //background: yellow;
                    //border-radius: 20px;
                    opacity: .5;
                    &::after {
                        content: ' / ';
                        margin: 0 8px;
                    }
                }
                li:last-child {
                    opacity: 1;
                    &::after {
                        content: '';
                    }
                }
            }
        }
        .wrapper {
            //border: 1px solid;
            width: 70%;
            margin: 0 auto;
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        h3 {
            margin: 0;
            padding: 0;
        }
        .description {
            background-image: linear-gradient(to bottom, #fafafa, #ececec);
            font-size: 14px;
            padding: 16px;
            border-radius: 32px 32px 0 0;
            .text--left {
                line-height: 20px;
            }
        }
    }
</style>
