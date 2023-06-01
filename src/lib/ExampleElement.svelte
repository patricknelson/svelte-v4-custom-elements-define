<!-- Redundant if using the create_custom_element() workaround (see main.js) -->
<svelte:options
	customElement={{
		tag: null,
		shadow: 'none',
		props: {
			greetPerson: { reflect: true, attribute: 'greet-person' },
		},
	}}
/>

<script>
	export let greetPerson = 'world';
</script>

<h1>Hello {greetPerson}!</h1>
