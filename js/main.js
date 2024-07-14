/// <reference types="../@types/jquery"/>


// nav-bar + links +( classActive + scroll "   في بونس هنا لوسمحت  ")
let dt = document.getElementById('deteils')
let home = document.getElementById('main')

$('a[href^="#"]').on('click',function(e){

let secId = $(e.target).attr('href')
let secOffset = $(secId).offset().top
$('a[href^="#"]').removeClass('active').siblings().removeClass('active');
$(e.target).addClass('active')
$('html, body').animate({ scrollTop: secOffset }, 500)});

$('#openBtn').on('click',function(e){
    $('#closeBtn').toggleClass('d-none')
    $('#openBtn').toggleClass('d-none')
    $('nav').css('left','250px')
    $('.navItem').removeClass('slide-bottom')
    $('.navItem').addClass('slide-top')
    $('.sid-heddin-nav').show(200)
})

$('#closeBtn').on('click',function(e){
    $('#openBtn').toggleClass('d-none')
    $('#closeBtn').toggleClass('d-none')
    $('nav').css('left','0px')
    $('.navItem').removeClass('slide-top')
    $('.navItem').addClass('slide-bottom')
    $('.sid-heddin-nav').hide(200)

})
// $('a[href^="#"]').on('click',function(e){
//     e.preventDefault(); // منع السلوك الافتراضي
//     // $('#openBtn').toggle(100)
//     // $('#closeBtn').toggle(100)

//     if($(this).attr('href') === $(e.target).attr('href')){
//         $( $(e.target).attr('href')).removeClass('d-none')

//         $(e.target.attr('href')).not($(this).attr('href')).addClass('d-none');
//         $('nav').css('left','0px')
//         $('.navItem').removeClass('slide-top')
//         $('.navItem').addClass('slide-bottom')
//         $('.sid-heddin-nav').hide(200)
    
//     }
// })
$('a[href^="#"]').on('click', function(e) {
  e.preventDefault(); // منع السلوك الافتراضي

  if ($(this).attr('href') === $(e.target).attr('href')) {
      $($(this).attr('href')).removeClass('d-none');
      $('#closeBtn').toggleClass('d-none')
      $('#openBtn').toggleClass('d-none')

      $('section').not($(this).attr('href')).addClass('d-none');
      $('nav').css('left', '0px');
      $('.navItem').removeClass('slide-top').addClass('slide-bottom');
      $('.sid-heddin-nav').hide(200);
  }
});
// ===================houmeSection=========================

async function getDeta(){
    try{
      let requst =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      let data = await requst.json()
       mael = data.meals
       console.log(mael);
       display(mael)
      console.log(mael[0]);


// let maelBody = document.querySelector('.b');
$('.go').on('click', function(e) {
    $(home).addClass('d-none');
    $(dt).removeClass('d-none');
    let id = $(this).attr('data-id');
    console.log(id);
    getDetelisData(id)


})


    }
    catch(error){
      // document.querySelector('.row').innerHTML=`<h2>${error}</h2>`
    }
}
getDeta()
function display(arr){
    let body =``;
    for(let i=0;i<arr.length;i++){
        body+=`<div class="col-sm-12 col-md-3 b">
              <div class="cardBody overflow-hidden go" data-id="${arr[i].idMeal}" >
              <div class="inner position-relative border border-black rounded">
              <img src="${arr[i].strMealThumb}" class="w-100 border border-black rounded" alt="${arr[i].strMeal}"/>
              <div class="hiddenInfo bg position-absolute border rounded d-flex flex-column justify-content-center">
              <h2 class="text-center h4"> ${arr[i].strMeal}</h2>
              </div>
              </div>
              </div>
              </div>`
    }
    // console.log(body);
    document.getElementById('homeDidplay').innerHTML=body;

}


// ===============================================

// ===================searchSection=========================


let searchByNme=document.querySelector('.name')
console.log(searchByNme);
searchByNme.addEventListener('input',async function(e){
    console.log(e.target.value);
    let   searchKey = e.target.value.trim();
    console.log(searchKey);
    await getDetaSearch(searchKey)
})

