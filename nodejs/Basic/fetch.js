

async function loadData(){
    try {
        //throw new Error('Mi errro al momento de consultar')
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


loadData();