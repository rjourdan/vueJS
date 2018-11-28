new Vue({
   el: '#app', 
   data: {
       title: 'Becoming a Vue Ninja',
       Name: 'Ryu'
   },
   methods: {
    updateName(e){
        //console.log(e.target.value)
        this.Name = e.target.value
    }
   }
})