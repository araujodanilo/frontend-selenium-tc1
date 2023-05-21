const baseUrl = "http://localhost:3000/api/crimes"


export const findAllCriminalCases = async (setData) => {
	await fetch(`${baseUrl}`, { method: "GET" })
		.then(async response => {
			console.log(response)
			const data = (await response.json())
			setData(data)
		}).catch(err => {
			console.log(err)
		})
}

export const findOneCriminalCase = async (id, setData) => {
	fetch(`${baseUrl}/${id}`, { method: "GET" })
		.then(async response => {
			console.log(response)
			const data = (await response.json())
			setData(data)
		}).catch(err => {
			console.log(err)
		})
}

export const createCriminalCase = async (data) => {
	fetch(`${baseUrl}`,
		{
			method: "POST",
			body: JSON.stringify(data),
			headers: { "Content-type": "application/json; charset=UTF-8" }
		}).then(response => {
			console.log(response)
		}).catch(err => {
			console.log(err)
		})
}

export const updateCriminalCase = async (id, data) => {
	fetch(`${baseUrl}/${id}`,
		{
			method: "PATCH",
			body: JSON.stringify(data),
			headers: { "Content-type": "application/json; charset=UTF-8" }
		}).then(response => {
			console.log(response)
		}).catch(err => {
			console.log(err)
		})
}

export const deleteCriminalCases = async (id) => {
	fetch(`${baseUrl}/${id}`,
		{
			method: "DELETE",
		}).then(response => {
			console.log(response)
		}).catch(err => {
			console.log(err)
		})
}