async function getDetaSearch(searchKey){
    try{
    let request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKey}`);
      let data = await request.json()
       mael = data.meals
       displayByName(mael)
       $('.go').on('click', function(e) {
        $('#search').addClass('d-none');
        $(dt).removeClass('d-none');
        let id = $(this).attr('data-id');
        console.log(id);
        getDetelisData(id)
    
    })
    
       if (meals && meals.length > 0) {
        console.log(meals[0]);
    } else {
        console.log('لم يتم العثور على وجبات'+error);
        document.querySelector('.row').innerHTML = `<h2>${error}</h2>`;

    }
} catch(error) {
    // console.log(error);
    // يمكنك التعامل مع عرض الخطأ في واجهة المستخدم هنا إذا لزم الأمر
    // document.querySelector('.row').innerHTML = `<h2>${error}</h2>`;
}
}
getDetaSearch()
function displayByName(arr){

    let body =``;
    for(let i=0;i<arr.length;i++){
        body+=`<div class="col-sm-12 col-md-3">
              <div class="cardBody overflow-hidden go" data-id="${arr[i].idMeal}">
              <div class="inner position-relative border border-black rounded">
              <img src="${arr[i].strMealThumb}" class="w-100 border border-black rounded" alt="${arr[i].strMeal}"/>
              <div class="hiddenInfo bg position-absolute border rounded d-flex flex-column justify-content-center">
              <h2 class="text-center h4"> ${arr[i].strMeal}</h2>
              </div>
              </div>
              </div>
              </div>`
    }
    // console.log(body);
    document.getElementById('displayByName').innerHTML=body;





    
}


let searchByLetter=document.querySelector('.searchByLetter')


searchByLetter.addEventListener('input',async function(e){
    console.log(e.target.value);
    let   searchLrtter = e.target.value.trim();
    console.log(searchLrtter);
    await getDetaSearchLetter(searchLrtter)
})

async function getDetaSearchLetter(searchLrtter){
    try{
    let request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLrtter}`);
      let data = await request.json()
       mael = data.meals
       console.log(mael);
       displayByLetter(mael)
       $('.cardBody').on('click', function(e) {
        $('#search').addClass('d-none');
        $(dt).removeClass('d-none');
        let id = $(this).attr('data-id');
        console.log(id);
        getDetelisData(id)
    
    })
       if (meals && meals.length > 0) {
        console.log(meals[0]);
    } else {
        console.log('لم يتم العثور على وجبات'+error);
        document.querySelector('.row').innerHTML = `<h2>${error}</h2>`;

    }
} catch(error) {
    // console.log(error);
    // يمكنك التعامل مع عرض الخطأ في واجهة المستخدم هنا إذا لزم الأمر
    // document.querySelector('.row').innerHTML = `<h2>${error}</h2>`;
}
}
getDetaSearchLetter()
function displayByLetter(arr){

    let body =``;
    for(let i=0;i<arr.length;i++){
        body+=`<div class="col-sm-12 col-md-3">
              <div class="cardBody overflow-hidden" data-id="${arr[i].idMeal}">
              <div class="inner position-relative border border-black rounded">
              <img src="${arr[i].strMealThumb}" class="w-100 border border-black rounded" alt="${arr[i].strMeal}"/>
              <div class="hiddenInfo bg position-absolute border rounded d-flex flex-column justify-content-center">
              <h2 class="text-center h4"> ${arr[i].strMeal}</h2>
              </div>
              </div>
              </div>
              </div>`
    }
    // console.log(body);
    document.getElementById('displayByName').innerHTML=body;





    
}
// ====================================

// ===================catogriesSection=========================



