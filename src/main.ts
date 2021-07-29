import CryptoWidget from './App.svelte';


const app = new CryptoWidget({
	target: document.body,
	props: {
		backgroundColor: "black",
        textColor: "yellow",
        scroll: true,
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