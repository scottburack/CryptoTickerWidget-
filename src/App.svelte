<script lang="ts">
	import {onDestroy, onMount} from 'svelte'
//   https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd
// 	"ethereum": {
//     "usd": 2303.36
//   },

let values = FormattedCoin[] | null = null;
let interval = null; 

onMount(()=> {
	interval = setInterval(() => {
		fetchData().then(data => {
		  values = data
		)}
	}, 2000)
})

onDestroy(() => {
  clearInterval(interval)
})

$: {
	console.log(values)
}

	type Coin = {
		label: string;
		id: string;
	}

	interface FormattedCoin extends Omit<Coin, "id"> {
		value: number;
	}

	export let coins : Coin[] | null = null;

	async function fetchData() {
		const idQueryString = coins.reduce((acc, value) =>{
			return acc + value.id + "%2C"
		} , "")

		const url = `https://api.coingecko.com/api/v3/simple/price?ids=${idQueryString}&vs_currencies=usd`

		const resp = await fetch(url);
		const data = (await resp.json()) as Record<string, { usd: number }>;

		const formattedData = coins.map(coin => {
			return {
				label: coin.label,
				value: data[coin.id].usd
			}
		})

		return formattedData
	}

</script>



<div>
	{#if !values}
	  <div>No data</div>
	{:else}
	  <div>
		  {#each values as value}
		    <div>{value.label}: {value.value}</div>
		  {/each}
	  </div>
	{/if}
</div>

