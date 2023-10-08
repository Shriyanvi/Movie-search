let list=document.querySelector(".row");
let input=document.querySelector("#query");
let btn=document.querySelector(".btn");
btn.addEventListener('click',(ev)=>{
    ev.preventDefault();
    
    myTask();
    input.value="";
})

async function myTask(){
    const inputValue = input.value;
    console.log(inputValue);
    let url=`http://www.omdbapi.com/?s=${inputValue}&apikey=371ad3af`;
    let data=await fetch (url);
    let response = await data.json();
    console.log(response);
    show(response.Search);
}

function show(d){
    list.innerHTML="";
    d.forEach(element => {
        let div=document.createElement("div");
        div.innerHTML=`<div class="col">
            <div class="card">
                <a class="card-media" href="./img-01.jpeg">
                    <img src="${element.Poster}" alt="PUBG Mobile" width="100%" />
                </a>
                <div class="card-content">
                    <div class="card-cont-header">
                        <div class="cont-left">
                            <h3 style="font-weight: 600">${element.Title}</h3>
                            <span style="color: #12efec">${element.Year}</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>`;
        list.append(div);
        
    });
}

