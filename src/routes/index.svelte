<script lang="ts">
    import MainHeading from "$lib/mainHeading.svelte";
    import StarConstellation from "$lib/starConstellation.svelte";
    import memoji from "$lib/assets/memoji.jpg";    
</script>


<MainHeading headingTitle="Sara Blom - Frontend developer" />
<div class="wrapper">
    <StarConstellation />
    <img src={memoji} alt="Avatar">
</div>

<style lang="scss">
    .wrapper {
        display: flex;
        gap: 32px;
        align-items: center;
        justify-content: space-around;
        

        @media screen and (min-width: 801px) {        
            height: min(50vh, 500px);
        }
    }
    

    img {
        width: 300px;
        border-radius: 50%;
    }

    @media screen and (max-width: 800px) {        
        img {
        width: 200px;  
        height: 200px;
        }
    }

    @media screen and (max-width: 670px) {
        .wrapper {
        flex-direction: column-reverse;
        align-items: center;
        }

        img {
        width: 300px; 
        height: 300px; 
        }
    }


</style>
