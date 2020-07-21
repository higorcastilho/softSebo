<template>
  <div class="container">
    <div></div>
  </div>
</template>

<script>
import UserService from '../services/user.service'
export default {
  name: 'Home',
  data() {
    return {
      rows: [],
      elementsPerPage: 8,
      currentPage: 1,
      search: ''
    }
  },
  methods: {
    num_pages() {
      return Math.ceil(this.rows.length/this.elementsPerPage)
    },
    get_rows() {
      var start = (this.currentPage-1) * this.elementsPerPage
      var end = start + this.elementsPerPage
      return this.rows.slice(start, end)
    },
    change_page(page) {
      this.currentPage = page
    },
    searching() {
      this.rows.sort((a, b) => {
        if (a.match > b.match) return 1
        if (a.match < b.match) return -1
        return 0
      })
      const searchInput = this.search
      for ( var i = 0; i < this.rows.length; i++) {
        var title = this.rows[i].title
        var author = this.rows[i].author
        var localizationNumTitle = title.toUpperCase().indexOf(searchInput.toUpperCase())
        var localizationNumAuthor = author.toUpperCase().indexOf(searchInput.toUpperCase())
        if (localizationNumTitle > -1 || localizationNumAuthor > -1) {
          this.rows[i].match = ''
        } else {
          this.rows[i].match = 'none'
        }
      }
    }

  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  },
  created() {
    if (this.currentUser) {
      UserService.getUserBooks().then( response => {
        const books = response.data
        books.forEach( item => {
          const transitoryObject = {
            id: '',
            img: '',
            title: '',
            subtitle: '',
            price: 'R$10,00',
            author: '',
            match: ''
          }
          transitoryObject.id = item.id_book
          transitoryObject.img = item.image_link_book
          transitoryObject.title = item.title_book
          transitoryObject.subtitle = item.subtitle_book
          transitoryObject.author = item.name_author
          this.rows.unshift(transitoryObject)
        })
      })
    }
  }
};
</script>
<style type="text/css">
  input {
    margin-top: 2em
  }
  img {
    height: 6em
  }
  table {
    margin-top: 2em;
    min-width: 100%;
    border-collapse: separate;
    border-spacing: 2em 0;
  }
  td {
    padding: 0.4em 0;
  }
</style>