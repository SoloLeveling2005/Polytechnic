<template>
    <section class="w-100 h-100 m-0 p-3">
        <!-- <div class="table">
            <div class="row">
                <div class="col-2">1</div>
                <div class="col-2">1</div>
                <div class="col">1</div>
            </div>
            <div class="row">
                <div class="col-2">2</div>
                <div class="col-2">2</div>
                <div class="col">2</div>
            </div>
        </div> -->
        <table class="w-100 h-100 p-0 m-0">
            <tr>
                <td style="width: 15%;">1</td>
                <td style="width: 15%;">12</td>
                <td style="width: 70%;">1</td>
            </tr>
            <tr>
                <td>4</td>
                <td>4</td>
                <td>4</td>
            </tr>
        </table>
    </section>
</template>

<script>
import Event from '../components/Event'
export default {
name: 'EventAgenda',
data() {
    return {
    
    }
},
components: {
    Event
},
created() {

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    table, .table {
        border: 2px solid rgb(99, 99, 99);
        border-collapse: collapse;
    }
    tr, .row {
        width: 100%;
    }
    td, .col, .col-2 {
        border: 1px solid rgb(99, 99, 99);
        /* padding: 10px; */
        padding: 0;
        margin: 0;
    }
</style>
  