async function getCatogoryData(){
try{
    let requst = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    let data = await requst.json();
    mael= data.categories
    console.log(mael);
    displayCato(mael)
    $('.catogriesCard').on('click', async function(e) {
        let newCategory = $(this).attr('data-base');
        console.log(newCategory);
        let request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${newCategory}`);
        let data = await request.json();
        let meal = data.meals;
        displayByAttr(meal);
        $('.cardBody').on('click', function(e) {
            $('#catogries').addClass('d-none');
            $(dt).removeClass('d-none');
            let id = $(this).attr('data-id');
            console.log(id);
                document.getElementById('catogrieTwo').classList.toggle('d-none')

            getDetelisData(id)
        
        })

    });

}
catch(error){
    // console.log(error);
    // يمكنك التعامل مع عرض الخطأ في واجهة المستخدم هنا إذا لزم الأمر
    // document.querySelector('.row').innerHTML = `<h2>${error}</h2>`;

}
}
$('a[href^="#catogries"]').on('click',function(e){
    $('#catogrie').removeClass('d-none')
    $('#catogrie').addClass('d-flex')
    $('#catogrieTwo').removeClass('d-flex')
    $('#catogrieTwo').addClass('d-none')
})


getCatogoryData()
function displayCato(arr){

    let body =``;
    for(let i=0; i< arr.length ; i++){
        body+=`

        <div class="col-sm-12 col-md-4 col-lg-3">
              <div class="catogriesCard" data-base="${arr[i].strCategory}" >
              <div class="inner position-relative overflow-hidden">
              <img src="${arr[i].strCategoryThumb}" class="w-100" alt="${arr[i].strCategory}" />
              <div class="info position-absolute text-center p-2 border border-black rounded">
              <h2 class="h3 fw-bold">${arr[i].strCategory}</h2>
              <p>${arr[i].strCategoryDescription}</p>
              </div>
              </div>
              </div>
              </div>`
    }
    // console.log(body);
    document.getElementById('catogrie').innerHTML=body;




    
}

function displayByAttr(arr){
    let body=``
    for(let i=0;i<arr.length;i++){

        body+=`

        <div class="col-sm-12 col-md-3">
              <div class="cardBody overflow-hidden go" data-id="${arr[i].idMeal}">
              <div class="inner position-relative border border-black rounded">
              <img src="${arr[i].strMealThumb}" class="w-100 border border-black rounded" alt="${arr[i].strMeal}"/>
              <div class="hiddenInfo bg position-absolute border rounded d-flex flex-column justify-content-center">
              <h2 class="text-center h4"> ${arr[i].strMeal}</h2>
              </div>
              </div>
              </div>
              </div>
              `
    }
    document.getElementById('catogrie').classList.toggle('d-none')
    document.getElementById('catogrieTwo').classList.toggle('d-none')
    document.getElementById('catogrieTwo').innerHTML=body;
}

// =================================================


// ===================areasection=========================
async function getDataByAeteas(){
    try{
        let request = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)

        let data = await request.json();
        let meal = data.meals;
        console.log(meal);
        displayDataOfAerea(meal)
        $('.areaBody').on('click', async function(e) {
            let area = $(this).attr('data-base');
            console.log(area);
            let request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
            let data = await request.json();
            let mael = data.meals;
            console.log(mael);
            displayByArea(mael);
            $('.catogriesCard').on('click', function(e) {
                $('#area').addClass('d-none');
                $(dt).removeClass('d-none');
                let id = $(this).attr('data-id');
                console.log(id);
                getDetelisData(id)

            })
        });

    }
    catch(error){
        // console.log(error);
        // يمكنك التعامل مع عرض الخطأ في واجهة المستخدم هنا إذا لزم الأمر
        // document.querySelector('.row').innerHTML = `<h2>${error}</h2>`;
    
    }
    
 }

//  لازم نعدل الكود ده عشان يشتغل ع كل اللينكات
 $('a[href^="#area"]').on('click',function(e){
    $('#areas').removeClass('d-none')
    $('#areas').addClass('d-flex')
    $('#areasmeals').removeClass('d-flex')
    $('#areasmeals').addClass('d-none')
})
 getDataByAeteas()
 function displayDataOfAerea(arr){
 let body = ``;
 for(let i = 0 ; i < arr.length; i ++){
    body+=`            <div class="col-sm-12 col-md-3">
              <div class="areaBody" data-base="${arr[i].strArea}">
                <div class="inner" >
                  <i class="fa-solid text-white fa-house-laptop fa-4x"></i>
                  <h2 class="text-white">${arr[i].strArea}</h2>
                </div>
              </div>
            </div>`
 }
 document.getElementById('areas').innerHTML=body;
 }
 function displayByArea(arr){
    let body=``
    for(let i=0;i<arr.length;i++){

        body+=`

        <div class="col-sm-12 col-md-3">
              <div class="catogriesCard overflow-hidden" data-id="${arr[i].idMeal}">
              <div class="inner position-relative border border-black rounded">
              <img src="${arr[i].strMealThumb}" class="w-100 border border-black rounded" alt="${arr[i].strMeal}"/>
              <div class="hiddenInfo bg position-absolute border rounded d-flex flex-column justify-content-center">
              <h2 class="text-center h4"> ${arr[i].strMeal}</h2>
              </div>
              </div>
              </div>
              </div>
              `
    }
    document.getElementById('areas').classList.toggle('d-none')
    document.getElementById('areasmeals').classList.toggle('d-none')
    document.getElementById('areasmeals').innerHTML=body;
}

// =====================================================================

// ===================ingredintsSection=========================
async function getIngredint(){
    try{
        let request = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        let data = await request.json();
        let meal = data.meals;
        console.log(meal);
        displayIngredint(meal)
        $('.body').on('click', async function(e) {
            let ingr = $(this).attr('data-base');
            console.log(ingr);
            let request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingr}`);
            let data = await request.json();
            let mael = data.meals;
            console.log(mael);
            displayByIngri(mael);
            $('.cardBody').on('click', function(e) {
                $('#ingredients').addClass('d-none');
                $(dt).removeClass('d-none');
                $(dt).removeClass('d-none');
                let id = $(this).attr('data-id');
                console.log(id);
                getDetelisData(id)

            })
            
        });

    }
    catch(error){
        // console.log(error);
        // document.querySelector('.row').innerHTML = `<h2>${error}</h2>`;
    
    }
}

