const homePage = () => {
    let pizzaImage = document.createElement("img");
    pizzaImage.id = "pizzaImage";
    pizzaImage.setAttribute("src", "pizza.jpg");
    document.getElementById("content").appendChild(pizzaImage);

    let homeText = document.createElement("p");
    homeText.id = "homeText";
    homeText.innerText = "Come on down to Levi's Pizzeria, where the pizza is tasty and the prices are low.";
    document.getElementById("content").appendChild(homeText);
};

export { homePage }