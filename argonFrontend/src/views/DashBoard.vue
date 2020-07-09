<template>
  <div class="position-relative">
            <!-- shape Hero -->
    <section v-if="loggedIn" class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    <div class="card bg-transparent">
        <div class="card-header bg-dark border-0">
            <h3 class="mb-1 ml-2 mt-5 text-white">Acervo</h3>
        </div>
        <el-table class="table-responsive table-secondary px-5 py-5"
                  header-row-class-name="thead-dark"
                  :data="projects">
            <el-table-column label="Nome"
                             min-width="200px"
                             prop="name"
                             sortable>
                <template v-slot="{row}">
                    <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                            <img alt="Image placeholder" :src="row.img">
                        </a>
                        <div class="media-body">
                            <span class="font-weight-600 name mb-0 text-sm">{{row.title}}</span>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Preço"
                             prop="budget"
                             min-width="80px"
                             class="my-5"
                             sortable>
            </el-table-column>
            <el-table-column label="Qtd"
                             min-width="70px"
                             prop="status"
                             sortable>
                <template v-slot="{row}">
                    <span class="badge bg-transparent" :class="`badge-${row.statusType}`">
                        <i class="fa fa-circle"></i>
                    </span>
                    <span class="status"> {{row.status}}</span>
                </template>
            </el-table-column>

            <el-table-column min-width="100px">
                <template v-slot="{row}">
                    <el-dropdown trigger="click" class="dropdown">
                    <span class="btn btn-sm btn-icon-only text-light">
                      <i class="fa fa-ellipsis-v mt-2"></i>
                    </span>
                        <el-dropdown-menu class="dropdown-menu dropdown-menu-arrow show" slot="dropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </el-dropdown-menu>
                    </el-dropdown>
                </template>
            </el-table-column>
        </el-table>
    </div>
  </section>
  <section v-else class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
  </section>
</div>
</template>
<script>
  import UserService from '../services/user.service';
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
    name: 'DashBoard',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },

    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn
      }
    },

    created() {
      if (this.loggedIn) {
        UserService.getUserBooks().then( response => {
          console.log(response.data)
        })
      }
    },

    data() {
      return {
        projects: [
          {
            img: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/bootstrap.jpg',
            title: 'Argon Design System',
            budget: '$2500 USD',
            status: 'pending',
            statusType: 'warning',
            completion: 60
          },
          {
            img: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/angular.jpg',
            title: 'Angular Now UI Kit PRO',
            budget: '$1800 USD',
            status: 'completed',
            statusType: 'success',
            completion: 100
          },
          {
            img: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/sketch.jpg',
            title: 'Black Dashboard',
            budget: '$3150 USD',
            status: 'delayed',
            statusType: 'danger',
            completion: 72
          },
          {
            img: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/react.jpg',
            title: 'React Material Dashboard',
            budget: '$4400 USD',
            status: 'on schedule',
            statusType: 'info',
            completion: 90
          },
          {
            img: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/vue.jpg',
            title: 'Vue Paper UI Kit PRO',
            budget: '$2200 USD',
            status: 'completed',
            statusType: 'success',
            completion: 100
          },
          {
            img: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/bootstrap.jpg',
            title: 'Argon Design System',
            budget: '$2500 USD',
            status: 'pending',
            statusType: 'warning',
            completion: 60
          },
          {
            img: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/angular.jpg',
            title: 'Angular Now UI Kit PRO',
            budget: '$1800 USD',
            status: 'completed',
            statusType: 'success',
            completion: 100
          },
          {
            img: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/sketch.jpg',
            title: 'Black Dashboard',
            budget: '$3150 USD',
            status: 'delayed',
            statusType: 'danger',
            completion: 72
          },
          {
            img: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/vue.jpg',
            title: 'Vue Paper UI Kit PRO',
            budget: '$2200 USD',
            status: 'completed',
            statusType: 'success',
            completion: 100
          }
        ],
        currentPage: 1
      };
    }
  }
</script>
<style type="text/css">
  .table-responsive{
    overflow: hidden !important;
  }
</style>