getIngredint()
function displayIngredint(arr){
    let body=``
    for( let i =0 ; i<=19; i++){
        body+=`            <div class="col-sm-12 col-md-4 col-lg-3">
              <div class="body" data-base="${arr[i].strIngredient}">
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                <h2 class="h5 my-2">${arr[i].strIngredient.split("").slice(0,20).join('') }</h2>
                
                <p class="lead" title=" ${arr[i].strDescription}">${arr[i].strDescription.split("").slice(0,100).join('') }.....</p>
              </div>
            </div>`
    }
    document.getElementById('mealsIngredints').innerHTML=body
}
function displayByIngri(arr){
    let body=``
    for(let i=0;i<arr.length;i++){

        body+=`

        <div class="col-sm-12 col-md-3">
              <div class="cardBody overflow-hidden go" data-id="${arr[i].idMeal}">
              <div class="inner position-relative border border-black rounded">
              <img src="${arr[i].strMealThumb}" class="w-100 border border-black rounded" alt="${arr[i].strMeal}"/>
              <div class="hiddenInfo bg position-absolute border rounded d-flex flex-column justify-content-center">
              <h2 class="text-center text-black h4"> ${arr[i].strMeal}</h2>
              </div>
              </div>
              </div>
              </div>
              `
    }
    document.getElementById('mealsIngredints').classList.toggle('d-none')
    document.getElementById('mealaByIngredints').classList.toggle('d-none')
    document.getElementById('mealaByIngredints').innerHTML=body;
}
$('a[href^="#ingredients"]').on('click',function(e){
    $('#mealsIngredints').removeClass('d-none')
    $('#mealsIngredints').addClass('d-flex')
    $('#mealaByIngredints').removeClass('d-flex')
    $('#mealaByIngredints').addClass('d-none')
})
// d.slice()
// d.slice()
// d.json()


// =====================================================================

