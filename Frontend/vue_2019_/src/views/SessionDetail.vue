<template>
    <section class="w-100 h-100 p-3 m-0">
        <section class="p-4 m-0 border border-4 border-light-dark">
            <h4>Title</h4>
            <p class="p-0 m-0 mb-2">Description</p>
            <table>
                <tr>
                    <td class="fw-bold pe-4">Speaker:</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td class="fw-bold pe-4">Start:</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td class="fw-bold pe-4">End:</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td class="fw-bold pe-4">Cost:</td>
                    <td>123</td>
                </tr>
            </table>

        </section>
    </section>
</template>

<script>

export default {
    name: 'SessionDetail',
}
</script>
  

<style scoped>
.border-light-dark {
    border: 3px solid rgb(51, 51, 51) !important;
    border-radius: 3px;
}
</style>