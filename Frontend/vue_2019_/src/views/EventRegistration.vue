<template>
    <section class="w-100 h-100">
        <section class="p-4 m-0 border border-4 border-light-dark">
            <h2>Title event</h2>
            <div class="d-flex flex-wrap justify-content-between">
                <Ticket/>
                <Ticket/>
                <Ticket/>
                <Ticket/>

            </div>
            <div>
                <h4>Select additional workshops you want yo book:</h4>
                <div class="d-flex alig-items-center mb-3 workshop">
                    <input type="checkbox" name="" id="" style="transform:scale(1.2);" class="me-3">
                    <h5 class="p-0 m-0">Text</h5>
                </div>
                <div class="d-flex alig-items-center mb-3 workshop">
                    <input type="checkbox" name="" id="" style="transform:scale(1.2);" class="me-3">
                    <h5 class="p-0 m-0">Text</h5>
                </div>
                <div class="d-flex alig-items-center mb-3 workshop">
                    <input type="checkbox" name="" id="" style="transform:scale(1.2);" class="me-3">
                    <h5 class="p-0 m-0">Text</h5>
                </div>
            </div>

            <div class="d-flex justify-content-end fs-4">
                <table>
                    <tr>
                        <td class="pe-4">Event ticket</td>
                        <td>210.-</td>
                    </tr>
                    <tr>
                        <td class="pe-4">Additional workshops:</td>
                        <td>30.-</td>
                    </tr>
                    <tr>
                        <th class="pe-4">Total:</th>
                        <th>240.-</th>
                    </tr>
                </table>
            </div>
            <div class="d-flex justify-content-end fs-4">
                <button class="py-2 px-4 bg-white mt-5">Purchase</button>
            </div>

        </section>

    </section>
</template>

<script>
import Ticket from '../components/EventRegistration/Ticket'
export default {
    name: 'EventRegistration',
    data() {
        return {
        
        }
    },
    components:{
        Ticket
    },
    created() {

    }
}
</script>

<style scoped>
.border-light-dark {
    border: 3px solid rgb(51, 51, 51) !important;
    border-radius: 3px;
}
</style>
  