<script>
	import FormInput from './FormInput.svelte';
	import FormLabel from './FormLabel.svelte';
	export let id;
	export let placeholder;
	export let disabled;
</script>

<div>
	<FormLabel forVar={id}><slot /></FormLabel>
	<FormInput {id} {disabled} {placeholder} />
</div>
