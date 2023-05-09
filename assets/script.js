const app = Vue.createApp({
    data() {
        return {
            todoList: [
                {
                    text: "Comprare il latte",
                    done: true
                },
                {
                    text: "Pulire la camera",
                    done: true
                },
                {
                    text: "Disinstallare JavaScript",
                    done: true
                }
            ],
            newTask: ""
        }
    },
    methods: {
        addTask(){
            if (this.newTask.trim() != "") {
                let clearTask = {
                    text: this.newTask.trim(),
                    done: true
                }
                this.todoList.unshift(clearTask);
                this.newTask = "";
            }
        },
        removeTask(i){
            this.todoList.splice(i, 1);
        },
        lineThrough(i){
            return this.todoList[i].done = !this.todoList[i].done;
        }
    }
});
app.mount("#app");