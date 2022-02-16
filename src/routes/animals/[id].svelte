<script>
	import { Tab, TabGroup, TabList, TabPanels } from '@rgossiaux/svelte-headlessui';
	import TabBox from '../../components/TabBox.svelte';
	import TabElement from '../../components/TabElement.svelte';
	import AnimalProfile from '../../components/AnimalProfile.svelte';
	export let message;
</script>

<div>
	<TabGroup class="container mx-auto">
		<TabList>
			<TabElement>Profile</TabElement>
			<TabElement>Tab 2</TabElement>
			<TabElement>Tab 3</TabElement>
		</TabList>
		<TabPanels>
			<TabBox><AnimalProfile /></TabBox>
			<TabBox>Content 2</TabBox>
			<TabBox>Content 3</TabBox>
		</TabPanels>
	</TabGroup>
	<h1>{message}</h1>
</div>
