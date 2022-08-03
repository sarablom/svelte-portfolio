<div class="container">
    <span class="star"></span>
    <span class="star"></span>
    <span class="star"></span>
    <span class="star"></span>
    <span class="star"></span>
    <span class="star"></span>
    <span class="star"></span>
    <span class="star"></span>
    <span class="star"></span>
</div>

<style lang="scss">
    .container {
        width: 375px;
        height: 255px;
        position: relative;

        .star {
            width: 10px;
            height: 10px;
            background-color: var(--color-dark-peachpuff);
            border-radius: 50%;
        }

        span:nth-child(1) {
            position: absolute;
            top: 30px;
            right: 0;
        }

        span:nth-child(2) {
            position: absolute;
            top: 0;
            right: 30px;
        }

        span:nth-child(3) {
            position: absolute;
            top: 45px;
            right: 90px;
        }

        span:nth-child(4) {
            position: absolute;
            top: 100px;
            right: 100px;
        }

        span:nth-child(5) {
            position: absolute;
            top: 155px;
            right: 60px;
        }

        span:nth-child(6) {
            position: absolute;
            top: 245px;
            right: 60px;
        }

        span:nth-child(7) {
            position: absolute;
            bottom: 40px;
            left: 100px;
        }

        span:nth-child(8) {
            position: absolute;
            bottom: 100px;
            left: 100px;
        }

        span:nth-child(9) {
            position: absolute;
            bottom: 20px;
            left: 0px;
        }
    }
</style>