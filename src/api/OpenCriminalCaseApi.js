const baseUrl = "http://localhost:3000/api/crimes"


export const getAllOpenCriminalCase = async (setData) => {
	await fetch(`${baseUrl}`, { method: "GET" })
		.then(async response => {
			console.log("getAllClients status: ", response.status)
			const data = (await response.json())
			setData(data)
		})
}

export const getOneOpenCriminalCase = async (id) => {
	fetch(`${baseUrl}/${id}`, { method: "GET" })
		.then(async response => {
			const data = (await response.json())
			return data
		})
}

export const createOpenCriminalCase = async (data) => {
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

export const updateOpenCriminalCase = async (id, data) => {
	fetch(`${baseUrl}/${id}`,
		{
			method: "PATCH",
			body: JSON.stringify(data),
			headers: { "Content-type": "application/json; charset=UTF-8" }
		})
}

export const deleteOpenCriminalCase = async (id) => {
	fetch(`${baseUrl}/${id}`,
		{
			method: "DELETE",
		})
}

