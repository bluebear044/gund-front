<template>
    <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action" :key="index" v-for="(data, index) in posts">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{data.title}} {{data.price}}</h5>
            <small class="text-body-secondary"><input type="button" value="재알림" @click="reAlert(data.id)"></small>
            </div>
            <p class="mb-1" @click="redirectUrl(data.url)">{{data.small_url}}</p>
        </a>
    </div>
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
                axios.get('http://121.129.205.223:5000/list', { responseType: 'json' }).then((response) => {
                    console.log(response.data)
                    this.posts = response.data
                    this.posts.forEach(item => {
                        item.small_url = item.url.substring(0, 40) + "..";
                    });
                })
            } catch (error) {
                console.log(error);
            }
        },
        reAlert(id) {
            try {
                axios.get('http://121.129.205.223:5000/delete/' + id).then((response) => {
                    
                    console.log(response.data)
                    if (response.data == '1') {
                        alert("재알림 설정 완료")
                        this.getData()
                    }
                    
                })
            } catch (error) {
                console.log(error);
            }
        },
        redirectUrl(url) {
            window.open(url, "_blank");
        }
    },
    mounted() {
        this.getData()
    }
}
</script>
