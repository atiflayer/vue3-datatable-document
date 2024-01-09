<template>
    <div>
        <div class="flex items-center justify-between mb-5">
            <h2 class="text-3xl">Static Mode</h2>
            <a target="_blank" href="https://github.com/bhaveshpatel200/vue3-datatable-document/blob/main/pages/static-mode.vue" class="btn">
                <icon-github class="w-5 h-5 mr-2" />
                View Source
            </a>
        </div>

        <vue3-datatable :rows="rows" :columns="cols" :loading="loading" :sortable="true" :columnFilter="true"> </vue3-datatable>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Vue3Datatable from '@bhplugin/vue3-datatable';
import '@bhplugin/vue3-datatable/dist/style.css';
const config = useRuntimeConfig();

onMounted(() => {
    getUsers();
});

const loading: any = ref(true);
const rows: any = ref(null);
const cols =
    ref([
        { field: 'invoice_id', title: 'ID', isUnique: true },
        { field: 'invoice_date', title: 'Date' },
        { field: 'invoice_final_price', title: 'Final Price' },
        { field: 'email', title: 'Email' },
        { field: 'age', title: 'Age', type: 'number' },
        { field: 'dob', title: 'Birthdate', type: 'date' },
        { field: 'address.city', title: 'City' },
        { field: 'isActive', title: 'Active', type: 'bool' },
    ]) || [];

const getUsers = async () => {
    try {
        loading.value = true;

        const response = await $fetch('/api/purchase-order-list', {
            method: 'POST',
            body: {
                "company_code": "d05049134c17ed5289ff4e810c2618e4",
                "limit": "50",
                "start": "0",
                "acc_customer_ledger_id": "50"
            },
        });

        console.log(response.data);

        const data = response.data

        // const response = await fetch('/api/user', {
        //     method: 'POST',
        //     body: JSON.stringify({ pagesize: 500 }),
        // });

        // const data = await response.json();

        rows.value = response.data
    } catch { }

    loading.value = false;
};
</script>
<style>
.bh-datatable .bh-table-responsive {
    @apply min-h-[380px];
}
</style>
