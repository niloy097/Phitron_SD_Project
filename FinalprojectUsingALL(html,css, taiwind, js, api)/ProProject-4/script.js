// mapIds = {};
function secondTomin(sec){

    const time = []
    if (sec === "")
    {
        time.push(0);
        time.push(1);
    }
    else
    {const min = parseInt(sec) / 60;
        const s = parseInt(sec) % 60;
        const hour = min / 60;
        time.push(hour); time.push(min % 60);
    }
    return time;
    
}
var idGen = 0;
const loadData = async () =>
{
    try{
        const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
        const obj = await response.json();
        // for(let i = 0; i < obj.data.length; i++)
        // {
        //     console.log(obj.data[i].category);
        // }
        // console.log(data);
        const getCatagoryElememnt = document.getElementById('catagory-container');
        obj.data.forEach((cat) =>
        {   
            // mapIds.category = cat.category_id;
            const getCategory = cat.category;
            const div = document.createElement('div');
            div.innerHTML = `<button onclick = "getInfo(${cat.category_id})" class="btn btn-active btn-ghost hover:bg-pink-600 rounded-xl">${getCategory}</button>`;
            getCatagoryElememnt.appendChild(div);
            const cList = getCatagoryElememnt.classList;
            cList.add("flex");
            cList.add("justify-center");
            cList.add("items-center");
            cList.add("mt-10");
            cList.add("gap-5");
            cList.add("ml-5");
        });
    }
    catch 
    {
        (err) => console.log(err);
    }
    
}

loadData(); //when site re-loded data will be fethced automatically
const contentField = document.getElementById('content-container'); 
const getInfo = async (id) =>
{
    // console.log(id);
    idGen = id;
    try{
        const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
        const obj = await response.json();
        if(obj.data.length == 0)
        {
            contentField.innerHTML = `<img class = "ml-[150%] mt-20 bg-cover" src = "./not.jpg">`;
            return;
        }
        //needed data-->
        /*
        1. Thumbnail
        2. Days video uploaded
        3. Uploader profile pic
        4. " Name
        5. is verified
        6. views
        7. title
         */
        //navigaton --> obj.data[i].property
        /*
            properties-->
            1. thumbnail
            2. title
            3. authors [{}] -> profile_picture, profile_name, verified
            4. others {} -> posted_days, views
        */
        contentField.innerHTML = "";
        for(let i = 0; i < obj.data.length; i++)
        {
            
            const cart = document.createElement('div');
            cart.innerHTML = `
            <div id = "card-area" class="card w-80 h-96 bg-base-100">
                <figure><img class = "w-80 h-40" src=${obj.data[i].thumbnail} alt="Shoes" /></figure>
                <div id = "cb" class="card-body">
                    
                    <div class = "details flex items-center justify-start gap-3">
                        <img class = "w-14 h-14 rounded-full" src = ${obj.data[i].authors[0]['profile_picture']} alt ="icon">
                        <h1 class = "text-wrap text-lg font-bold">${obj.data[i].title}</h1>
                    </div>
                    <div class = "flex">
                        <p class = "ml-[70px]">${obj.data[i].authors[0]['profile_name']}</p>
                        ${(obj.data[i].authors[0]['verified'] === true) ? cart.innerHTML = `<img class = "mr-15" style = "height: 20px; width: 20px" src = "./veri.png">` : ''}
                    </div>
                    <p class = "ml-[70px]">${parseInt(secondTomin(obj.data[i].others['posted_date'])[0])} hours ${parseInt(secondTomin(obj.data[i].others['posted_date'])[1])} min ago</p>
                    <p class = "ml-[70px]">${obj.data[i].others['views']}</p>
                </div>
            </div>
            
            `;
            // if(obj.data[i].authors[0]['verified'] === true && obj.data[i].authors[0]['verified']!= '')
            // {
            //     const varifiedIcon = document.createElement('img');
            //     varifiedIcon.src = ;
            //     varifiedIcon.style.height = '10px';
            //     varifiedIcon.style.width = '10px';
            //     document.getElementById('icn').appendChild(varifiedIcon);
            // }
            cart.classList.add("bg-cover");
            contentField.appendChild(cart);
            // console.log("aichi");
            // console.log(obj.data[i].thumbnail);
            // console.log(obj.data[i].title);
            // for(const property in obj.data[i].authors[0])
            // {
            //     console.log(property, obj.data[i].authors[0][property]);
            // }

            // for(const property in obj.data[i].others)
            // {
            //     console.log(property, obj.data[i].others[property]);
            // }

        }


        
    }
    catch 
    {
        (err) => console.log(err);
    }
    
}
getInfo(1000);
const sortData = async () =>
{
    console.log("Button clicked");
    try{

        const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${idGen}`);
        const obj = await response.json();
        console.log(obj);
        if(obj.data.length == 0)
        {
            contentField.innerHTML = `<img class = "ml-[150%] mt-20 bg-cover" src = "./not.jpg">`;
            return;
        }
        //needed data-->
        /*
        1. Thumbnail
        2. Days video uploaded
        3. Uploader profile pic
        4. " Name
        5. is verified
        6. views
        7. title
         */
        //navigaton --> obj.data[i].property
        /*
            properties-->
            1. thumbnail
            2. title
            3. authors [{}] -> profile_picture, profile_name, verified
            4. others {} -> posted_days, views
        */
        obj.data.sort((o1, o2) => o2.others.views.slice(0, o2.others.views.length - 1) - o1.others.views.slice(0, o1.others.views.length - 1))
        console.log(obj.data);
        contentField.innerHTML = "";
        for(let i = 0; i < obj.data.length; i++)
        {
            
            const cart = document.createElement('div');
            cart.innerHTML = `
            <div id = "card-area" class="card w-80 h-96 bg-base-100">
                <figure><img class = "w-80 h-40" src=${obj.data[i].thumbnail} alt="Shoes" /></figure>
                <div id = "cb" class="card-body">
                    
                    <div class = "details flex items-center justify-start gap-3">
                        <img class = "w-14 h-14 rounded-full" src = ${obj.data[i].authors[0]['profile_picture']} alt ="icon">
                        <h1 class = "text-wrap text-lg font-bold">${obj.data[i].title}</h1>
                    </div>
                    <div class = "flex">
                        <p class = "ml-[70px]">${obj.data[i].authors[0]['profile_name']}</p>
                        ${(obj.data[i].authors[0]['verified'] === true) ? cart.innerHTML = `<img class = "mr-15" style = "height: 20px; width: 20px" src = "./veri.png">` : ''}
                    </div>
                    <p class = "ml-[70px]">${parseInt(secondTomin(obj.data[i].others['posted_date'])[0])} hours ${parseInt(secondTomin(obj.data[i].others['posted_date'])[1])} min ago</p>
                    <p class = "ml-[70px]">${obj.data[i].others['views']}</p>
                </div>
            </div>
            
            `;
            // if(obj.data[i].authors[0]['verified'] === true && obj.data[i].authors[0]['verified']!= '')
            // {
            //     const varifiedIcon = document.createElement('img');
            //     varifiedIcon.src = ;
            //     varifiedIcon.style.height = '10px';
            //     varifiedIcon.style.width = '10px';
            //     document.getElementById('icn').appendChild(varifiedIcon);
            // }
            cart.classList.add("bg-cover");
            contentField.appendChild(cart);
            // console.log("aichi");
        }
        
    }
    catch 
    {
        (err) => console.log(err);
    }
    
}



function goblog()
{
    location.href = "blog.html";
}


