export async function dataFacts() {
    try{
        const data = await fetch('https://catfact.ninja/fact').then((res)=>{
            return res
        })
        return data;
        } catch(error){
            console.log(error)}
        } 
        console.log(dataFacts)