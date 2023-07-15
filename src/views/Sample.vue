<template>
    <div>
        <h1>{{title1}} {{title2}}</h1>
        <input type="text" v-model="input1" />
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>
        <button type="button" @click="toggleShow">toggleShow</button>
        <button type="button" @click="callRestAPI">callAPI</button>

        <select v-model="region" @change="changeRegion()">
            <option :key="index" :value="data.v" v-for="(data, index) in options">{{data.t}}</option>
        </select>

        <table v-show="tableShow">
            <tr :key="index" v-for="(data, index) in options">
                <td>{{data.v}}</td>
                <td>{{data.t}}</td>
            </tr>
        </table>

        <textarea>{{posts}}</textarea>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            title1: "aaa",
            title2: "bbb",
            input1: "input data",
            options: [
                {v:"s",t:"seoul"},
                {v:"b",t:"busan"},
                {v:"j",t:"jeju"},
            ],
            region: "j",
            tableShow: false,
            posts: "default value"
        };
    },
    watch: {
        input1() {
            console.log(this.input1);
        }
    },
    methods: {
        getData(){
            alert(this.input1)
        },
        setData(){
            this.input1 = "12345"
        },
        changeRegion() {
            alert(this.region)
        },
        toggleShow() {
            if(this.tableShow == false) {
                this.tableShow = true
            } else {
                this.tableShow = false
            }
        },
        async callRestAPI() {
            try {
                axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
                    console.log(response.data)
                    this.posts = response.data
                })
            } catch (error) {
                console.log(error);
            }
        }
    },
    beforeCreate() {
        console.log("beforeCreate")
    },
    created() {
        console.log("befcreatedoreCreate")
    },
    beforeMount() {
        console.log("beforeMount")
    },
    mounted() {
        console.log("mounted")
    },
    beforeUpdate() {
        console.log("beforeUpdate")
    },
    updated() {
        console.log("updated")
    }
}
</script>