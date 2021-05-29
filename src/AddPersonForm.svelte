<script>
    import {createEventDispatcher} from 'svelte';

    let dispatch = createEventDispatcher();
    let name;

    const handleSubmit = () => {
        dispatch('addPlayer', name);
    }

</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Naam" bind:value={name}>
    <button>Add</button>
</form>