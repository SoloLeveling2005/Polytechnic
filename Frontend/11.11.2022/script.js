Vue.component('tasks', {
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
    methods: {
        num_plus: function (event) {
        }
    },
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
    `
})



new Vue ({
    el: '#tasks-section',
})


document.querySelectorAll(".button-complate")