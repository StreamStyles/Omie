<template>
	<div class="vods">
		<VodList />
	</div>
</template>

<script>
// @ is an alias to /src
import VodList from '@/components/VODList.vue'

export default {
	name: 'VodsView',
	components: {
		VodList
	}
}
</script>