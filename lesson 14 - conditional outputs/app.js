new Vue({
   el: '#app', 
   data: {
       title: 'Becoming a Vue Ninja',
       showName: false,
       showAge: true
   },
   methods: {
       toggleName(){
        this.showName = !this.showName
       },
       toggleAge(){
        this.showAge = !this.showAge
       }
   }
})