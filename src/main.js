import ExampleElement from './lib/ExampleElement.svelte';
import { create_custom_element } from 'svelte/internal';

customElements.define('example-element',
	create_custom_element(
		ExampleElement, // Component constructor
		{}, // props_definition
		[], // slots
		[], // accessors
		false, // use_shadow_dom
	)
);
