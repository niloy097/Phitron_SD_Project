const loadData = async () =>
{
    try
    {
        const response = await fetch('https://jsonplaceholder.org/comments');
        const data = await response.json();
        // console.log(data);
        const bodyElement = document.getElementById('comment-holder');
        data.forEach((ele) => {
            console.log(ele);
            // const h2 = document.createElement('h2');
            // const h1 = document.createElement('h1');
            // h2.innerText = "Slug Property: ";
            // h1.innerText = ele.slug;
            // bodyElement.appendChild(h2);
            // bodyElement.appendChild(h1);

            const makeInnerDiv = document.createElement('div');
            makeInnerDiv.innerHTML = `

                <h1 style = "color:green">Property Comment: ${ele.comment.slice(0, 10)} <br> <span style = "color:red">ID: ${ele.id}</span></h1>
                <button onclick = "handleModalClick(${ele.id})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Show Details
                </button>
            `

            bodyElement.appendChild(makeInnerDiv);
        })
    }
    catch
    {
        (err) =>
        console.log(err);
    }
}

loadData();

function handleModalClick(id)
{
    console.log("The id", id);
    
    const loadData = async () =>
    {
        try
        {
            const response = await fetch(`https://jsonplaceholder.org/comments?id=${id}`);
            const data = await response.json();
            console.log(data);
            // console.log(data);
            document.getElementById('modal-title').innerText = `The Detais about: id ${data.id}`;
            const bodyElement = document.getElementById('modalField').innerHTML = 
            `<p>The id is: ${data.id}</p><br>
            <p>The comment use did: ${data.comment}</p>`;
            // data.forEach((ele) => {
            
            // console.log("coming from 53");

            // const makeInnerDiv = document.createElement('div');
            // makeInnerDiv.innerHTML = `

            //     <p>${ele.id}</p>
                
            // `

            // bodyElement.appendChild(makeInnerDiv);
            // })
            // const response = await fetch(`https://jsonplaceholder.org/comments?id=${id}`);
            // const data = await response.json();
            // console.log(data);
            // console.log(data.userId);
        }
        catch
        {
            (err) =>
            console.log(err);
        }
    }

    loadData();

}