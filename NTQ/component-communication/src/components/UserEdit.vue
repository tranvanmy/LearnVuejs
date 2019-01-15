<template>
    <div class="component">
        <h3>Edit User</h3>
        <p>Tuoi cua toi: </p>
        <button @click="editAge">Thay doi</button>
    </div>
</template>

<script>
	import { eventBus } from '../main'
	export default {
        props: ['userAge'],
        methods: {
            editAge() {
                this.userAge += 1,
                eventBus.$emit('ageWasEdited', this.userAge)
            }
        }
    }
</script>
