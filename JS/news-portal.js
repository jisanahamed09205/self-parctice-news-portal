const handleCategory = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    const data = await res.json();
    // console.log(data.data.news_category);
    const tabContainer = document.getElementById('tab-container');

    data.data.news_category.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="tab hover:text-blue-700">${category.category_name}</a> 
        `;
        tabContainer.appendChild(div);
    });
};
const handleLoadNews =async (categoryId) =>{
    // console.log(categoryId);
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await res.json();
    // console.log(data);
    const heroContainer = document.getElementById('hero-container');
    heroContainer.innerHTML="";
    data.data?.forEach((news)=>{
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="hero bg-base-200 mt-12"> 
            <div class="hero-content flex-col lg:flex-row">
              <img src=${news?.image_url}" class="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 class="text-2xl font-bold">${news.title}</h1>
                <p class="py-6">${news.details}</p>
                <div class="flex justify-between items-center">
                  <div>
                    <div>
                      <div class="avatar online">
                        <div class="w-14 rounded-full">
                          <img
                            src=${news.author.img}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h6>${news.author.name?news.author.name:"Jhonny Dep"}</h6>
                      <small>${news.author.published_date}</small>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="mr-4">
                      <i class="fa-regular fa-eye"></i>
                    </div>
                    <div>${news.total_view?news.total_view:"No views"} M</div>
                  </div>
                  <div>
                    <div class="rating rating-sm">
                      <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
                      <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    </div>
                  </div>
                  <div>
                    <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        heroContainer.appendChild(div);
    });

}


handleCategory();
handleLoadNews("02");