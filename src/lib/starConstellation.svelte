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

    <div class="line line1"></div>
    <div class="line line2"></div>
    <div class="line line3"></div>
    <div class="line line4"></div>
    <div class="line line5"></div>
    <div class="line line6"></div>
    <div class="line line7"></div>
    <div class="line line8"></div>
    <div class="line line9"></div>
    <div class="line line10"></div>
</div>

<style lang="scss">
    .container {
        width: 375px;
        height: 255px;
        position: relative;
        isolation: isolate;

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
            top: 244px;
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

        .line {
            border: 1px solid var(--color-light-peachpuff);
            z-index: -1;
        }

        .line1 {
            position: absolute;
            bottom: 67px;
            left: -5px; 
            width: 125px;
            transform: rotate(141deg);
            
        }

        .line2 {
            position: absolute;
            bottom: 34px;
            left: 0; 
            width: 102px;
            transform: rotate(168deg);
        }

        .line3 {
            position: absolute;
            bottom: 70px;
            left: 75px; 
            width: 60px;
            transform: rotate(90deg);
        }

        .line4 {
            position: absolute;
            bottom: 26px;
            right: 67px; 
            width: 205px;
            transform: rotate(191deg);
        }

        .line5 {
            position: absolute;
            bottom: 45px;
            right: 20px; 
            width: 90px;
            transform: rotate(90deg);
        }

        .line6 {
            position: absolute;
            bottom: 99px;
            right: 67px; 
            width: 205px;
            transform: rotate(183deg);
        }

        .line7 {
            position: absolute;
            top: 130px;
            right: 49px; 
            width: 70px;
            transform: rotate(234deg);
        }

        .line8 {
            position: absolute;
            top: 80px;
            right: 70px; 
            width: 60px;
            transform: rotate(280deg);
        }

        .line9 {
            position: absolute;
            top: 25px;
            right: 30px; 
            width: 70px;
            transform: rotate(142deg);
        }

        .line10 {
            position: absolute;
            top: 15px;
            right: 2px; 
            width: 42px;
            transform: rotate(45deg);
        }
    }
</style>