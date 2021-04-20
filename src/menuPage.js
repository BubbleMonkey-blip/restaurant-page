const menuPage = () => {
    console.log("Menu");
    let menuPara = document.createElement("p");
    menuPara.innerText = "Coming Soon!!"
    document.getElementById("content").appendChild(menuPara); 
}

export { menuPage }