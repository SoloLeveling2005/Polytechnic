<template>
    <section>
        <section class="w-100 h-100 p-3 m-0">
            <section class="p-4 m-0 border border-4 border-light-dark">
                <h4>Login</h4>
                <table>
                    <tr>
                        <td class="pe-4">Lastname</td>
                        <td><input type="text" placeholder="Lastname" class="px-2 py-1" id="lastname"></td>
                    </tr>
                    <tr>
                        <td class="pe-4">Registration Code</td>
                        <td><input type="text" placeholder="Code" class="px-2 py-1" id="registration_code"></td>
                    </tr>
                    <tr>
                        <td class="pe-4"></td>
                        <td>
                            <button id="login" class="mt-2 bg-white py-1 px-5">Login</button>
                        </td>
                    </tr>
                </table>
            </section>
        </section>
    </section>
</template>

<script>

export default {
    name: 'AttendeeLogin',
}
</script>


<style scoped>
    .border-light-dark {
        border: 3px solid rgb(51, 51, 51) !important;
        border-radius: 3px;
    }
</style>