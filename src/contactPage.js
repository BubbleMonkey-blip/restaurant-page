const contactPage = () => {
    console.log("Contact Page");
    let contactPara = document.createElement("p");
    contactPara.innerText = "Drop us a line at pizzeria@levi.com!!!"
    document.getElementById("content").appendChild(contactPara); 
}

export { contactPage }