
var vm = new Vue({
   el: '#main-app',
   data: {
      tipologia: '',
      annunci: []
   },
   methods: {
      nuovaSomma: function () {
         return this.numero_1 + this.numero_2;
      }
   },
   watch: {
      tipologia: function (valore) {
         if (valore === 'affitto') {
            $.getJSON('https://www.alessandrocosta.pro/wp-json/wp/v2/annunci?tags=18')
               .done(function (data) {
                  vm.annunci = data;
               });
         } else {
            $.getJSON('https://www.alessandrocosta.pro/wp-json/wp/v2/annunci?tags=17')
               .done(function (data) {
                  vm.annunci = data;
               });
         }
      }
   }
})

