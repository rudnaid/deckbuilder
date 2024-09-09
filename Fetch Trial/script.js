const getCardsByClass = async () => {

    const url = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a5b11f9264msh81f004387ad33b8p11951cjsna9bf1a12c0de',
		'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	return result;
} catch (error) {
	console.error(error);
}
};

const displayImages = (data) => {
    const rootElement = document.getElementById('root')
    data.forEach(card => {
        if (card.img) {
            rootElement.insertAdjacentHTML('afterend', `<img src=${card.img} alt=${card.name}>`)    
        }
        
    });
}

const load = async () => {
    const mages = await getCardsByClass();
    displayImages(mages);
}

window.addEventListener('load',load())