const app = new Vue({

  el: '#app',
  data: {
    judul: 'Masukan Nama',
    daftarNama: [],
    namaBaru: ''

  },
  methods: {
    tambahNama: function () {
      this.daftarNama.push({
        nama: this.namaBaru,
        salah: false

      });

      this.namaBaru = '';
      localStorage.setItem('nama', JSON.stringify(this.daftarNama));
    },
    ok: function (index) {
      this.daftarNama[index].salah = true;
      localStorage.setItem('nama', JSON.stringify(this.daftarNama))
    },
    hapus: function (index) {
      this.daftarNama.splice(index, 1);
      localStorage.setItem('nama', JSON.stringify(this.daftarNama))
    }
  },
  created: function () {
    let DB = JSON.parse(localStorage.getItem('nama'))
    if (DB === null) {
      this.daftarNama = [];

    } else {
      this.daftarNama = DB;
      localStorage.setItem('nama', JSON.stringify(this.daftarNama))
    }
  }
});