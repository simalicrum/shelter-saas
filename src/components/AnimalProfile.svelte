<script>
	import FormButton from './FormButton.svelte';
	import FormElement from './FormElement.svelte';
	let edit = false;
	let editButton = 'Edit';
	let disabled = true;
	function handleClick() {
		if (edit) {
			editButton = 'Edit';
			edit = false;
			disabled = true;
		} else {
			editButton = 'Save';
			edit = true;
			disabled = false;
		}
	}
</script>

<div class="flex flex-col gap-6">
	<FormElement id="name" {disabled} placeholder="Enter Name">Name</FormElement>
	<FormElement id="age" {disabled} placeholder="Enter Age">Age</FormElement>
	<FormElement id="gender" {disabled} placeholder="Enter Gender">Gender</FormElement>
	<FormButton onClick={handleClick}>{editButton}</FormButton>
</div>
