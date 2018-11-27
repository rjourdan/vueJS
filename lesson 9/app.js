new Vue({
   el: '#app', 
   data: {
       title: 'Becoming a Vue Ninja',
   },
   methods: {
       changeWage(amount){
           this.wage += amount
       }
   }
})