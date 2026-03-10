index.html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Color Changer</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<div class="container">

<h1>Color Changer</h1>

<div class="buttons">
<button class="colorBtn" data-color="red">Red</button>
<button class="colorBtn" data-color="green">Green</button>
<button class="colorBtn" data-color="blue">Blue</button>
</div>

</div>

<script src="script.js"></script>
  ----------------------------------------------------------------------------
    style.css

    *{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial;
}

body{
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:white;
transition:0.4s;
}

.container{
background:#ffffffcc;
padding:40px;
border-radius:10px;
text-align:center;
}

button{
padding:10px 18px;
margin:10px;
border:none;
cursor:pointer;
font-size:16px;
border-radius:5px;
}

button:hover{
transform:scale(1.05);
}
------------------------------------------------------------------------------

script.js

  const buttons = document.querySelectorAll(".colorBtn")

buttons.forEach(function(btn){

btn.addEventListener("click", function(){

const color = btn.getAttribute("data-color")

document.body.style.backgroundColor = color

})

})
  

</body>
</html>
