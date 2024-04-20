export  const dataCats = async (text: string) => {
    try{
        const data = await fetch(`https://cataas.com/cat/says/${text}`).then((resolve) => resolve.url);
        return data;
        } catch(error){
            console.log(error)}
        } 
        

  
