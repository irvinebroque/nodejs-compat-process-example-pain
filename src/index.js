export default {
	async fetch(request, env, ctx) {
		process.env = env;
		console.log(process.env)
		const { AwesomeApiClient } = await import('./awesome-api-client');
		const client = new AwesomeApiClient();
		return new Response('Hello World!');
	},
};
