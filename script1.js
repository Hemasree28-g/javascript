function Selectelements(){
    let heading = document.getElementById("heading");
    console.log("ID selector:",heading);
    let paragraph=document.getElementsByClassName("message");
    console.log("Class selector:",paragraph);
    let firstpara=document.querySelector(".message");
    console.log("query delector:",firstpara);
    let allpara=document.querySelectorAll(".message");
    console.log("queryselectorall:",allpara);
    alert("elements selected successfull!Celeck the console");
}