console.log(`Interactive Website hoffentlich`);
console.log(`Muss noch mit Index site verbunden werden`)
document.getElementById("interH1").textContent = `Hi`; 

document.getElementById("interSubmitButton").onclick = function(){
    username = document.getElementById("interText").value;
    console.log(username);
    document.getElementById("interH1").textContent = `Fuck you ${username}`
}