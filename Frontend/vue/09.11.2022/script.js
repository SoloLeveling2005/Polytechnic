Vue.component('buttons', {
    data: function () {
        return {
            elements: [
                {
                    id:1,
                    title:"",
                    count:0,
                    classs:"btn btn-primary m-1",
                },
                {
                    id:2,
                    title:"",
                    count:0,
                    classs:"btn btn-primary m-1",
                },
                {
                    id:3,
                    title:"",
                    count:0,
                    classs:"btn btn-primary m-1",
                }
            ]
        }
    },
    methods:{
        re_class: function(id_element) {
            for (let elem of this.elements){
                if (Number(elem.id) == Number(id_element)) {
                    elem.classs = "btn btn-success m-1"
                } else {
                    elem.classs = "btn btn-primary m-1"
                }
            }
        }
    },
    template: 
    `
    <div>
        <div v-for="element in elements">
            <button :class="element.classs" type="button" :key="element.id" @click="element.count++,re_class(element.id)">{{element.count}}</button>
        </div>
    </div>
    
    
    `
})


new Vue ({
    el: '#components-demo'
})