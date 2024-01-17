document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById("todo-list"); //ตัวแปร todoList เก็บค่าของรายการแบบย่อหน้าที่มี ID เท่ากับ "todo-list"
    const todoInput = document.getElementById("todo-input");//ตัวแปร todoInput เก็บค่าของกล่องข้อความที่มี ID เท่ากับ "todo-input
    const addButton = document.getElementById("add-button");//ตัวแปร addButton เก็บค่าของปุ่มที่มี ID เท่ากับ "add-button"
    // อาร์เรย์สำหรับเก็บรายการ Todo
    let todos = [];
    // เพิ่มรายการ Todo
    function addTodo() { //ฟังก์ชัน addTodo() ทำหน้าที่เพิ่มรายการ Todo ใหม่ลงในอาร์เรย์ todos
        const todoText = todoInput.value.trim(); //ตัวแปร todoText เก็บค่าของกล่องข้อความ todoInput โดยไม่รวมช่องว่างแรกและช่องว่างท้าย
        if (todoText !== "") {//ถ้าตัวแปร todoText ไม่เท่ากับค่าว่าง
            const todoItem = {

                text: todoText,//ข้อความของรายการ Todo
                completed: false,//สถานะการเสร็จสิ้นของรายการ Todo
            };
            todos.push(todoItem);//เพิ่มวัตถุ todoItem ลงในอาร์เรย์ todos
            renderTodoList();
            todoInput.value = "";
        }
    }
    // ลบรายการ Todo
    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodoList();
    }
    // ตรวจสอบ/ยกเลิกการเสร็จสิ้นรายการ Todo
    function toggleComplete(index) {
        todos[index].completed = !todos[index].completed;
        renderTodoList();
    }
    // แสดงรายการ Todo บนหน้าเว็บ
    function renderTodoList() {
        console.log(todos);
        todoList.innerHTML = "";
        for (let i = 0; i < todos.length; i++) {
            const todoItem = todos[i];
            const listItem = document.createElement("li");
            listItem.textContent = todoItem.text;
            if (todoItem.completed) {
                listItem.classList.add("completed");
            }
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "ลบ";
            deleteButton.addEventListener("click", () => deleteTodo(i));
            const completeButton = document.createElement("button");
            completeButton.textContent = todoItem.completed ? "ยกเลิก" : "เสร็จ";
            completeButton.addEventListener("click", () => toggleComplete(i));
            listItem.appendChild(completeButton);
            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);
        }
    }
    // การกดปุ่ม "เพิ่ม"
    addButton.addEventListener("click", addTodo);
    // การกด Enter ใน input
    todoInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTodo();
        }
    });

    // แสดงรายการ Todo คร้ังแรก
    renderTodoList();
});