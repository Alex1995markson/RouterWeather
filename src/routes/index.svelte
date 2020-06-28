<script>
	import { onMount } from 'svelte';
  import {getForecast} from '../lib/API';
  import {nowDay} from '../lib/date';



  //variable
  let today = new Date;
  let todayYMD = nowDay(today);
  let forecast= [];
  

  // lifeloop
	onMount(() => {
    forecast = getForecast();
    console.log(forecast);
  });
  // setTimeout(() => console.log(forecast.currently.summary), 20000);
			
</script>


<svelte:head>
	<title>Sapper project template</title>
</svelte:head>


<div class="card mb-3">
  <h3 class="card-header">Weather Today</h3>
  <div class="card-body">
    <h5 class="card-title">{todayYMD}</h5>
  </div>

  <img style="height: 200px; width: 50%; display: block;" src="" alt="Card image">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
  {#await forecast then {currently}}
    <li class="list-group-item">...waiting</li>
    <li class="list-group-item">{{...currently}.summary}</li>  
    <li class="list-group-item">{{...currently}.temperature} F</li>
    <li class="list-group-item">Vestibulum at eros</li>
  {/await} 

  </ul>  
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  <div class="card-footer text-muted">
    {{forecast}}
  </div>
</div>


