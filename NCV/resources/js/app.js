
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue';
import Admin from './components/Admin.vue';

require('./bootstrap');

new Vue({
    el: '#app',
    render: h => h(Admin),
    component: {
        'app': Admin
    }
});
