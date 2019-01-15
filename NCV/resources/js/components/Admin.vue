<template>
    <div>
        <app-header></app-header>
        <app-sidebar></app-sidebar>
            <div class="content-wrapper"></div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from '@/components/header/Header';
import AppSidebar from '@/components/sidebar/Sidebar';
import AppFooter from '@/components/footer/Footer';

    export default {
        name: 'Admin',
        components: {
            AppHeader,
            AppSidebar,
            AppFooter,
        }
    }
</script>