// ===================ditsSection=========================
async function getDetelisData (id){
    try{
        let request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        let data = await request.json();
        let meal = data.meals;
        console.log(meal);
        displayDeteils(meal)
    }
    catch(error){
        // console.log(error);
        // يمكنك التعامل مع عرض الخطأ في واجهة المستخدم هنا إذا لزم الأمر
        // document.querySelector('.row').innerHTML = `<h2>${error}</h2>`;
    
    }
}
function displayDeteils(arr){
    let body=``
    for(let i=0;i<arr.length;i++){

        body+=`
            <div class="col-sm-12 col-md-4">
              <div class="detilImge">
                <div class="inner">
                  <img src="${arr[i].strMealThumb}" class="w-100" alt="" />
                  <h2>${arr[i].strMeal}</h2>
                </div>
              </div>
            </div>


            <div class="col-sm-12 col-md-8">
              <h2>Instructions</h2>
              <p class="py-3">
              ${arr[i].strInstructions}
              </p>
              <ul class="detilInfo">
                <li><span class="fw-bold">Area : ${arr[i].strArea} </span><span></span></li>
                <li>
                  <span class="fw-bold">Category : ${arr[i].strCategory} </span><span></span>
                </li>
                <li>
                  <span class="fw-bold">Recipes : </span>
                  <span class="btn btn-light  fit text-"
                    > ${arr[i].strMeasure1}Measure
                  </span>
                  <span class="btn btn-light  fit my-2  mx-1">
                  ${arr[i].strMeasure2}Measure
                  </span>
                  <span class="btn btn-light  fit my-2  mx-1">
                  ${arr[i].strMeasure3}Measure
                  </span>
                  <span class="btn btn-light  fit my-2  mx-1">
                  ${arr[i].strMeasure4}Measure
                  </span>
                  <span class="btn btn-light  fit my-2  mx-1">
                  ${arr[i].strMeasure5}Measure
                  </span>
                  <span class="btn btn-light  fit my-2  mx-1">
                  ${arr[i].strMeasure6}Measure
                  </span>
                  <span class="btn btn-light  fit my-2  mx-1">
                  ${arr[i].strMeasure7}Measure
                  </span>
                  <span class="btn btn-light  fit my-2  mx-1">
                  ${arr[i].strMeasure8}Measure
                  </span>
                  <span class="btn btn-light  fit my-2  mx-1">
                  ${arr[i].strMeasure9}Measure
                  </span>
                  <span class="btn btn-light  fit my-2  mx-1">
                  ${arr[i].strMeasure10}Measure
                  </span>
                  <span class="btn btn-light  fit my-2  mx-1">
                  ${arr[i].strMeasure11}Measure
                  </span>
                  <span class="btn btn-light  fit my-2  mx-1">
                  ${arr[i].strMeasure12}Measure
                  </span>
                  <span class="btn btn-light  fit my-2  mx-1">
                  ${arr[i].strMeasure13}Measure
                  </span>
                </li>
                <li><span>Tags :
                  <span class="btn btn-info">
                  ${arr[i].strMeal}
                  </span>
                  <div class="link my-3">
                    <a href="${arr[i].strSource}" class="btn btn-success mx-2" target="_blank">Source</a>
                    <a href="${arr[i].strYoutube} " class="btn btn-danger fit" target="_blank">Youtube</a>

                  </div>
                </span></li>
              </ul>
            </div>
              `
    }

    document.getElementById('detiBody').innerHTML=body;
}

// =====================================================================

// ===================ditsSection=========================

const nameIbput = document.getElementById('nameInput')
const email =document.getElementById('emailInput')
const phoneInput =document.getElementById('phoneInput')
const ageInput = document.getElementById('ageInput')
const passwordInput = document.getElementById('passwordInput')
const repasswordInput =document.getElementById('repasswordInput')
const submitBtn = document.getElementById('submitBtn')
const signUp = document.querySelector('.signUp')
const nameAlert =document.getElementById('nameAlert')
const emailAlert =document.getElementById('emailAlert')
const phoneAlert =document.getElementById('phoneAlert')
const ageAlert =document.getElementById('ageAlert')
const passwordAlert =document.getElementById('passwordInput')
const repasswordAlert =document.getElementById('repasswordInput')
console.log(signUp);
signUp.addEventListener('click',function(e){
    e.preventDefault();
    if(allIsValied() == true && repasswordAlertValidition() == true    ){
        console.log('hekko');
        document.getElementById("submitBtn").disabled = false;
    }else{
        console.log(false);

    }

    
})









function validition(regex,element,warnning){
    var puttern = regex
    if (puttern.test(element.value)){
        console.log(true);
        warnning.classList.replace('d-block','d-none')
        element.classList.replace('is-invalid','is-valid')
        return true
    }
    else{
        warnning.classList.replace('d-none','d-block')
        element.classList.add('is-invalid')
        return false

    }
}

function allIsValied(){
    if(
        validition(/^[a-zA-Z0-9]{5,8}$/,nameIbput,nameAlert)  == true &&
        validition(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,email,emailAlert)    == true &&
        validition(/^[A-Z]{1}[0-9]{6}[\w]$/,passwordInput,passwordAlert)==true &&
        validition(/^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$/,ageInput,ageAlert)==true &&
        validition(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/,phoneInput,phoneAlert)==true
    ){
         console.log('ok');
return true
    }
    else{
         console.log('no');
         return false
    }
}
function repasswordAlertValidition(){
    if(passwordInput.value ==  repasswordInput.value){
        console.log(true);
        repasswordAlert.classList.replace('d-block','d-none')
        repasswordInput.classList.replace('is-invalid','is-valid')

        return true
    }
    else{
        repasswordAlert.classList.replace('d-none','d-block')

        repasswordInput.classList.add('is-invalid')

    }
}


