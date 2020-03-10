<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.filterParams" :placeholder="$t('points.filter.param1')" clearable style="width: 280px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="getList">
        {{$t('global.search')}}
      </el-button>
    </div>


    <el-table
      v-loading="loading" :data="list" stripe fit highlight-current-row style="width: 100%"
    >
      <el-table-column align="center" :label="$t('points.table.org_code')" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.orgCode }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('points.table.org_name')">
        <template slot-scope="scope">
          <span>{{ scope.row.orgName }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('points.table.acq_flag')">
        <template slot-scope="scope">
          <span>{{ scope.row.acqFlag |yesOrNoFilter }}</span>
        </template>
      </el-table-column>

      <el-table-column  align="center" :label="$t('points.table.issu_flag')">
        <template slot-scope="scope">
          <span>{{ scope.row.issuFlag |yesOrNoFilter }}</span>
        </template>
      </el-table-column>

      <el-table-column  align="center" :label="$t('points.table.mobile')">
        <template slot-scope="scope">
          <span>{{ scope.row.mobile  }}</span>
        </template>
      </el-table-column>

<!--      <el-table-column width="120" align="center" :label="$t('points.table.shop_code')">-->
<!--        <template slot-scope="scope">-->
<!--          <span>{{ scope.row.shopCode  }}</span>-->
<!--        </template>-->
<!--      </el-table-column>-->
      <el-table-column  align="center" :label="$t('points.table.status')">
        <template slot-scope="scope">
          <span>{{ scope.row.status  |statusFilter}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('points.table.openid')">
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
            {{$t('points.table.group_controller')}}
          </el-button>
        </template>
      </el-table-column>




    </el-table>

    <el-dialog :title="$t('points.details')" :visible.sync="dialogFormVisible" >
      <el-form :model="select_points" label-width="80px">

        <el-form-item :label="$t('points.table.org_code')" prop="orgCode">
          <el-input v-model="select_points.orgCode" disabled />
        </el-form-item>
        <el-form-item :label="$t('points.table.org_name')" prop="orgName">
          <el-input v-model="select_points.orgName"  />
        </el-form-item>

        <el-form-item :label="$t('points.table.acq_flag')" prop="acqFlag">
          <el-input v-model="select_points.acqFlag"  />
        </el-form-item>

        <el-form-item :label="$t('points.table.issu_flag')" prop="issuFlag">
          <el-input v-model="select_points.issuFlag "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('points.table.mobile')" prop="mobile">
          <el-input v-model="select_points.mobile "  />
        </el-form-item>

        <el-form-item :label="$t('points.table.status')" prop="status">
          <el-input v-model="select_points.status "  disabled/>

        </el-form-item>

        <el-form-item :label="$t('points.table.cre_date')" prop="creDate">
          <el-input v-model="select_points.creDate "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('points.table.modi_date')" prop="modiDate">
          <el-input v-model="select_points.modiDate "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('points.table.teller')" prop="teller">
          <el-input v-model="select_points.teller "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('points.table.memo')" prop="memo">
          <el-input v-model="select_points.memo"  :autosize="{ minRows: 2, maxRows: 4}" type="textarea" />
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
import { list,update } from '@/api/points'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
const yesornoMap={
  1:'是',
  0:'否'
}
const statusMap={
  0:'禁用',
  1:'正常'

}
export default {
  name: 'pointsList',
  components: { Pagination },
  filters: {
    yesOrNoFilter(val){
      return yesornoMap[val]
    },
    statusFilter(val){
      return statusMap[val];
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
      select_points:{

      },
      select_points_index:0
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
      // this.select_points={}
      this.select_points= Object.assign({}, row) ;
      this.select_points_index=index;
      this.dialogFormVisible=true;
    },
    toGroupController(row){
      this.$router.push({path:'/points/group'})
    },
    update(){
      this.updating=true;
      update(this.select_points).then(response =>{
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
