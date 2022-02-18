const vm = Vue.createApp({
    data(){
        return {
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            url: 'https://google.com',
            raw_url: '<a href="https://google.com" target="_blank">Google</a>',
            age: 20
        }
    }, 
    methods: {
        increment(){
            this.age++
        },
        updateLastName(msg, event) {
            this.lastName = event.target.value
        },
        updateMiddleName(event){
            this.middleName = event.target.value
        }
    },
        computed: {
            fullName() {
                console.log('fullname cp was called')
                return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
            },
    },
    watch: {
        age(newVal, oldVal) {
            setTimeout(() => {
                this.age = 20
            }, 3000)
        }
    }

}).mount('#app')

// setTimeout(() => {
//     vm.firstname = 'Bob'
// }, 2000)

// Vue.createApp({
//     data(){
//         return {
//             firstname: 'Jetze',
//             lastName: 'Janssens'
//         }
//     }
// }).mount('#app2')