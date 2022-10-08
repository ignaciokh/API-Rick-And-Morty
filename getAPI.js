const getAPI = (URL) =>{
	return fetch(URL)
		.then(data => data.json())
		.then (data =>{ 
			return data
		})	
}



const ChangePage = (data) =>{
	let link = "";
	if(data === "prev" && APIdata.info.prev !== null){
		link = APIdata.info.prev;	
	}else if (data === "next" && APIdata.info.next !== null){
		link = APIdata.info.next;
	}else{
		alert("Opcion no encontrada");
		return;
	}
	getAPI(link)
	.then(data => {
		ShowData(data.results);
		APIdata = data;
	})
}

