<template>
    <table>
        <tr :key="index" v-for="(data, index) in posts">
            <td>{{data.id}}</td>
            <td>{{data.url}}</td>
            <td>{{data.title}}</td>
            <td>
                <input type="button" value="재알림" @click="reAlert(data.id)">
            </td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            posts: ""
        };
    },
    methods: {
        async getData() {
            try {
                axios.get('http://172.30.1.1:5000/list', { responseType: 'json' }).then((response) => {
                    console.log(response.data)
                    this.posts = response.data
                })
            } catch (error) {
                console.log(error);
            }
        },
        reAlert(id) {
            try {
                axios.get('http://172.30.1.1:5000/delete/' + id).then((response) => {
                    
                    console.log(response.data)
                    if (response.data == '1') {
                        alert("재알림 설정 완료")
                        this.getData()
                    }
                    
                })
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.getData()
    }
}
</script>