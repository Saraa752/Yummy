///   <refrence types="../@types/jquery"/>

$('.fa-bars').on('click', function () {
    $(".hide").animate({ width: 'toggle' }, 700);

});

// document.querySelector(".fa-bars").addEventListener("click", function(){
//     console.log("helloooo")
// })

//  async getMeal(){
//     const api = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php" , {method:get});
//     const response = await api.json();

//     console.log(response);
// }





var myHttp = new XMLHttpRequest();
myHttp.open('get', 'https://www.themealdb.com/api/json/v1/1/search.php?s=');
myHttp.send();
var allCategories = []
myHttp.addEventListener('load', function () {


    allCategories = JSON.parse(myHttp.response).meals;[{}, {}, {}, {}]


    displayData()

})


function displayData() {
    var cartona = ``;
    for (var i = 0; i < allCategories.length; i++) {

        cartona += `
         <div class="card col-lg-3 bg-dark">
                <img class="w-100" src="${allCategories[i].strMealThumb}">
                <div class="layer d-flex flex-column ps-lg-3 justify-content-center">
                    <h2 class=" ">${allCategories[i].strMeal}</h2>
                </div>

            </div>`
    }
    document.getElementById('rowData').innerHTML = cartona
    console.log(allCategories.length);
}

$('.layer').on('click', function () {
    var cartonaaa = ``;
    for (var i = 0; i < allCategories.length; i++) {

        cartonaaa += `
       <div class="w-75 bg-danger h-100">
        <title>
    
        </title>
        <p></p>
    </div>`
    }
    document.getElementById('details').innerHTML = cartonaaa

});


