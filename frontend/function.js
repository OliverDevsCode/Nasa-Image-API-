function show_image(src, width, height,alt,title) {
            // Create a new image element
            let img = document.createElement("img");
            const h1 = document.createElement("h1");
            const textNode = document.createTextNode(title);
            h1.appendChild(textNode);

            
            // Set the source, width, 
            // height, and alt attributes
            img.src = src;
            img.width = width;
            img.height = height;
            img.alt = alt;

            // Append the image element
            // to the body of the document
            document.body.append(h1);
            document.body.appendChild(img);

}

async function displayPhoto(){
    try {
        const response = await fetch('http://localhost:8000/api/todays-image');
        const data = await response.json();
        const imageURL = data.url;
        const desc = data.explanation;
        const title = data.title;
        show_image(imageURL,600,600,desc,title);
        console.log(data)
    } catch (error) {
        throw error
    }
}

displayPhoto();