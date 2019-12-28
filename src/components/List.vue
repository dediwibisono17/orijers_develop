<template>
    <div class="list">
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
            </ul>
        </div>

        <!-- looping disini -->
        <div class="wrapper display--block">
            <div class="left display--inline-block">
                <img src="@/assets/image/arsenal/1.jpg" alt="">
            </div>
            <div class="right display--inline-block">
                <h3>Arsenal Home 2019/2020</h3>
                <div class="tags">Ready Stock</div>
                <div class="price">Rp1.300.000</div>
                <p>Estimasi Pengiriman: 1-2 hari</p>
                <div class="bottom">
                    <router-link to="/detail">
                        <Button />
                    </router-link>
                </div>
            </div>
        </div>

        <div class="wrapper display--block">
            <div class="left display--inline-block">
                <img src="@/assets/image/mu/1.jpg" alt="">
            </div>
            <div class="right display--inline-block">
                <h3>Manchester United Home 2019/2020</h3>
                <div class="tags">Indent</div>
                <div class="price">Rp1.300.000</div>
                <p>Estimasi Pengiriman: 20-30 hari</p>
                <div class="bottom">
                    <Button />
                </div>
            </div>
        </div>

        <div class="wrapper display--block">
            <div class="left display--inline-block">
                <img src="@/assets/image/chelsea/1.jpg" alt="">
            </div>
            <div class="right display--inline-block">
                <h3>Chelsea Home 2019/2020</h3>
                <div class="tags">Indent</div>
                <div class="price">Rp1.300.000</div>
                <p>Estimasi Pengiriman: 20-30 hari</p>
                <div class="bottom">
                    <Button />
                </div>
            </div>
        </div>

        <div class="wrapper display--block">
            <div class="left display--inline-block">
                <img src="@/assets/image/spurs/1.jpg" alt="">
            </div>
            <div class="right display--inline-block">
                <h3>Tottenham Hotspur Home 2019/2020</h3>
                <div class="tags">Indent</div>
                <div class="price">Rp1.300.000</div>
                <p>Estimasi Pengiriman: 20-30 hari</p>
                <div class="bottom">
                    <Button />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'
export default {
	components: {
		Button
	}
}
</script>

<style lang="scss" scoped>
    .list {
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
            margin: 24px 0;
            .left {
                width: 35%;
                img {
                    width: 100%;
                }
            }
            .right {
                width: 60%;
                text-align: left;
                vertical-align: top;
                .price {
                    margin: 16px 0;
                }
                h3 {
                    padding: 0;
                    margin: 0;
                }
                p {
                    font-size: 12px;
                }
            }
        }
        .tags {
            background: #fff;
            color: #263238;
            font-size: 12px;
            margin-top: 4px;
            // color: red;
            font-weight: bold;
            letter-spacing: 1px;
        }
    }
</style>
