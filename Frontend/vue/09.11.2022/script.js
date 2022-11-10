






Vue.component('Buttons', {
    props: ['count'],
    data: function () {
        return {
            hi:1
        }
    },
    methods: {
        num_plus: function (event) {
            event.path[0].innerHTML++
            for (let i of document.querySelectorAll(".btn")) {
                i.classList.remove('btn-primary');
                i.classList.remove('btn-success');
                if (i == event.path[0]) {
                    i.classList.add('btn-success');
                } else {
                    i.classList.add('btn-primary');
                }
            }
        }
    },
    template: 
    `
    <div>
        <div v-for="n in Number(count)" :key="n">
            <button class="btn btn-primary m-1" type="button" @click="num_plus">0</button>
        </div>
    </div>
    
    
    `
})


new Vue ({
    el: '#components-demo'
})