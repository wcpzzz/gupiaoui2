<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.filterParams" :placeholder="$t('vips.filter.id_or_mobile_name')" clearable style="width: 280px;" class="filter-item" @keyup.enter.native="handleFilter" />
<!--      <el-select v-model="listQuery.importance" :placeholder="$t('merchants.choose')" clearable style="width: 120px" class="filter-item">-->
<!--        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />-->
<!--      </el-select>-->

      <el-input v-model="listQuery.grpCodeParams" :placeholder="$t('vips.filter.grp_code_or_org_code')" clearable style="width: 240px;" class="filter-item" @keyup.enter.native="handleFilter" />

      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="getList">
        {{$t('global.search')}}
      </el-button>
    </div>


    <el-table
      v-loading="loading" :data="list" stripe fit highlight-current-row style="width: 100%"
    >
      <el-table-column align="center" :label="$t('vips.table.cust_code')" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.custCode }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('vips.table.cust_name')">
        <template slot-scope="scope">
          <span>{{ scope.row.custName }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('vips.table.cust_src')">
        <template slot-scope="scope">
          <span>{{ scope.row.custSrc |custSrcFilter }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120" align="center" :label="$t('vips.table.own_Type')">
        <template slot-scope="scope">
          <span>{{ scope.row.ownType |ownTypeFilter }}</span>
        </template>
      </el-table-column>

      <el-table-column  align="center" :label="$t('vips.table.grp_code')">
        <template slot-scope="scope">
          <span>{{ scope.row.grpCode  }}</span>
        </template>
      </el-table-column>

<!--      <el-table-column width="120" align="center" :label="$t('vips.table.shop_code')">-->
<!--        <template slot-scope="scope">-->
<!--          <span>{{ scope.row.shopCode  }}</span>-->
<!--        </template>-->
<!--      </el-table-column>-->
      <el-table-column  align="center" :label="$t('vips.table.mobile')">
        <template slot-scope="scope">
          <span>{{ scope.row.mobile  }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('vips.table.photo')">
        <template slot-scope="scope">
          <span><img class="user-avatar" :src="scope.row.photo"></span>
        </template>
      </el-table-column>


      <el-table-column  align="center" :label="$t('vips.table.card_code')">
        <template slot-scope="scope">
          <span>{{ scope.row.cardCode  }}</span>
        </template>
      </el-table-column>



      <el-table-column :label="$t('global.actions')"align="center" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button type="warning"  @click="seeDetails(row,$index)">
            {{$t('global.edit')}}
          </el-button>
        </template>
      </el-table-column>




    </el-table>

    <el-dialog :title="$t('vips.details')" :visible.sync="dialogFormVisible" >
      <el-form :model="select_custinfo" label-width="80px">

        <el-form-item :label="$t('vips.table.cust_code')" prop="custCode">
          <el-input v-model="select_custinfo.custCode" disabled />
        </el-form-item>
        <el-form-item :label="$t('vips.table.cust_name')" prop="custName">
          <el-input v-model="select_custinfo.custName"  />
        </el-form-item>

        <el-form-item :label="$t('vips.table.cust_src')" prop="custSrc">
          <el-input v-model="src "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('vips.table.own_Type')" prop="ownType">
          <el-input v-model="ownType "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('vips.table.grp_code')" prop="grpCode">
          <el-input v-model="select_custinfo.grpCode "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('vips.table.shop_code')" prop="shopCode">
          <el-input v-model="select_custinfo.shopCode "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('vips.table.mobile')" prop="mobile">
          <el-input v-model="select_custinfo.mobile "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('vips.table.photo')" prop="photo">
<!--          <el-input v-model="select_custinfo.shopCode "  disabled/>-->
          <img :src="select_custinfo.photo" class="user-avatar">
        </el-form-item>

        <el-form-item :label="$t('vips.table.card_code')" prop="cardCode">
          <el-input v-model="select_custinfo.cardCode "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('vips.table.curr_points')" prop="currPoints">
          <el-input v-model="select_custinfo.currPoints "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('vips.table.openid')" prop="openid">
          <el-input v-model="select_custinfo.openid "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('vips.table.last_points')" prop="lastPoints">
          <el-input v-model="select_custinfo.lastPoints "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('vips.table.pay_cnt')" prop="payCnt">
          <el-input v-model="select_custinfo.payCnt "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('vips.table.pay_amt')" prop="payAmt">
          <el-input v-model="select_custinfo.payAmt "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('vips.table.pay_last_date')" prop="payLastDate">
          <el-input v-model="select_custinfo.payLastDate "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('vips.table.cre_date')" prop="creDate">
          <el-input v-model="select_custinfo.creDate "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('vips.table.modi_date')" prop="modiDate">
          <el-input v-model="select_custinfo.modiDate "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('vips.table.teller')" prop="teller">
          <el-input v-model="select_custinfo.teller "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('vips.table.memo')" prop="memo">
          <el-input v-model="select_custinfo.memo"  :autosize="{ minRows: 2, maxRows: 4}" type="textarea" />
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
import { list,update } from '@/api/vip'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

const srcMap = {
  1: '领券',
  2: '领卡',
  3: '导入',
}
const ownMap = {
  1: '商户',
  2: '第三方',
}
export default {
  name: 'vipList',
  components: { Pagination },
  filters: {
    custSrcFilter(src) {
      return srcMap[src]
    },
    ownTypeFilter(type) {
      return ownMap[type]
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
      select_custinfo:{

      },
      select_custinfo_index:0,
    }
  },
  created() {
    this.getList()
  },
  computed:{
    src:{
     get(){
        return srcMap[this.select_custinfo.custSrc];
      }
    },
    ownType:{
      get(){
        return ownMap[this.select_custinfo.ownType];
      }
    }
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
      // this.select_custinfo={}
      this.select_custinfo= Object.assign({}, row) ;
      this.select_custinfo_index=index;
      this.dialogFormVisible=true;
    },
    update(){
      this.updating=true;
      update(this.select_custinfo).then(response =>{
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
