// Productos

const products = [
    {
      name: 'HP Essentials 255 G8 AMD',
      price: 289,
      stars: '4/5',
      reviews: 250,
      image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg',
      link:'https://www.pccomponentes.com/hp-255-g8-amd-3020e-8gb-256gb-ssd-156',
      storage:'256GB'
    },
    {
        name:'POCO X6 Pro 5G 12/512GB Negro Libre',
        price:322.90,
        stars:'4.7/5',
        reviews: 355,
        image:'https://thumb.pccomponentes.com/w-530-530/articles/1081/10810987/1983-poco-x6-pro-5g-12-512gb-negro-libre-review.jpg',
        link:'https://www.pccomponentes.com/poco-x6-pro-5g-12-512gb-negro-libre',
        storage:'512GB',
    },
    {
        name:'Apple iPhone 15 Pro 128GB Titanio Natural Libre',
        price:1098.93,
        stars:'4.8/5',
        reviews:684,
        image:'https://thumb.pccomponentes.com/w-530-530/articles/1077/10777839/140-apple-iphone-15-pro-128gb-titanio-natural-libre.jpg',
        link:'https://www.pccomponentes.com/apple-iphone-15-pro-128gb-titanio-natural-libre',
        storage:'128GB',
    },
    {
        name:'Apple iPhone 13 128GB Medianoche Libre',
        price:609.01,
        stars:'4.6/5',
        reviews:377,
        image:'https://thumb.pccomponentes.com/w-530-530/articles/57/578960/126-apple-iphone-13-128gb-medianoche-libre.jpg',
        link:'https://www.pccomponentes.com/apple-iphone-13-128gb-medianoche-libre',
        storage:'128GB',
    },
    {
        name:'Móvil Samsung Galaxy S24 Ultra 12/512GB Negro Titanium Libre',
        price:1299,
        stars:'4.7/5',
        reviews:20774,
        image:'https://thumb.pccomponentes.com/w-530-530/articles/1081/10814365/1367-samsung-galaxy-s24-ultra-12-512gb-negro-titanium-libre.jpg',
        link:'https://www.pccomponentes.com/movil-samsung-galaxy-s24-ultra-12-512gb-negro-titanium-libre',
        storage:'512GB',
    },
    {
        name:'Móvil Apple iPhone 16 Plus 128GB Rosa',
        price:1109,
        stars:'4.8/5',
        reviews:7,
        image:'https://thumb.pccomponentes.com/w-530-530/articles/1085/10855038/1480-apple-iphone-16-plus-128gb-rosa.jpg',
        link:'https://www.pccomponentes.com/movil-apple-iphone-16-plus-128gb-rosa',
        storage:'128GB',
    },
    {
        name:'Monitor ASUS ROG Strix OLED XG27AQDMG 26.5" OLED QHD 240Hz FreeSync Premium',
        price:649,
        stars:'4.7/5',
        reviews:15,
        image:'https://thumb.pccomponentes.com/w-530-530/articles/1084/10845004/178-asus-rog-strix-oled-xg27aqdmg-265-oled-qhd-240hz-freesync-premium.jpg',
        link:'https://www.pccomponentes.com/monitor-asus-rog-strix-oled-xg27aqdmg-265-oled-qhd-240hz-freesync-premium',
        storage: '0GB',
    },
    {
        name:'Móvil Apple iPhone 16 Pro 128GB Titanio Desierto Libre',
        price:1219,
        stars:'4.6/5',
        reviews:13,
        image:'https://thumb.pccomponentes.com/w-530-530/articles/1085/10855053/1737-apple-iphone-16-pro-128gb-titanio-desierto-libre.jpg',
        link:'https://www.pccomponentes.com/movil-apple-iphone-16-pro-128gb-titanio-desierto-libre',
        storage:'128GB',
    },
    {
        name:'ASUS ROG Strix G16 G614JIR-N4003 Intel Core i9-14900HX/32GB/1TB SSD/RTX 4070/16"',
        price:1899,
        stars:'4.7/5',
        reviews:312,
        image:'https://thumb.pccomponentes.com/w-530-530/articles/1081/10811698/1946-asus-rog-strix-g16-g614jir-n4003-intel-core-i9-14900hx-32gb-1tb-ssd-rtx-4070-16.jpg',
        link:'https://www.pccomponentes.com/asus-rog-strix-g16-g614jir-n4003-intel-core-i9-14900hx-32gb-1tb-ssd-rtx-4070-16',
        storage:'1TB',
    },
    {
        name:'LG 65UT73006LA 65" LED UltraHD 4K HDR10 Pro WebOS24 AI ThinQ',
        price:549,
        stars:'4.5/5',
        reviews:135,
        image:'https://thumb.pccomponentes.com/w-530-530/articles/1082/10826342/3445-lg-65ut73006la-65-led-ultrahd-4k-hdr10-pro-webos24-ai-thinq-b24af160-a94d-4331-907c-d8fa49f8e5ea.jpg',
        link:'https://www.pccomponentes.com/lg-65ut73006la-65-led-ultrahd-4k-hdr10-pro-webos24-ai-thinq',
        storage:'8GB'
    },
  ];

