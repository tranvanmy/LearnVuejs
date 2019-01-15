<template>
    <div class="my-component">
        <ul>
            <li v-for="(food, key, index) of foods">{{ index }}.{{key}}.{{ food}}</li>
        </ul>
        <button v-on:click="counter += 1">Đếm cừu</button>
        <p>{{ counter }} con cừu.</p>
    </div>
</template>

<script>
    export default {
        name: 'MyComponent',
        data() {
            return {
                foods: {
                    food1: 'Hamburger',
                    food2: 'Sandwich',
                    food3: 'Chicken chop',
                },
                counter: 0
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
