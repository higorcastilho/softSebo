<template>
  <div class="container">
    
  </div>
</template>

<script>
import Quagga from 'quagga'
import BookSearchEngine from '../services/BookSearchEngine.js'

export default {
  name: 'BarcodeReader',
  data () {
    return {
      scannerAttempts: 0
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
    const onDetected = result => {
      Quagga.offDetected(onDetected)

      let isbn = result.codeResult.code
      if (BookSearchEngine.getValidateIsbn(isbn)) {

        BookSearchEngine.getGoogleBooksApi(isbn)
        
      } else {
        if (this.scannerAttempts >= 5) {
          alert('Não é possível ler o código do livro. Por favor, tente novamente.')
        }
      }

      this.scannerAttempts++
      Quagga.onDetected(onDetected)
    }

    if (this.currentUser) {
      Quagga.init({
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector('.container'),
          constraints: {
            facingMode: 'environment'
          }
        },
        numOfWorkers: 1,
        locate: true,
        decoder: {
          readers: ['ean_reader']
        }
      }, err => {
        if (err) {
          console.log(err)
          return ''
        }
        console.log("Initialization finished. Ready to start")
        Quagga.start()
      },

      Quagga.onDetected(onDetected) 
      )
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