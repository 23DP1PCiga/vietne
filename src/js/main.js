const cat = document.getElementById('cat')
console.log(cat.innerHTML)
function catFetch(){
    fetch('https://catfact.ninja/fact')
     .then((response) => response.json())
     .then ((json) => {
        console.log(json.fact)
        cat.innerHTML = json.fact
     })
}
catFetch()

document.querySelector(".hero-text h1").addEventListener("mouseover", function() {
    this.textContent = "Enjoy Your stay in the ";
});
document.querySelector(".hero-text h1").addEventListener("mouseout", function() {
    this.textContent = "Welcome to Riga";
});


