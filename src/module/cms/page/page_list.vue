<template>
  <div>
    <el-button type="primary" size="small" @click="queryCmsPageList">查询</el-button>
    <el-table
      :data="list"
      stripe style="width: 100%">
      <el-table-column type="index" label="序号">
      </el-table-column>
      <el-table-column prop="pageName" label="页面名称">
      </el-table-column>
      <el-table-column prop="pageAliase" label="别名">
      </el-table-column>
      <el-table-column prop="pageWebPath" label="访问地址">
      </el-table-column>
      <el-table-column prop="pagePhysicalPath" label="物理路径">
      </el-table-column>
      <el-table-column prop="pageType" label="页面类型（静态/动态）">
      </el-table-column>
      <!--      <el-table-column prop="pageStatus" label="状态"  >-->
      <!--      </el-table-column>-->
      <el-table-column prop="pageCreateTime" label="创建时间">
      </el-table-column>
    </el-table>
    <el-pagination
      style="float: right"
      background
      layout="prev, pager, next"
      :current-page="this.params.page"
      @current-change="handleCurrentChange"
      :total="this.total">
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
          size: 10//每页显示个数
        }
      }
    },
    methods: {
      queryCmsPageList () {
        cmsApi.searchCmsPageList(this.params.page, this.params.size).then((value) => {
          this.total = value.queryResult.total
          this.list = value.queryResult.list
        })
      },
      //分页查询，接收page页码
      handleCurrentChange (page) {
        this.params.page = page
        this.queryCmsPageList()
      }
    },
    //钩子函数，一进来默认查询页面
    mounted () {
      this.queryCmsPageList()
    }
  }
</script>

<style scoped>

</style>
