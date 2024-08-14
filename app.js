import { db, app, collection, addDoc, getDocs } from "./firebase.mjs";

let todoText = document.getElementById("todo-text");
let addTodo = document.getElementById("addtodo");
let show = document.getElementById("show-text");

addTodo.addEventListener("click", async () => {
    try {
        const docRef = await addDoc(collection(db, "todo"), {
            todos: todoText.value
        });
        console.log("Document written with ID: ", docRef.id);
        const querySnapshot = await getDocs(collection(db, "todo"));
        show.innerHTML = '';
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            show.innerHTML += `<li>${doc.data().todos}</li>`;
        });
        
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    if(todoText.value === ''){
        alert('Fill the Feild')
    }else{
        todoText.value = '';
    }
});
