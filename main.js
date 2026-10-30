 const welcomeMessage= document.getElementById("welcoming-message"); // dom 
    welcomeMessage.innerText ="welcome";
    welcomeMessage.style.color="red";

    function sayHello(){
 alert("welcome"); 
 console.log("button clicked");
        
    }

    function addNewService(){
        const input =document.getElementById("service");
        const list = document.querySelector(".service-list");

        const newLi = document.createElement("li");
        newLi.style.color="green";
        newLi.classList.add("li-item");
        if(input.value==""){
            return;
        }
        newLi.innerText=input.value;
        list.appendChild(newLi);
        input.value="";
        input.focus();

    }

    function printToConsole(){
        const table = document.getElementsByTagName("table")[0];
        for( const row of table.rows){
            if(row.rowIndex==0){
                continue;
            }

            for(const cell of row.cells){
                console.log(cell.innerText);
            }
        }
    }