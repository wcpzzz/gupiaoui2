const cn = {
  global:{
    home:'首页',
    logout:'退出',
    language:{
      chinese:'中文',
      english:'english'
    },
    search:'搜索',
    actions:'操作',
    edit:'编辑',
  },
  login: {
    title: '银石管理系统',
    tips:'English',
    loginBtn:'登录',
    username_placeholder:'请输入用户名',
    password_placeholder:'请输入密码',
    username_invaild:'请输入用户名',
    password_invaild:'密码长度不能小于5位'
  },
  dashboard:{
    name:'监控台',
    panel_group:{
      count_merchat:'商户',
      count_vip:'会员',
      count_third:'第三方机构',
      count_logs:'系统日志',
      count_coupon:'优惠券'
    }
  },
  merchants:{
    name:'商户管理',
    choose:'选择商户'
  },
  vips:{
    name:'会员管理',
    details:'会员详情',
    table:{
      cust_code:'会员编号',
      cust_name:'会员名称',
      cust_src:'会员来源',
      own_Type:'所属类型',
      grp_code:'所属商户或机构',
      shop_code:'所属门店',
      mobile:'手机号',
      photo:'头像',
      card_code:'会员卡',
      curr_points:'当前积分',
      last_points:'上期积分',
      pay_cnt:'累计消费次数',
      pay_amt:'累计消费金额',
      pay_last_date:'最后消费时间',
      cre_date:'创建时间',
      modi_date:'修改时间',
      teller:'操作员',
      memo:'备注',
      details:'查看详情',
      openid:'微信标识'
    },
    filter:{
      id_or_mobile_name:'请输入会员编号或手机号或会员名称',
      grp_code_or_org_code:'请输入商户号或机构号'
    }
  },
  coupon:{
    name:'优惠券管理',
    details:'优惠券详情',
    table:{
      coupon_code:'优惠券代码',
      coupon_name:'优惠券名称',
      own_type:'所属类型',
      grp_code:'所属商户',
      coupon_type:'优惠券类型',
      brand_code:'品牌',
      coupon_color:'颜色',
      exp_type:'有效期方式',
      begin_date:'生效日期',
      exp_date:'失效日期',
      begin_day:'领取后N天生效',
      exp_day:'领取后N天失效',
      coupon_desc:'优惠详情',
      time_limit_type:'时间段限制方式',
      date_limit:'日期限制按周',
      time_limit_start:'时间限制开始',
      time_limit_end:'时间限制截止',
      share_falg:'是否允许分享',
      give_falg:'是否允许转赠',
      stock_num:'库存数量',
      limit_num:'每用户领券数量限制',
      use_tip:'使用须知',
      shop_limit_type:'门店适用方式',
      status:'状态',
      cre_date:'创建时间',
      modi_date:'修改时间',
      teller:'操作员',
      memo:'备注'
    },
    filter:{
      param1:'请输入优惠券编号或名称',
      param2:'请输入商户号或机构号'
    }
  },
  vipCard:{
    name:'优惠券管理',
    details:'优惠券详情',
    table:{
      coupon_code:'优惠券代码',
      coupon_name:'优惠券名称',
      own_type:'所属类型',
      grp_code:'所属商户',
      coupon_type:'优惠券类型',
      brand_code:'品牌',
      coupon_color:'颜色',
      exp_type:'有效期方式',
      begin_date:'生效日期',
      exp_date:'失效日期',
      begin_day:'领取后N天生效',
      exp_day:'领取后N天失效',
      coupon_desc:'优惠详情',
      time_limit_type:'时间段限制方式',
      date_limit:'日期限制按周',
      time_limit_start:'时间限制开始',
      time_limit_end:'时间限制截止',
      share_falg:'是否允许分享',
      give_falg:'是否允许转赠',
      stock_num:'库存数量',
      limit_num:'每用户领券数量限制',
      use_tip:'使用须知',
      shop_limit_type:'门店适用方式',
      status:'状态',
      cre_date:'创建时间',
      modi_date:'修改时间',
      teller:'操作员',
      memo:'备注'
    },
    filter:{
      param1:'请输入优惠券编号或名称',
      param2:'请输入商户号或机构号'
    }
  },
  third:{
    name:'机构管理',
    list:'机构列表',
    details:'机构详情',

    table:{
      org_code:'机构代码',
      org_name:'机构名称',
      acq_flag:'是否收单',
      issu_flag:'是否发券',
      org_pwd:'登录密码',
      init_pwd:'初始密码',
      mobile:'手机号',
      status:'状态',
      cre_date:'创建时间',
      modi_date:'修改时间',
      teller:'操作员',
      memo:'备注',
      openid:'微信公众号用户标识',
      group_controller:'组管理'
    },
    filter:{
      param1:'请输入机构编号或机构名称'
    },

    group:{
      name:'机构组列表'
    }
  },

  //wcp
  points:{
    name:'积分管理',
    list:'用户积分',
    details:'积分详情',
    table:{
      org_code:'机构代码',
      org_name:'机构名称',
      acq_flag:'是否收单',
      issu_flag:'是否发券',
      org_pwd:'登录密码',
      init_pwd:'初始密码',
      mobile:'手机号',
      status:'状态',
      cre_date:'创建时间',
      modi_date:'修改时间',
      teller:'操作员',
      memo:'备注',
      openid:'微信公众号用户标识',
      group_controller:'组管理'
    },
    filter:{
      param1:'请输入机构编号或机构名称'
    },
    default:{
      name:'默认赠送规则'
    },
    mch:{
      name:'商户定义规则',
      table:{
        rule_code:'规则代码',
        grp_code:'所属商户',
        limit_amt:'默认金额限额',
        limit_points:'默认积分限额',
        amt:'默认金额',
        points:'默认积分',
        status:'状态',
        cre_date:'创建时间',
        modi_date:'修改时间',
        teller:'操作员',
        memo:'备注'
      },
    }
  },


  setting:{
    name:'设置',
    submenu_system:'系统设置',
    submenu_arguments:'参数设置',
    submenu_profile:'个人设置',
  },
  permission:{
    name:'权限管理',
    merchant:'商户权限',
    third:'第三方权限'
  },
  el: {
    colorpicker: {
      confirm: '确定',
      clear: '清空'
    },
    datepicker: {
      now: '此刻',
      today: '今天',
      cancel: '取消',
      clear: '清空',
      confirm: '确定',
      selectDate: '选择日期',
      selectTime: '选择时间',
      startDate: '开始日期',
      startTime: '开始时间',
      endDate: '结束日期',
      endTime: '结束时间',
      prevYear: '前一年',
      nextYear: '后一年',
      prevMonth: '上个月',
      nextMonth: '下个月',
      year: '年',
      month1: '1 月',
      month2: '2 月',
      month3: '3 月',
      month4: '4 月',
      month5: '5 月',
      month6: '6 月',
      month7: '7 月',
      month8: '8 月',
      month9: '9 月',
      month10: '10 月',
      month11: '11 月',
      month12: '12 月',
      // week: '周次',
      weeks: {
        sun: '日',
        mon: '一',
        tue: '二',
        wed: '三',
        thu: '四',
        fri: '五',
        sat: '六'
      },
      months: {
        jan: '一月',
        feb: '二月',
        mar: '三月',
        apr: '四月',
        may: '五月',
        jun: '六月',
        jul: '七月',
        aug: '八月',
        sep: '九月',
        oct: '十月',
        nov: '十一月',
        dec: '十二月'
      }
    },
    select: {
      loading: '加载中',
      noMatch: '无匹配数据',
      noData: '无数据',
      placeholder: '请选择'
    },
    cascader: {
      noMatch: '无匹配数据',
      loading: '加载中',
      placeholder: '请选择',
      noData: '暂无数据'
    },
    pagination: {
      goto: '前往',
      pagesize: '条/页',
      total: '共 {total} 条',
      pageClassifier: '页'
    },
    messagebox: {
      title: '提示',
      confirm: '确定',
      cancel: '取消',
      error: '输入的数据不合法!'
    },
    upload: {
      deleteTip: '按 delete 键可删除',
      delete: '删除',
      preview: '查看图片',
      continue: '继续上传'
    },
    table: {
      emptyText: '暂无数据',
      confirmFilter: '筛选',
      resetFilter: '重置',
      clearFilter: '全部',
      sumText: '合计'
    },
    tree: {
      emptyText: '暂无数据'
    },
    transfer: {
      noMatch: '无匹配数据',
      noData: '无数据',
      titles: ['列表 1', '列表 2'],
      filterPlaceholder: '请输入搜索内容',
      noCheckedFormat: '共 {total} 项',
      hasCheckedFormat: '已选 {checked}/{total} 项'
    },
    image: {
      error: '加载失败'
    },
    pageHeader: {
      title: '返回'
    }
  }
}
export default cn;
