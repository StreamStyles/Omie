<template>
    <div class="bg-black max-w-4xl mx-auto my-6 rounded p-10">
        <h1><img src="@/assets/omiePls.gif"/> {{ msg }} <img src="@/assets/omiePls.gif"/></h1>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 5px 0 0;
}

.bg-black {
    background-color:#1e1e1e;
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
