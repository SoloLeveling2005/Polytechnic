let my_vue = new Vue ({
    el: '#tasks-section',
    data: function () {
        return {
            id_length: 0,
            tasks_data:[],
            delete_task_id:0,
        }
    },
    methods: {
        delete_task: function (task_id) {
            for (let index in this.tasks_data) {
                if (this.tasks_data[index].id == task_id) {
                    this.delete_task_id = index
                    document.querySelector(".message-for-user").style = "display:flex;"
                    break
                }
            }
        },
        perform_task: function (task_id) {
            for (let index in this.tasks_data) {
                console.log(this.tasks_data[index].id)
                console.log(task_id)
                if (this.tasks_data[index].id == task_id) {
                    this.tasks_data[index].do = "ready"
                }
            }
        }
    }
})


let create_task_button = new Vue ({
    el: '#create-task-block-button',
    data: function () {
        return {
        }
    },
    methods: {
        num_task: function (title,description) {
            if (document.querySelector(".input-name").value.trim() == "" || document.querySelector(".input-description").value.trim() == "") {
                  document.querySelector(".error").innerHTML = "Вы не заполнили все поля"
                  document.querySelector(".error").style = "display:flex;"
                  let error = () => {
                      document.querySelector(".error").innerHTML = ""
                      document.querySelector(".error").style = "display:none;"
                  }
                  setTimeout(error,2000)
            } else {
                    title = document.querySelector(".input-name").value.trim()
                    description = document.querySelector(".input-description").value.trim()
                    my_vue.tasks_data.push({
                        id:my_vue.id_length+=1,
                        title:title,
                        description:description,
                        do:"in_progress"
                    })
                    console.log(my_vue.tasks_data)
              }
        } 
    },
})
let confirm_delete_button = new Vue ({
    el: '#message-for-user',
    data: function () {
        return {
        }
    },
    methods: {
        confirm:function() {
            my_vue.tasks_data.splice(my_vue.delete_task_id, 1)
            document.querySelector(".message-for-user").style = "display:none;"
        },
        cancel:function() {
            my_vue.delete_task_id = 0
            document.querySelector(".message-for-user").style = "display:none;"
        }
    },
})
