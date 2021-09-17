const form = document.getElementById("form")
const username = document.getElementById("username")
const password = document.querySelector(".password")
const show = document.querySelector(".show")
var signIn = prompt("WHAT IS YOUR NAME?")
const jasper = signIn + "1211"

//var pledge = prompt("ARE YOU A WEEB DEGENERATE?")

//alert("SUBARASHI")


function changeBg(){
    
    const images = [
    "url('img1.jpg')",
    "url('img2.jpg')",
    "url('img3.jpg')",
    "url('img4.jpg')",
    "url('img5.jpg')",
    "url('img6.jpg')",
    "url('img7.jpg')",
    "url('img8.jpg')",
    "url('img9.jpg')",
    "url('img10.jpg')",
    "url('img11.jpg')",
    "url('img12.jpg')",
    "url('img13.jpg')",
    "url('img14.jpg')",
    "url('img15.jpg')",
    "url('img16.jpg')",
    "url('img17.jpg')",
    "url('img18.jpg')",
    "url('img19.jpg')",
    "url('img20.jpg')",
    "url('img21.jpg')",
    "url('img22.jpg')",
    "url('img23.jpg')",
    "url('img24.jpg')",
    "url('img25.jpg')",
    "url('img26.jpg')",
    "url('img27.jpg')",
    "url('img28.jpg')",
    "url('img29.jpg')",
    "url('img30.jpg')",                                                                                                                                                                                                                            
    "url('img31.jpg')",                                                                                                                                                                                                                           
    "url('img32.jpg')",                                                                                                                                                                                                                           
    "url('img33.jpg')",                                                                                                                                                                                                                            
    "url('img34.jpg')",                                                                                                                                                                                                                            
    "url('img35.jpg')",                                                                                                                                                                                                                            
    "url('img36.jpg')",                                                                                                                                                                                                                            
    "url('img37.jpg')",                                                                                                                                                                                                                            
    "url('img38.jpg')",                                                                                                                                                                                                                           
    "url('img39.jpg')"                                                                                                                                                                                                                            
    


]
const backg = document.getElementById('back')
const bg = images[Math.floor(Math.random() * images.length)];

backg.style.backgroundImage = bg
backg.classList.add('container')
}
setInterval(changeBg, 5000)

show.addEventListener('click', function() {
    if(password.type === "password"){
        password.type = "text"
      show.style.color = "#3498db"
      show.textContent = 'HIDE'
    }
    else{
      password.type = "password"
      show.style.color = "#222"
      show.textContent = 'SHOW'
    }
})

function showError(input, message){
  const formControl = input.parentElement;
  formControl.className = 'field error'
  const small = formControl.querySelector('small')
  small.innerText = message
}


function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className = 'field success'
  
}



form.addEventListener("submit", function(e){
  e.preventDefault()
  if(username.value == signIn){
 
    showSuccess(username)
  }
  else{
        showError(username, 'Username is incorrect')
    
  }

  if(password.value == jasper){
    showSuccess(password)
  }
  else{
       showError(password, 'Password is incorrect')
    
  }
  

  if(password.value === jasper && username.value === signIn){
    window.location.href = 'anime.html'
    showSuccess(password)
    showSuccess(username)
  }
 

  if(username.value !== signIn && password.value === jasper){
   
    showSuccess(password)
   // showError(username, 'Invalid Username')
  }
  else{
   // showError(username, "Invalid Username")
   // showError(password, "Invalid Password")
  }

  if(password.value !== jasper && username.value == signIn){
   
    showError(password, "Invalid Password")
    showSuccess(username)
  }


})
 
