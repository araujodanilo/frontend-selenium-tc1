const baseUrl = "http://localhost:3000/api/crimes"


export const getAllOpenCriminalCase = () => {
	fetch(`${baseUrl}`, { method: "GET" })
		.then(async response => {
			console.log("getAllClients status: ", response.status)
			const data = (await response.json())[0]
			return data
		})
}

export const getOneOpenCriminalCase = (id) => {
	fetch(`${baseUrl}/${id}`, { method: "GET" })
		.then(async response => {
			const data = (await response.json())
			return data
		})
}

export const createOpenCriminalCase = (data) => {
	fetch(`${baseUrl}`,
		{
			method: "POST",
			body: JSON.stringify(data),
			headers: { "Content-type": "application/json; charset=UTF-8" }
		}).then(response => {
			console.log(response)
		}
		)
}

export const updateOpenCriminalCase = (id, data) => {
	fetch(`${baseUrl}/${id}`,
		{
			method: "PATCH",
			body: JSON.stringify(data),
			headers: { "Content-type": "application/json; charset=UTF-8" }
		})
}

export const deleteOpenCriminalCase = (id) => {
	fetch(`${baseUrl}/${id}`,
		{
			method: "DELETE",
		})
}