//   Código 
const section = document.querySelector(`.products`)

refresh()

function refresh (){
    section.innerHTML="";
for (let  i=0; i<products.length; i++){
    const article = document.createElement(`article`)
    const img = document.createElement(`img`)
    const title = document.createElement(`h2`)
    const button = document.createElement(`button`)
    const price = document.createElement(`p`)
    const reviews = document.createElement(`p`)
    reviews.classList.add(`reviews`)
    const stars = document.createElement(`p`)
    stars.classList.add(`stars`)
    const rating = document.createElement(`div`)
    rating.classList.add(`rating`)
    img.src = products[i].image
    title.innerText = products[i].name
    button.innerText = "Comprar"
    button.classList.add(`button`)
    button.addEventListener('click', ()=> {
        window.location.href= products[i].link
    })
    price.innerHTML = products[i].price
    price.classList.add(`price`)
    reviews.innerText = products[i].reviews
    stars.innerText = products[i].stars
    article.appendChild(img)
    article.appendChild(title)
    rating.appendChild(stars)
    rating.appendChild(reviews)
    article.appendChild(rating)
    article.appendChild(price)
    article.appendChild(button)
    article.classList.add(`product`)
    section.appendChild(article)


}
}
var minValue = Infinity;
// Filtros

 for (let i=0; i<products.length; i++){
     if(minValue > products[i].price){
         minValue = products[i].price
     }

 }

var maxValue = 0;
for (let i=0; i<products.length; i++){
    if(maxValue < products[i].price){
        maxValue = products[i].price
    }

}

const title = document.createElement(`h3`)
title.textContent = "Filtros de búsqueda"
const filters = document.querySelector(`.filters`)
filters.appendChild(title)
const values = document.createElement(`div`)
const min = document.createElement(`span`)
const max = document.createElement(`span`)
values.appendChild(min)
values.appendChild(max)
filters.appendChild(values)
values.classList.add("values")

const range = document.createElement(`input`)
range.classList.add("range")
range.type = "range"
range.min = minValue
min.textContent = range.min
range.max = maxValue
max.textContent = range.max
filters.appendChild(range)


function check (){
    for (let j=hide.length - 1; j>=0; j--){
        if (hide.length > 0){
            if (hide[j].price >= range.value){
                products.push(hide[j])
                hide.splice([j],1)
    
                
        }

        }
        
}
}

const hide = []
range.addEventListener("change", () =>{
    for (let i=products.length - 1; i>=0; i--){
        if (products[i].price < range.value){
            hide.push(products[i])
            products.splice([i],1)
        }
    } 
    check()
    refresh()
    minValue = range.value
    min.textContent = minValue
    
})



















// Filtros para telefono

const filtersMobile = document.querySelector(".filters-mobile")
const divisor = document.createElement("div")

const filterButton = document.createElement("button")
filtersMobile.appendChild(divisor)
divisor.appendChild(filterButton)

