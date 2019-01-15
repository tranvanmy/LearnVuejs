<template>
    <div>
        <app-header></app-header>
        <app-aside></app-aside>
        <app-footer></app-footer>
        <app-control-siderbar></app-control-siderbar>
    </div>
</template>

<script>
import Header from '@/components/header/Header';
import Aside from '@/components/aside/Aside';
import Footer from '@/components/footer/Footer';
import ControlSiderbar from '@/components/control-siderbar/ControlSiderbar';

export default {
    name: 'Admin',
    components: {
        Header,
        Aside,
        AppFooter,
        ControlSiderbar,
    }
}
