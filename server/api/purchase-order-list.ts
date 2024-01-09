
export default defineEventHandler(async (event) => {
	const body = await readBody(event)

	const result = await $fetch('https://erplayer.com/public/api/dealer/' + 'purchase-order-list', {
		method: 'POST',
		body: body
	})

	return result
})