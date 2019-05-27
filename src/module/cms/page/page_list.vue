<template>
  <div>
    <el-button type="primary" size="small" @click="queryCmsPageList">查询</el-button>
    <el-table
      :data="list"
      stripe style="width: 100%">
      <el-table-column prop="siteId" label="站点ID" width="180">
      </el-table-column>
      <el-table-column prop="pageId" label="页面ID" width="180">
      </el-table-column>
      <el-table-column prop="pageName" label="页面名称" width="180">
      </el-table-column>
      <el-table-column prop="pageAliase" label="别名" width="180">
      </el-table-column>
      <el-table-column prop="pageWebPath" label="访问地址" width="180">
      </el-table-column>
      <el-table-column prop="pageParameter" label="参数" width="180">
      </el-table-column>
      <el-table-column prop="pagePhysicalPath" label="物理路径" width="180">
      </el-table-column>
      <el-table-column prop="pageType" label="类型（静态/动态）" width="180">
      </el-table-column>
      <el-table-column prop="pageTemplate" label="页面模版" width="180">
      </el-table-column>
      <el-table-column prop="pageHtml" label="页面静态化内容" width="180">
      </el-table-column>
      <el-table-column prop="pageStatus" label="状态" width="180">
      </el-table-column>
      <el-table-column prop="pageCreateTime" label="创建时间" width="180">
      </el-table-column>
      <el-table-column prop="templateId" label="模版id" width="180">
      </el-table-column>
      <el-table-column prop="pageParams" label="参数列表" width="180">
      </el-table-column>
      <el-table-column prop="htmlFileId" label="静态文件Id" width="180">
      </el-table-column>
      <el-table-column prop="dataUrl" label="数据Url" width="180">
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
