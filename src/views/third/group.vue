<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.filterParams" :placeholder="$t('third.filter.param1')" clearable style="width: 280px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="getList">
        {{$t('global.search')}}
      </el-button>
    </div>


    <el-table
      v-loading="loading" :data="list" stripe fit highlight-current-row style="width: 100%"
    >
      <el-table-column align="center" :label="$t('third.group.table.openid')">
        <template slot-scope="scope">
          <span>{{ scope.row.openid  }}</span>
        </template>
      </el-table-column>


      <el-table-column width="200" :label="$t('global.actions')"align="center" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button type="warning"  @click="seeDetails(row,$index)">
            {{$t('global.edit')}}
          </el-button>
          <el-button type="success"  @click="toGroupController(row)">
            {{$t('third.group.table.group_controller')}}
          </el-button>
        </template>
      </el-table-column>




    </el-table>

    <el-dialog :title="$t('third.details')" :visible.sync="dialogFormVisible" >
      <el-form :model="select_group" label-width="80px">

        <el-form-item :label="$t('third.group.table.org_code')" prop="orgCode">
          <el-input v-model="select_group.orgCode" disabled />
        </el-form-item>
        <el-form-item :label="$t('third.group.table.org_name')" prop="orgName">
          <el-input v-model="select_group.orgName"  />
        </el-form-item>

        <el-form-item :label="$t('third.group.table.acq_flag')" prop="acqFlag">
          <el-input v-model="select_group.acqFlag"  />
        </el-form-item>

        <el-form-item :label="$t('third.group.table.issu_flag')" prop="issuFlag">
          <el-input v-model="select_group.issuFlag "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('third.group.table.mobile')" prop="mobile">
          <el-input v-model="select_group.mobile "  />
        </el-form-item>

        <el-form-item :label="$t('third.group.table.status')" prop="status">
          <el-input v-model="select_group.status "  disabled/>

        </el-form-item>

        <el-form-item :label="$t('third.group.table.cre_date')" prop="creDate">
          <el-input v-model="select_group.creDate "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('third.group.table.modi_date')" prop="modiDate">
          <el-input v-model="select_group.modiDate "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('third.group.table.teller')" prop="teller">
          <el-input v-model="select_group.teller "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('third.group.table.memo')" prop="memo">
          <el-input v-model="select_group.memo"  :autosize="{ minRows: 2, maxRows: 4}" type="textarea" />
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="update" :loading="updating">确 定</el-button>
      </div>
    </el-dialog>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageNo" :limit.sync="listQuery.pageSize" @pagination="getList" />
  </div>
</template>

<script>
  import { list,update } from '@/api/third'
  import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
  export default {
    name: 'thirdList',
    components: { Pagination },
    filters: {
      yesOrNoFilter(val){
        return yesornoMap[val]
      }
    },
    data() {
      return {
        list: null,
        total: 0,
        loading: true,
        listQuery: {
          pageNo: 1,
          pageSize: 10,
          filterParams:'',
          grpCodeParams:''

        },
        dialogFormVisible:false,
        updating:false,
        select_group:{

        },
        select_group_index:0
      }
    },
    created() {
      this.getList()
    },
    computed:{

    },
    methods: {
      getList() {
        this.loading = true
        list(this.listQuery).then(response => {
          this.list = response.data.list
          this.total = response.data.total
          this.loading = false
        })
      },
      seeDetails(row,index){
        // this.select_group={}
        this.select_group= Object.assign({}, row) ;
        this.select_group_index=index;
        this.dialogFormVisible=true;
      },
      toGroupController(row){
        this.$router.push({path:'/third/group'})
      },
      update(){
        this.updating=true;
        update(this.select_group).then(response =>{
          this.updating=false;
          this.dialogFormVisible=false;
          this.getList();
        }).catch(error=>{
          this.updating=false;
        })

      }
    }
  }
</script>

<style scoped>
  .edit-input {
    padding-right: 100px;
  }
  .cancel-btn {
    position: absolute;
    right: 15px;
    top: 10px;
  }
  .user-avatar {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }

</style>
