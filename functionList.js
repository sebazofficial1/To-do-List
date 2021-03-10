
window.onload = function(){
const ulList = document.createElement("ul");
ulList.id = "ulList"
ulList.className = "list"

const refForInsert = document.getElementById("refForInsert");
refForInsert.parentNode.insertBefore(ulList, refForInsert.nextSibling);
}

let i = 1;

const getInputandInsertElements = () =>{
	n = i.toString();
	const theInput = document.getElementById('input').value;
	if(theInput == ""){
		alert("Please write something");
 		 return false;
}
	else {
		const liElement = document.createElement("li");
		const removeButton = document.createElement("button");
		removeButton.id = "removeButton";
		removeButton.innerText = "Done";
		liElement.id = `elem${n}`;
		liElement.innerText = theInput;
		removeButton.addEventListener("click", function(){liElement.remove()})
		liElement.appendChild(removeButton);
		ulList.appendChild(liElement);
		i++;
		}
	}

	const deleteAll = () =>{
    ulList.innerText = "";
}