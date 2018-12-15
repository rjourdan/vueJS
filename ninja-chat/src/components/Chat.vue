<template>
<div class="chat container">
    <h2 class="center teal-text">Ninja Chat</h2>
    <div class="card-content">
        <ul class="messages">
            <li>
                <span class="teal-text">Name</span>
                <span class="grey-text text-darken-3">message</span>
                <span class="grey-text time">time</span>
            </li>
        </ul>
    </div>
    <div class="card-action">
       <NewMessage :name="name"/>
    </div>
</div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import { db,auth } from '@/firebase/init'

export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    },
    data(){
        return {

        }
    },
    created(){
       
        let ref = db.collection('messages')
     //whenever there is a change in the db we will trigger an action
        ref.onSnapShot(snapshot =>{ 
            console.log(snapshot.docChanges())
        })
    }
}
</script>

<style>
.chat h2{
    font-size: 2.6em;
    margin-bottom: 40px;
}

.chat span{
    font-size: 1.4em;
}
.chat .time{
    display: block;
    font-size: 1.4em;
}
</style>
