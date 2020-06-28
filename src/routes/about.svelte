<script>
	let search;
	let loading = false;
	const API_URL = 'https://api.giphy.com/v1/gifs/search?api_key=JnxTmEGKXjZeUKBzRjTQoMDg8OX8pS5U&rating=pg&q=';

	let gifs = [];

	async function formSubmitted(event) {
		event.preventDefault();
		loading = true;
		gifs = [];
		const url = `${API_URL}${search}`;
		const response = await fetch(url);
		const json = await response.json();
		gifs = json.data.map(gif => gif.images.fixed_height.url);
		// console.log(gifs);
		loading = false;

	}
</script>
<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p>

<style>
	.result {
		column-count: 3;
	}
	img {
		width: 100%;
		height: auto;
	}
</style>

<form on:submit={formSubmitted}>
	<label for="search">Search</label>
	<input bind:value={search} id="search" name="search">
	<button type="submit">GO</button>
</form>
{#if loading} 
	<img alt="loading" src="https://media2.giphy.com/media/l3nWhI38IWDofyDrW/giphy.gif?cid=790b76115d055ab7424f75514dcb4d7a&rid=giphy.gif" />
{/if}

<div class="result">
{#each gifs as gif }
	<img src={gif} alt>
{/each}
</div>