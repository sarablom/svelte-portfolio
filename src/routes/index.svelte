<script>
import MainHeading from "$lib/mainHeading.svelte";
import StarConstellation from "$lib/starConstellation.svelte";
import memoji from "$lib/assets/memoji.jpg";

</script>


<MainHeading headingTitle="Sara Blom - software developer" />
<div class="wrapper">
    <StarConstellation />
    <img src={memoji} alt="Avatar">
</div>

<style>
    .wrapper {
        display: flex;
        gap: 32px;
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

    @media screen and (max-width: 650px) {
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
