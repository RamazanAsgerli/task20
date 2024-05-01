let list = document.getElementById("list")

axios("https://api.tvmaze.com/shows")
.then(x=>{
    console.log(x);
    for(let index = 0;index<x.data.length;index++){
        list.innerHTML+=`<div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card">
        <img src="${x.data[index].image.medium}" class="card-img-top" alt="...">
        <div class="card-body" style="height: 250px;">
          <h5 class="card-title">${x.data[index].name}</h5>
          <p class="card-text">${x.data[index].summary.slice(0,120)}...</p>
          <a href="${x.data[index].url}" class="btn btn-primary w-100">Watch</a>
        </div>
      </div>
        </div>`
    
}

})