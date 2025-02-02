<template>
  <div class="user-header">
    <el-button type="primary" @click="handleAdd">新增</el-button>
    <el-form :inline="true" :model="formInline">
      <el-form-item label="请输入">
        <el-input
          placeholder="请输入用户名"
          v-model="formInline.keyWord"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="table">
    <el-table :data="tableData">
      <el-table-column
        v-for="item in tableLabel"
        :key="item.prop"
        :width="item.width ? item.width : 125"
        :prop="item.prop"
        :label="item.label"
      />
      <el-table-column fixed="right" label="Operations">
        <template #="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope.row)">
            编辑
          </el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pager"
      size="small"
      background
      layout="prev, pager, next"
      :total="config.total"
      @current-change="handleChange"
    />
  </div>

  <el-dialog
    v-model="dialogVisible"
    :title="action == 'add' ? '新增用户' : '编辑用户'"
    width="35%"
    :before-close="handleClose"
  >
    <!-- 设置了inline='true',会对el-select的样式造成影响，通过设置class=select-clearn在css进行处理 -->
    <el-form :inline="true" :model="fromUser" :rules="rules" ref="userFrom">
      <!-- 姓名 -->
      <el-row>
        <el-col :span="12">
          <el-form-item label="姓名" prop="name">
            <el-input
              v-model="fromUser.name"
              placeholder="请输入姓名"
            ></el-input>
          </el-form-item>
        </el-col>
        <!-- 年龄 -->
        <el-col :span="12">
          <el-form-item label="年龄" prop="age">
            <el-input
              v-model.number="fromUser.age"
              placeholder="请输入年龄"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <!-- 性别 -->
        <el-col :span="12">
          <el-form-item label="性别" prop="sex" class="select-clear">
            <el-select v-model="fromUser.sex" placeholder="请选择性别">
              <el-option label="男" value="1"></el-option>
              <el-option label="女" value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <!-- 出生日期 -->

        <el-col :span="12">
          <el-form-item label="出生日期" prop="birth">
            <el-date-picker
              v-model="fromUser.birth"
              type="date"
              placeholder="请选择出生日期"
              style="width: 100%"
              value-format="YYYY-MM-DD"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 地址 -->
      <el-row>
        <el-form-item label="地址" prop="addr">
          <el-input v-model="fromUser.addr" placeholder="请输入地址"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item>
          <el-button type="primary" @click="handleCancel">取消</el-button>
          <el-button type="primary" @click="onSubmit">确定</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </el-dialog>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted, reactive ,nextTick } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";

const tableData = ref([]);
const { proxy } = getCurrentInstance();
const getUserData = async () => {
  let data = await proxy.$api.getUserData(config);
  // console.log(data)
  tableData.value = data.list.map((item) => {
    item.sexLabel = item.sex === '0' ? "女" : "男";
    return item;
  });
  config.total = data.count;
};

const tableLabel = reactive([
  {
    prop: "name",
    label: "姓名",
  },
  {
    prop: "age",
    label: "年龄",
  },
  {
    prop: "sexLabel",
    label: "性别",
  },
  {
    prop: "birth",
    label: "生日",
    width: 200,
  },
  {
    prop: "addr",
    label: "地址",
    width: 400,
  },
]);

const formInline = reactive({
  keyWord: "",
});
const config = reactive({
  name: "",
  total: 0,
  page: 1,
});
const handleSearch = () => {
  config.name = formInline.keyWord;
  getUserData();
};
const handleChange = (pager) => {
  (config.page = pager), getUserData();
};

const handleDelete = (val) => {
  ElMessageBox.confirm("此操作将永久删除该文件, 是否继续?").then(async () => {
    await proxy.$api.deleteUser({
      id: val.id,
    });
    ElMessage({
      showClose: true,
      type: "success",
      message: "删除成功",
    });
  });
};

const action = ref("add");
const dialogVisible = ref(false);
const fromUser = reactive({
  sex: "",
});
const userFrom = ref([]);

//表单验证
const rules = reactive({
  name: [
    {
      required: true,
      message: "姓名为必填项",
      trigger: "blur",
    },
  ],
  age: [
    {
      required: true,
      message: "年龄是必填项",
      trigger: "blur",
    },
    {
      type: "number",
      message: "年龄必须为数字值",
    },
  ],
  sex: [
    {
      required: true,
      message: "性别是必填项",
      trigger: "change",
    },
  ],
  birth: [
    {
      required: true,
      message: "生日是必填项",
    },
  ],
  addr: [
    {
      required: true,
      message: "地址是必填项",
    },
  ],
});

const handleClose = () => {
  //获取表单重置表单
  dialogVisible.value = false;
  proxy.$refs.userFrom.resetFields();
};
//取消表单
const handleCancel = () => {
  dialogVisible.value = false;
  proxy.$refs.userFrom.resetFields();
};

//新增用户
const handleAdd = () => {
  dialogVisible.value = true;
  action.value = "add";
};

const onSubmit = () => {
  //先验证
  proxy.$refs.userFrom.validate(async (valid) => {
    if (valid) {
      let res = null;
      if (action.value === "add") {
        console.log(fromUser);
        res = await proxy.$api.addUser(fromUser);
      }else{
        res = await proxy.$api.editUser(fromUser);  
      }
      if (res) {
        dialogVisible.value = false;
        proxy.$refs.userFrom.resetFields();
        getUserData();
      }
    } else {
      ElMessage({
        showClose: true,
        type: "error",
        message: "请填写完整信息",
      });
    }
  });
};

//编辑
const handleEdit = (vla) => {
  action.value = "edit";
  dialogVisible.value = true;
  nextTick(() => {
    Object.assign(fromUser, {...vla,sex:''+vla.sex});
  })
}
onMounted(() => {
  getUserData();
});
</script>

<style lang="less" scoped>
.user-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table {
  position: relative;

  .pager {
    position: absolute;
    right: 10px;
    bottom: -30px;
  }
}
.select-clear {
  display: flex;
}
</style>
