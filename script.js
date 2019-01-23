new Vue({
    el: '#app',
    data: {
        enteredText: 'Text'
    },
    methods: {
        updateText: function(event) {
            this.enteredText = event.target.value;
        }
    }
});