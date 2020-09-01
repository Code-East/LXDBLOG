<template>
    <div id='article_list'>
        <article-list-item v-for="(item,i) in datalist" :key="i" :item='item'/>
    </div>
</template>

<script>
import ArticleListItem from './ArticleListItem';

export default {
    props:{
        datalist:Array
    },
    components:{
        ArticleListItem
    }
 }
</script>

<style>
#article_list{
    width: 1150px;
    margin: 0 auto;
}
</style>