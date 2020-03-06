<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.filterParams" :placeholder="$t('coupon.filter.param1')" clearable style="width: 280px;" class="filter-item" @keyup.enter.native="handleFilter" />
<!--      <el-select v-model="listQuery.importance" :placeholder="$t('merchants.choose')" clearable style="width: 120px" class="filter-item">-->
<!--        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />-->
<!--      </el-select>-->

      <el-input v-model="listQuery.grpCodeParams" :placeholder="$t('coupon.filter.param2')" clearable style="width: 240px;" class="filter-item" @keyup.enter.native="handleFilter" />

      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="getList">
        {{$t('global.search')}}
      </el-button>
    </div>


    <el-table
      v-loading="loading" :data="list" stripe fit highlight-current-row style="width: 100%"
      @sort-change="sortChange"
    >
      <el-table-column align="center" :label="$t('coupon.table.coupon_code')" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.couponCode }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('coupon.table.coupon_name')">
        <template slot-scope="scope">
          <span>{{ scope.row.couponName }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('coupon.table.own_type')">
        <template slot-scope="scope">
          <span>{{ scope.row.ownType }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120" align="center" :label="$t('coupon.table.grp_code')">
        <template slot-scope="scope">
          <span>{{ scope.row.grpCode }}</span>
        </template>
      </el-table-column>

      <el-table-column  align="center" :label="$t('coupon.table.coupon_type')">
        <template slot-scope="scope">
          <span>{{ scope.row.couponType  }}</span>
        </template>
      </el-table-column>

<!--      <el-table-column width="120" align="center" :label="$t('coupon.table.shop_code')">-->
<!--        <template slot-scope="scope">-->
<!--          <span>{{ scope.row.shopCode  }}</span>-->
<!--        </template>-->
<!--      </el-table-column>-->
      <el-table-column  align="center" :label="$t('coupon.table.give_falg')">
        <template slot-scope="scope">
          <span>{{ scope.row.giveFalg  }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('coupon.table.share_falg')">
        <template slot-scope="scope">
          <span>{{ scope.row.shareFalg  }}</span>
        </template>
      </el-table-column>


      <el-table-column  align="center" :label="$t('coupon.table.stock_num')"  sortable prop="stock_num" :sort-method="stockNumSort">
        <template slot-scope="scope">
          <span>{{ scope.row.stockNum  }}</span>
        </template>
      </el-table-column>

      <el-table-column  align="center" width="180" :label="$t('coupon.table.limit_num')" sortable prop="limit_num" :sort-method="limitNumSort">
        <template slot-scope="scope">
          <span>{{ scope.row.limitNum  }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('global.actions')"align="center" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button type="warning" @click="seeDetails(row,$index)">
            {{$t('global.edit')}}
          </el-button>
        </template>
      </el-table-column>

    </el-table>

    <el-dialog :title="$t('coupon.details')" :visible.sync="dialogFormVisible" >
      <el-form :model="select_coupon" label-width="120px">

        <el-form-item :label="$t('coupon.table.coupon_code')" prop="custCode">
          <el-input v-model="select_coupon.couponCode" disabled />
        </el-form-item>
        <el-form-item :label="$t('coupon.table.coupon_name')" prop="custName">
          <el-input v-model="select_coupon.couponName"  />
        </el-form-item>

        <el-form-item :label="$t('coupon.table.own_type')" prop="ownType">
          <el-input v-model="ownType"  disabled />

        </el-form-item>

        <el-form-item :label="$t('coupon.table.grp_code')" prop="grpCode">
          <el-input v-model="select_coupon.grpCode" disabled/>
        </el-form-item>

        <el-form-item :label="$t('coupon.table.coupon_type')" prop="couponType">
          <el-input v-model="couponType"  disabled />

<!--          <el-select v-model="select_coupon.couponType">-->
<!--            <el-option-->
<!--              v-for="item in options.couponType"-->
<!--              :key="item.value"-->
<!--              :label="item.label"-->
<!--              :value="item.value">-->
<!--            </el-option>-->
<!--          </el-select>-->
        </el-form-item>

        <el-form-item :label="$t('coupon.table.brand_code')" prop="brandCode">
          <el-input v-model="select_coupon.brandCode "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('coupon.table.coupon_color')" prop="couponColor">
          <el-color-picker v-model="select_coupon.couponColor"></el-color-picker>
        </el-form-item>

        <el-form-item :label="$t('coupon.table.exp_type')" prop="expType">
          <el-select v-model="select_coupon.expType">
            <el-option
              v-for="item in options.expType"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item :label="$t('coupon.table.begin_date')" prop="beginDate">
          <el-date-picker
            v-model="select_coupon.beginDate"
            type="date"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyyMMdd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item :label="$t('coupon.table.exp_date')" prop="expDate">
          <el-date-picker
            v-model="select_coupon.expDate"
            type="date"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyyMMdd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item :label="$t('coupon.table.begin_day')" prop="beginDay">
          <el-input-number v-model="select_coupon.stockNum"  :min="1" :max="9999" />
        </el-form-item>

        <el-form-item :label="$t('coupon.table.exp_day')" prop="expDay">
          <el-input-number v-model="select_coupon.expDay"  :min="1" :max="9999" />
        </el-form-item>

        <el-form-item :label="$t('coupon.table.coupon_desc')" prop="couponDesc">
          <el-input v-model="select_coupon.couponDesc "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('coupon.table.time_limit_type')" prop="timeLimitType">
          <el-select v-model="select_coupon.timeLimitType">
            <el-option
              v-for="item in options.timeLimitType"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item :label="$t('coupon.table.date_limit')" prop="dateLimit">
          <el-input v-model="select_coupon.dateLimit "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('coupon.table.time_limit_start')" prop="timeLimitStart">
          <el-time-picker
            v-model="select_coupon.timeLimitStart"
            :picker-options="{
              selectableRange: '00:00:00 - 23:59:59'
            }"
            value-format="HH:mm:ss"
            :placeholder="$t('coupon.table.time_limit_start')">
          </el-time-picker>
        </el-form-item>

        <el-form-item :label="$t('coupon.table.time_limit_end')" prop="timeLimitEnd">
          <el-time-picker
            v-model="select_coupon.timeLimitEnd"
            :picker-options="{
              selectableRange: '00:00:00 - 23:59:59'
            }"
            value-format="HH:mm:ss"
            :placeholder="$t('coupon.table.time_limit_end')">
          </el-time-picker>
        </el-form-item>

        <el-form-item :label="$t('coupon.table.share_falg')" prop="shareFalg">
          <el-select v-model="select_coupon.shareFalg" >
            <el-option
              v-for="item in options.yesOrNo"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item :label="$t('coupon.table.give_falg')" prop="giveFalg">
          <el-select v-model="select_coupon.giveFalg" >
            <el-option
              v-for="item in options.yesOrNo"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item :label="$t('coupon.table.stock_num')" prop="stockNum">
          <el-input-number v-model="select_coupon.stockNum"  :min="1" :max="9999" />
        </el-form-item>

        <el-form-item :label="$t('coupon.table.limit_num')" prop="limitNum">
          <el-input-number v-model="select_coupon.limitNum"  :min="1" :max="9999" />
        </el-form-item>

        <el-form-item :label="$t('coupon.table.use_tip')" prop="useTip">
          <el-input v-model="select_coupon.useTip "  />
        </el-form-item>

        <el-form-item :label="$t('coupon.table.shop_limit_type')" prop="shopLimitType">
          <el-select v-model="select_coupon.shopLimitType" >
            <el-option
              v-for="item in options.shopLimitType"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('coupon.table.status')" prop="status">
          <el-select v-model="select_coupon.status" >
            <el-option
              v-for="item in options.status"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('coupon.table.cre_date')" prop="creDate">
          <el-input v-model="select_coupon.creDate "  disabled/>
        </el-form-item>

        <el-form-item :label="$t('coupon.table.modi_date')" prop="modiDate">
          <el-input v-model="select_coupon.modiDate "  disabled/>
        </el-form-item>
        <el-form-item :label="$t('coupon.table.teller')" prop="teller">
          <el-input v-model="select_coupon.teller "  disabled/>
        </el-form-item>
        <el-form-item :label="$t('coupon.table.memo')" prop="memo">
          <el-input v-model="select_coupon.memo"  :autosize="{ minRows: 2, maxRows: 4}" type="textarea" />
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
import { list,update } from '@/api/coupon'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
const statusMap={
  0:'禁用',
  1:'正常'

}
const ownMap = {
  1: '商户',
  2: '第三方',
}

const couponTypeMap = {
  1: '代金券（满减）',
  2: '折扣券（满折）',
  3: '抵用券（需购买）'
}

export default {
  name: 'couponList',
  components: { Pagination },
  filters: {
    statusFilter(src) {
      return statusMap[src]
    }
  },
  data() {
    return {
      list: null,
      total: 0,
      loading: true,
      date:'20201112',
      listQuery: {
        pageNo: 1,
        pageSize: 10,
        filterParams:'',
        grpCodeParams:'',
        order:'',
        sortBy:''
      },
      dialogFormVisible:false,
      updating:false,
      select_coupon:{

      },
      options:{
        couponType:[
          {
            value:1,
            label:'代金券（满减）'
          },
          {
            value:2,
            label:'折扣券（满折）'
          },
          {
            value:3,
            label:'抵用券（需购买）'
          }
        ],
        expType:[
          {
            value:1,
            label:'固定日期生效失效'
          },
          {
            value:2,
            label:'领取后N天生效N天失效'
          }
        ],
        timeLimitType:[
          {
            value:1,
            label:'全部时间段'
          },
          {
            value:2,
            label:'部分时间段'
          }
        ],
        yesOrNo:[
          {
            value:1,
            label:'是'
          },
          {
            value:0,
            label:'否'
          }
        ],
        shopLimitType:[
          {
            value:1,
            label:'全部门店'
          },
          {
            value:2,
            label:'部分门店'
          }
        ],
        status:[
          {
            value:0,
            label:'禁用'
          },
          {
            value:1,
            label:'正常'
          }
        ]
      },
      select_coupon_index:0,
    }
  },
  created() {
    this.getList()
  },
  computed:{
    status:{
      get(){
        return statusMap[this.select_coupon.status];
      }
    },
    ownType:{
      get(){
        return ownMap[this.select_coupon.ownType];
      }
    },
    couponType:{
      get(){
        return couponTypeMap[this.select_coupon.couponType];
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
      this.select_coupon= Object.assign({}, row) ;
      this.select_coupon_index=index;
      this.dialogFormVisible=true;
    },
    update(){
      this.updating=true;
      update(this.select_coupon).then(response =>{
        this.updating=false;
        this.dialogFormVisible=false;
        this.getList();
      }).catch(error=>{
        this.updating=false;
      })
    },
    sortChange(data) {
      const { prop, order } = data
      if(order){
        if(order==='ascending'){
          this.listQuery.order='asc';
        }else {
          this.listQuery.order='desc';
        }
        this.listQuery.sortBy=prop
      }else {
        this.listQuery.order='';
        this.listQuery.sortBy='';
      }
      this.getList();
    },
    stockNumSort(a,b){
      return a.stockNum-b.stockNum;
    },
    limitNumSort(a,b){
      return a.limitNum-b.limitNum;
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
