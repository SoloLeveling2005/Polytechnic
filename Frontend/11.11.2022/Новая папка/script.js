let vue_component = Vue.component('tasks', {
    // props: ['do'],
    data: function () {
        return {
            id_length:1,
            tasks: [
                {
                    id:0,
                    title:"Task 1",
                    description:"Description task",
                    do:"in_progress" // in_progress,ready,deletions
                },
                {
                    id:1,
                    title:"Task 2",
                    description:"Description task",
                    do:"in_progress" // in_progress,ready,deletions
                }
            ]
        }
    },
    // methods: {
    //     num_task: function (title,description) {
    //         if (document.querySelector(".input-name").value.trim() == "" || document.querySelector(".input-description").value.trim() == "") {
    //             document.querySelector(".error").innerHTML = "Вы не заполнили все поля"
    //             document.querySelector(".error").style = "display:flex;"
    //             let error = () => {
    //                 document.querySelector(".error").innerHTML = ""
    //                 document.querySelector(".error").style = "display:none;"
    //             }
    //             setTimeout(error,2000)
    //         } else {
    //             title = document.querySelector(".input-name").value.trim()
    //             description = document.querySelector(".input-description").value.trim()
    //             my_vue.num_task(title,description)
    //         }
    //         console.log(tasks)
    //     }
        
    // },
    template: 
    `
    <div>
        <div v-for="task in tasks">
            <div class="task" :id="task.id">
                <div class="title-description">
                    <p class="title-text in_progress-title">{{task.title}}</p>
                    <p class="description-text in_progress-description">{{task.description}}</p>
                </div>
                <div class="buttons">
                    <button class="button-complate">Complate</button>
                    <button class="button-delete">Delete</button>
                </div>
            </div>
        </div> 
    </div>
    `,
    
})



let my_vue = new Vue ({
    el: '#tasks-section',
})


let create_task_button = new Vue ({
    el: '#create-task-block-button',
    data() {
        return {
          message: 'Hello Vue!'
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
                    console.log(vue_component.data)
                    my_vue.tasks.push({
                        id:my_vue.id_length,
                        title:title,
                        description:description,
                        do:"in_progress"
                    })
                    my_vue.id_length+=1
              }
              console.log(tasks)
          }
          
      },
})
