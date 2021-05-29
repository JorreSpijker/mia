<script>
	import {PlayerList} from "./player/PlayerList";
	import AddPersonForm from "./AddPersonForm.svelte";
	// import Ranking	from './Ranking.svelte';
	import {persistStore} from "./storage/persisStore";
	import {Player} from "./Player/Player";

	const Players = new PlayerList();

	console.log(Players);

	persistStore('data', Players);

	const addPlayer = (e) => {
		Players.add( new Player(e.detail) );
	}

</script>

<main>
	<AddPersonForm on:addPlayer={addPlayer} />
<!--	<Ranking list={Players} />-->

	<div>{JSON.stringify(Players.items)}</div>
<ul>
	{#each Players.items as item}
		<li>{JSON.stringify(item)}</li>
	{/each}
</ul>

</main>
