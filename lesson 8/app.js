new Vue({
   el: '#app', 
   data: {
       title: 'Becoming a Vue Ninja',
       name: 'ryu',
       url:'https://youtube.com',
       classes: ['one','two']
   },
   methods: {
       greet(time){
           return `Hello and good ${time}, ${this.name} `
       }
   }
})