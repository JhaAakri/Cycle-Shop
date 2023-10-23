// var data=localStorage.getitem("prodct-detail-data")


var data=[{
    "large_img": "https://i.ibb.co/bLcS2ZZ/cycle.jpg",
    "img2": "https://m.media-amazon.com/images/I/91yzwj5bjpL._SY355_.jpg",
    "img3": "https://m.media-amazon.com/images/I/81YJaUtm2fL._SY355_.jpg",
    "img4": "https://m.media-amazon.com/images/I/811GabfBunL._SY355_.jpg",
    "img5": "https://m.media-amazon.com/images/I/91dxKrTuQAL._SY355_.jpg",
    "title": "Lifelong Conqueror Freeride Shimano Gear Cycle",
    "frame_colors": [
      "red"
    ],
    "front_wheel": "Traversal SL 29",
    "rear_wheel": "TRAVERSE SL 29",
    "Front_tire": "back",
    "inner_tubes": "STANDARD, PRESTA VALVE",
    "front_Wheel": "BUTCHER GRID TRAIL T7 29 * 2.3",
    "description": "This Shimano 21 speed geared cycle comes with Disc Brakes and suspension for effortless Braking system built for your ease of use and maintenance, and excellent braking power. Specially designed to provide proper braking control on all terrains. The cycle has a sturdy and reliable steel frame that can brave rough riding conditions and terrains. The top-notch construction quality ensures that the bike has a long lifespan",
    "rating": 4,
    "size": "27.5T",
    "year": 4520,
    "price": 11520,
    "category": "active",
    "img1": "",
    "Front Tire": "",
    "frame_model": "",
    "id": "bic1",
    "manufacturer_name": "",
    "serial": "",
    "thumb": "",
    "url": "",
    "status": "",
    "date_stolen": "",
    "is_stock_img": "",
    "location_found": "",
    "external_id": "",
    "registry_name": "",
    "registry_url": "",
    "stolen": "",
    "stolen_coordinates": "",
    "stolen_location": "",
    "exp": ""
  }]

// buttons 
// add to cart button
let addtocart=document.getElementById("addtocartbtn")
addtocart.addEventListener("click",()=>{
    localStorage.setItem("product-cart-data",[...data])
    //window.location.
    //link to cart page
})
//quick order button
let quickorderbtn=document.getElementById("quickorderbtn")
quickorderbtn.addEventListener("click",()=>{
    localStorage.setItem("product-checkout-data",[...data])
    //window.location.
    //link to address page
})
// console.log(cycle)

updatedom(data[0])

  
//slider ends

function updatedom(data){
               // main image
                let large_img=document.getElementById("large_img")
                large_img.setAttribute("src",data.large_img)
    
                //sub image
                let img2=document.getElementById("img2")
                img2.setAttribute("src",data.img2)
            
                let img3=document.getElementById("img3")
                img3.setAttribute("src",data.img3)
            
                let img4=document.getElementById("img4")
                img4.setAttribute("src",data.img4)
            
                let img5=document.getElementById("img5")
                img5.setAttribute("src",data.img5)
            
                //title
                let title=document.getElementById("title")
                title.innerText=data.title
            
                //S/N
                let year=document.getElementById("year")
                year.innerText=`S/N:- ${data.year}`
    
                //price
                let price=document.getElementById("price")
                price.innerText=`$ ${data.year}.00`
    
                //characterstics
                let front_wheel=document.getElementById("front_wheel")
                front_wheel.innerText=data.front_wheel
    
                let rear_wheel=document.getElementById("rear_wheel")
                rear_wheel.innerText=data.rear_wheel
    
                let front_tire=document.getElementById("front_tire")
                front_tire.innerText=data.front_Wheel
    
                let inner_tubes=document.getElementById("inner_tubes")
                inner_tubes.innerText=data.inner_tubes
    
                let inner_tire=document.getElementById("inner_tire")
                inner_tire.innerText=data.front_Wheel
    
                //description
                let description=document.getElementById("description_text")
                description.innerText=data.description
    
                //category
                let category=document.getElementById("category")
                category.innerText=`Category:- ${data.category}`
            }

    // console.log(id)
