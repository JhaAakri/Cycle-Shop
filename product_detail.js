var id=localStorage.getitem("item-id")

var baseurl="https://bicycle-shop-json-server.cyclic.app/bikes?id="
var url=baseurl+id


// buttons 
// add to cart button
let addtocart=document.getElementById("addtocartbtn")
addtocart.addEventListener("click",()=>{
    localStorage.setItem("id",)
    //set the product id to localstorage
})
//quick order button
let quickorderbtn=document.getElementById("quickorderbtn")
quickorderbtn.addEventListener("click",()=>{
    //link to address page
})
// console.log(cycle)



  
//slider ends
getData(url);
    async function getData(url){
        try {
            let res=await fetch(url);
            let data=await res.json();
            updatedom(data[0])
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
            
        } catch (error) {
            console.log(error)
        }
    }

    // console.log(id)
