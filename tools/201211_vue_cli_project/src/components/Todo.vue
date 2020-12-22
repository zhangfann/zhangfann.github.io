<template>
    <div id="todo_app">
        <!-- 记事本 -->
        <div id="search">
            <input v-model="search_item" placeholder="请输入搜索" />
            <button @click="handleSearch(search_item)">搜索</button>
        </div>
        <ul>
            <li v-for="(todo, index) in todo_list" v-if="filterStatement(todo)">
                {{ todo.name }}
                <button @click="handleDelete(index)">-</button>
            </li>
        </ul>
        <div id="add_item">
            <input v-model="new_item" placeholder="输入新项目" />
            <button @click="handleAdd">+</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Todo",
    props: {
        msg: String,
    },
    data: function() {
        return {
            //todo_list: [{ name: "民主与人权" }, { name: "合同的生效时间" }],
            todo_list: [],
            new_item: "",
            search_item: "",
            axios_data: "",
        };
    },
    methods: {
        filterStatement: function(todo) {
            if (this.search_item == "") {
                return true;
            } else {
                return todo.name.search(this.search_item) != -1;
            }
        },
        handleDelete: function(index) {
            //TODO, 页面写好, 开始写函数了
            this.todo_list.splice(index, 1);
            parsed_list = JSON.stringify(this.todo_list);
            localStorage.setItem("todo_list", parsed_list);
        },
        handleSearch: function(search_item) {
            this.search_item = search_item;
        },
        handleAdd: function() {
            this.todo_list.push({
                name: this.new_item,
            });
            parsed_list = JSON.stringify(this.todo_list);
            localStorage.setItem("todo_list", parsed_list);
        },
    },
    mounted() {
        if (localStorage.getItem("todo_list")) {
            this.todo_list = JSON.parse(localStorage.getItem("todo_list"));
        }

        axios
            .get("https://api.apiopen.top/getJoke?page=1&count=2&type=video")
            .then((response) => {
                this.axios_data = response;
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
