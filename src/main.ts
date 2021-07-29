import App from './App.svelte';


const app = new App({
	target: document.body,
	props: {
		coins: [
			{
				label: "Bitcoin",
				id: "bitcoin", // CoinGecko Api
			},
			{
				label: "Ethereum",
				id: "ethereum", // CoinGecko Api
			},
			{
				label: "Dogecoin",
				id: "dogecoin",
			}
		]
	}
});

export default app;