filterButton.addEventListener("click", ()=>{
    const main = document.querySelector("main")
    main.innerHTML= ""
    const aside = document.createElement("aside")
    aside.classList.add("filters-popup")
    main.appendChild(aside)
    // Filtros
    var minValue = Infinity;

 for (let i=0; i<products.length; i++){
     if(minValue > products[i].price){
         minValue = products[i].price
     }

 }

var maxValue = 0;
for (let i=0; i<products.length; i++){
    if(maxValue < products[i].price){
        maxValue = products[i].price
    }

}

const title = document.createElement(`h3`)
title.textContent = "Filtros de búsqueda"
const filters = document.querySelector(`.filters-popup`)
filters.appendChild(title)
const values = document.createElement(`div`)
const min = document.createElement(`span`)
const max = document.createElement(`span`)
values.appendChild(min)
values.appendChild(max)
filters.appendChild(values)
values.classList.add("values")

const range = document.createElement(`input`)
range.classList.add("range")
range.type = "range"
range.min = minValue
min.textContent = range.min
range.max = maxValue
max.textContent = range.max
filters.appendChild(range)


function check (){
    for (let j=hide.length - 1; j>=0; j--){
        if (hide.length > 0){
            if (hide[j].price >= range.value){
                products.push(hide[j])
                hide.splice([j],1)
    
                
        }

        }
        
}
}

const hide = []
range.addEventListener("change", () =>{
    for (let i=products.length - 1; i>=0; i--){
        if (products[i].price < range.value){
            hide.push(products[i])
            products.splice([i],1)
        }
    } 
    check()
    refresh()
    minValue = range.value
    min.textContent = minValue
    
})





})

























// Búsqueda


const searchBar = document.createElement(`input`)
const label = document.createElement(`label`)
searchBar.type = "text"
searchBar.placeholder = "Escribe tu búsqueda"
searchBar.classList.add("searchBar")
label.innerText = "Barra de búsqueda:"
filters.appendChild(label)
filters.appendChild(searchBar)


const hidden = [];

function check2() {
    for (let j = hidden.length - 1; j >= 0; j--) {
        if (hidden[j].name.toLowerCase().includes(searchBar.value.toLocaleLowerCase())) {
            products.push(hidden[j]);
            hidden.splice(j, 1);
        }
    }
}

searchBar.addEventListener("input", () => {
    // Verifica si el campo de búsqueda no está vacío
    if (searchBar.value == "") {
        refresh()
    }
        console.log(searchBar.value)
        for (let i = products.length - 1; i >= 0; i--) {
            // Si el nombre del producto contiene el valor de búsqueda
            if (!products[i].name.toLowerCase().includes(searchBar.value.toLowerCase())) {
                 hidden.push(products[i]);
                 products.splice(i, 1);
                console.log("NO-incluye");
            }
        }
        check2();
    refresh();
});


// Capacidad


const labelStorage = document.createElement('label')
labelStorage.innerText= "Almacenamiento:"

filters.appendChild(labelStorage)

const storageList =[]

for (let i=0; i<products.length; i++){
    if(products[i].storage !== ''){
    if(!storageList.includes(products[i].storage) )
        storageList.push(products[i].storage)
}
}


storageList.sort((a, b) => { 
    const convertToGB = (size) => {
        if (size.endsWith("TB")) {
            return parseFloat(size) * 1024;
        } else if (size.endsWith("GB")) {
            return parseFloat(size);
        }
        return 0;
    };
    
    return convertToGB(a) - convertToGB(b);
});

console.log(storageList)

const storageFilters = document.createElement('div')
storageFilters.classList.add("storageFilters")
filters.appendChild(storageFilters)



const hiddenProducts = [];




for (let i = 0; i < storageList.length; i++) {
    const group = document.createElement('div')
    group.classList.add('group')
    const storage = document.createElement('input');
    storage.type = "checkbox";
    storage.id = storageList[i];
    storage.name = storageList[i];
    storage.checked = true
    
    const labelStorage = document.createElement('label');
    labelStorage.htmlFor = storageList[i];
    labelStorage.innerText = storageList[i];

    group.appendChild(storage)
    group.appendChild(labelStorage)

    storageFilters.appendChild(group);

    storage.addEventListener("change", () => {

        for (let j = 0; j < storageList.length; j++) {
            const checkbox = document.getElementById(storageList[j]);

            if (checkbox.checked) {

                for (let l = hiddenProducts.length - 1; l >= 0; l--) {
                    if (hiddenProducts[l] && hiddenProducts[l].storage === checkbox.id) {
                        products.push(hiddenProducts[l]);
                        hiddenProducts.splice(l, 1);
                    }
                }
            } else {

                for (let k = products.length - 1; k >= 0; k--) {
                    if (products[k] && products[k].storage === checkbox.id) {
                        hiddenProducts.push(products[k]);
                        products.splice(k, 1);
                    }
                }
            }
        }
        


        refresh();
    });
}



