<template>
</template>
<script>
  import UserService from '../services/user.service';
  export default {
    name: 'DashBoard',
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn
      }
    },

    created() {
      if (this.loggedIn) {
        UserService.getUserBooks().then( response => {
          const books = response.data
          books.forEach( item => {
            const transitoryObject = {
              img: '',
              title: '',
              budget: 'R$10,00',
              status: '',
              statusType: '',
              completion: ''
            }
            transitoryObject.img = item.image_link_book
            transitoryObject.title = item.title_book
            this.projects.push(transitoryObject)
          })
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
  table {
    font-family: 'Open Sans', sans-serif;
    width: 750px;
    border-collapse: collapse;
    border: 3px solid #44475C;
    margin: 10px 10px 0 10px;
  }

  table th {
    text-transform: uppercase;
    text-align: left;
    background: #44475C;
    color: #FFF;
    padding: 8px;
    min-width: 30px;
  }

  table td {
    text-align: left;
    padding: 8px;
    border-right: 2px solid #7D82A8;
  }
  table td:last-child {
    border-right: none;
  }
  table tbody tr:nth-child(2n) td {
    background: #D4D8F9;
  }
</style>