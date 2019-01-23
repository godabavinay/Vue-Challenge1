new Vue({
    el: '#app',
    data: {
        enteredText: ''
    },
    methods: {
        updateText: function(event) {
            this.enteredText = event.target.value;
        }
    }
});