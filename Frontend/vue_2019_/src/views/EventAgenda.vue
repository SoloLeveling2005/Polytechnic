<template>
    <section class="p-4 m-0 border border-4 border-light-dark">
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
            <div class="d-flex align-items-center justify-content-between mb-3">
                <h3 class="m-0 p-0">Event name</h3>
                <button class="bg-white fs-5">Register for this event</button>
            </div>
            <table class="w-100 h-100 p-0 m-0">
                <tr>
                    <td style="width: 15%;">
                        <div class="channel">Channel name 1</div>
                    </td>
                    <td style="width: 15%;">
                        <div class="room">Room name 1</div>
                        <div class="room">Room name 2</div>
                    </td>
                    
                    <td style="width: 70%;">
                        <div class="session">text title</div>
                        <div class="session">text title</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="channel">Channel name 2</div>
                    </td>
                    <td>
                        <div class="room">Room name 3</div>
                        <div class="room">Room name 4</div>
                        <div class="room">Room name 5</div>
                    </td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>
                        <div class="channel">Channel name 3</div>
                    </td>
                    <td>
                        <div class="room">Room name 6</div>
                        <div class="room">Room name 7</div>
                    </td>
                    <td>4</td>
                </tr>
            </table>
        </section>
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
    .border-light-dark {
        border: 3px solid rgb(51, 51, 51) !important;
        border-radius: 3px;
    }
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
        padding: 10px;
        margin: 0;
    }
    .room, .session {
        margin: 10px 0;
    }
    .session {
        padding: 5px 7px;
        border: 2px solid green;
        border-radius: 3px;
    }
</style>
  