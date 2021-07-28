<script lang="ts">
	import {onMount} from 'svelte'
//   https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd
// 	"ethereum": {
//     "usd": 2303.36
//   },

let values:Coin[] | null = null

onMount(()=> {
	fetchData()
})

	type Coin = {
		label: string;
		id: string;
	}

	export let coins : Coin[] | null = null;

	async function fetchData() {
		const idQueryString = coins.reduce((acc, value) =>{
			return acc + value.id + "%2C"
		} , "")

		const url = `https://api.coingecko.com/api/v3/simple/price?ids=${idQueryString}&vs_currencies=usd`

		console.log(idQueryString)

		const resp = await fetch(url);
		const data = (await resp.json()) as Record<string, { usd: number }>;
		console.log(data)
		values = data

	}

</script>



<div>
	
</div>

