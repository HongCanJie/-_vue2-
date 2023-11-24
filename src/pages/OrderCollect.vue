<template>
  <div class="orderContainer">
    <div class="header_orderCollect">
      <el-input size="small" placeholder="销售编码" v-model="saleId">
      </el-input>
      <el-input size="small" placeholder="供应商名称" v-model="providerName">
      </el-input>
      <el-input size="small" placeholder="商品名称" v-model="goodName">
      </el-input>
      <el-input size="small" placeholder="商品别名" v-model="goodAlias">
      </el-input>
      <el-select
        size="small"
        v-model="goodSort"
        slot="prepend"
        placeholder="商品分类"
      >
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-select
        size="small"
        v-model="goodUnits"
        slot="prepend"
        placeholder="商品单位"
      >
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-select
        size="small"
        v-model="billState"
        slot="prepend"
        placeholder="单据状态"
      >
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>

      <!-- 时间选择 -->
      <el-date-picker
        size="small"
        v-model="value2"
        prefix-icon="el-icon-date"
        type="datetimerange"
        :picker-options="pickerOptions"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right"
      >
      </el-date-picker>
      <!-- 查询与重置 -->
      <el-row>
        <el-button type="primary">查询</el-button
        ><el-button>重置</el-button></el-row
      >
    </div>
    <div class="footer_orderCollect">
      <!-- 导出  -->
      <div class="export">
        <i class="el-icon-upload2"></i>
        <span>导出</span>
      </div>
      <!-- 表格 -->
      <el-table :data="orderData" border show-summary style="width: 100%">
        <el-table-column prop="saleId" label="采购编码" width="180">
        </el-table-column>
        <el-table-column prop="providerName" label="供应商名称">
        </el-table-column>

        <!-- <template slot-scope="scope">
          <el-table :data="scope.row.orderList">
            <el-table-column prop="goodName" sortable label="商品名称">
            </el-table-column>
            <el-table-column prop="goodAlias" sortable label="商品别名">
            </el-table-column>
            <el-table-column prop="goodSort" sortable label="商品分类">
            </el-table-column>
            <el-table-column prop="goodUnits" sortable label="商品单位">
            </el-table-column>
            <el-table-column prop="buyPrice" sortable label="采购单价">
            </el-table-column>
            <el-table-column prop="buyNumber" sortable label="采购数量">
            </el-table-column>
            <el-table-column prop="storageNumber" sortable label="入库数量">
            </el-table-column>
            <el-table-column prop="buyWeight" sortable label="采购重量">
            </el-table-column>
            <el-table-column prop="buyAmount" sortable label="采购金额">
            </el-table-column>
          </el-table>
        </template> -->

        <el-table-column prop="orderList.goodName" sortable label="商品名称">
        </el-table-column>
        <el-table-column prop="orderList.goodAlias" sortable label="商品别名">
        </el-table-column>
        <el-table-column prop="orderList.goodSort" sortable label="商品分类">
        </el-table-column>
        <el-table-column prop="orderList.goodUnits" sortable label="商品单位">
        </el-table-column>
        <el-table-column prop="orderList.buyPrice" sortable label="采购单价">
        </el-table-column>
        <el-table-column prop="orderList.buyNumber" sortable label="采购数量">
        </el-table-column>
        <el-table-column
          prop="orderList.storageNumber"
          sortable
          label="入库数量"
        >
        </el-table-column>
        <el-table-column prop="orderList.buyWeight" sortable label="采购重量">
        </el-table-column>
        <el-table-column prop="orderList.buyAmount" sortable label="采购金额">
        </el-table-column>
        <el-table-column prop="billState" sortable label="单据状态">
        </el-table-column>
        <el-table-column prop="createTime" sortable label="创建时间">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>


<script>
export default {
  name: "OrderCollect",
  data() {
    return {
      saleId: "", //销售编码
      providerName: "", //供应商名称
      goodName: "", //商品名称
      goodAlias: "", //商品别名
      goodSort: "", //商品分类
      goodUnits: "", //商品单位
      billState: "", //单据状态
      // 时间选择
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value2: "",
      // 表格数据
      orderData: [
        {
          saleId: "CG20231212152021542", //销售(采购)编码
          providerName: "A供应商", //供应商名称
          billState: "已预定", //单据状态
          createTime: "2023-12-12 15:20", //创建时间
          orderList: [
            {
              goodName: "公牛", //商品名称
              goodAlias: "", //商品别名
              goodSort: "畜牧-牛肉-高质", //商品分类
              goodUnits: "斤", //商品单位
              buyPrice: 147, //采购单价
              buyNumber: 145, //采购数量
              storageNumber: 145, //入库数量
              buyWeight: 145, //采购重量
              buyAmount: 2400, //采购金额
            },
            {
              goodName: "公牛", //商品名称
              goodAlias: "", //商品别名
              goodSort: "畜牧-牛肉-高质", //商品分类
              goodUnits: "斤", //商品单位
              buyPrice: 146, //采购单价
              buyNumber: 145, //采购数量
              storageNumber: 145, //入库数量
              buyWeight: 145, //采购重量
              buyAmount: 2400, //采购金额
            },
            {
              goodName: "公牛", //商品名称
              goodAlias: "", //商品别名
              goodSort: "畜牧-牛肉-高质", //商品分类
              goodUnits: "斤", //商品单位
              buyPrice: 146, //采购单价
              buyNumber: 145, //采购数量
              storageNumber: 145, //入库数量
              buyWeight: 145, //采购重量
              buyAmount: 2400, //采购金额
            },
          ],
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
      ],
    };
  },
  methods: {
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总价";
          return;
        }
        const values = data.map((item) => Number(item[column.property]));
        if (!values.every((value) => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += " 元";
        } else {
          sums[index] = "N/A";
        }
      });

      return sums;
    },
  },
};
</script>

<style scoped>
/* 头部 */
.header_orderCollect {
  border-bottom: 1px solid #bbbbbb;
}
/* 输入框 */
.el-input,
.header_orderCollect .el-select {
  width: 130px;
  margin-right: 10px;
}

/* 时间选择 */
.el-range-editor.el-input__inner {
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}

/* 查询与重置按钮 */
.el-row {
  display: inline-block;
  vertical-align: middle;
}

.el-row .el-button {
  height: 20px;
  width: 70px;
  line-height: 0px;
}

/* 尾部 */
.footer_orderCollect .export {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #4296e5;
}
.footer_orderCollect .export .el-icon-upload2 {
  margin-right: 3px;
  font-weight: bold;
}

.footer_orderCollect .export span {
  font-weight: 600;
}
</style>


