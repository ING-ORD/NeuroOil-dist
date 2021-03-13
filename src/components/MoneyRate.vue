<template>
    <div class="money-rate">
        
        <v-card min-height="100px" outlined>
            <v-card-title>Курс Доллара:</v-card-title>
            <!-- <v-card-subtitle>Курс Доллара США к Российскому рублю на сегодня</v-card-subtitle> -->
            <v-card-text><h2>{{course}}</h2></v-card-text>
        </v-card>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        data () {
            return {
                course:null,
            }
        },
        mounted(){
            axios
                .get('http://5.63.154.35:5000/exchange/usd')
                .then(response => {console.log(response.data)})
        },
        // computed :{
        //     cours: ()=>{
        //         axios
        //             .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        //             .then(() => {console.log("rr")})
        //         return true
        //     }
        // }
    }
</script>


<style scoped>

</style>