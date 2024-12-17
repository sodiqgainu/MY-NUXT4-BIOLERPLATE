<template>
    <div data-cursor="-exclusion">
    <BaseNavigation/>
     <slot/>
    </div>
</template>


<script >


import MouseFollower from "mouse-follower";
import gsap from "gsap";

export default {
	
	mounted() {
	


MouseFollower.registerGSAP(gsap);

const cursor = new MouseFollower({
	skewing: 5,
	speed: 0.55,
});






	}
}



</script>


<style lang="scss" scoped>

</style>