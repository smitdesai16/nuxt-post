<template>
	<form method="post" action="/post">
		<input type="hidden" name="id" value="10">
		<input type="submit" value="submit">
	</form>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class FormPage extends Vue {
}
</script>
