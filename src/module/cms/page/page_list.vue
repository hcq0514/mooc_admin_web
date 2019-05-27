<template>
  <div>
    <el-button type="primary" size="small" @click="queryCmsPageList">查询</el-button>
    <el-table
      :data="list"
      stripe style="width: 100%">
      <el-table-column  type="index" label="序号" >
      </el-table-column>
      <el-table-column prop="pageName" label="页面名称" >
      </el-table-column>
      <el-table-column prop="pageAliase" label="别名"  >
      </el-table-column>
      <el-table-column prop="pageWebPath" label="访问地址"  >
      </el-table-column>
      <el-table-column prop="pagePhysicalPath" label="物理路径"  >
      </el-table-column>
      <el-table-column prop="pageType" label="页面类型（静态/动态）"  >
      </el-table-column>
<!--      <el-table-column prop="pageStatus" label="状态"  >-->
<!--      </el-table-column>-->
      <el-table-column prop="pageCreateTime" label="创建时间"  >
      </el-table-column>
    </el-table>
    <el-pagination
      style="float: right"
      background
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
  </div>
</template>

<script>
  import * as cmsApi from '../api/cms'

  export default {
    data () {
      return {
        list: [],
        total: 50,
        params: {
          page: 1,//页码
          size: 2//每页显示个数
        }
      }
    },
    methods: {
      queryCmsPageList: function () {
        cmsApi.searchCmsPageList(this.params.page, this.params.size).then((value) => {
          console.log(value)
          this.total = value.queryResult.total
          this.list = value.queryResult.list
        })
      }
    }
  }
</script>

<style scoped>

</style>
