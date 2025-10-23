  const form = document.getElementById('formRegister');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const namaDepan = document.getElementById('namaDepan').value;
    const namaBelakang = document.getElementById('namaBelakang').value;
    const nilaiAngka = document.getElementById('nilai').value;

    let nilaiHuruf;
    if (nilaiAngka >= 85 && nilaiAngka <= 100) {
      nilaiHuruf = 'A';
    } else if (nilaiAngka >= 80 && nilaiAngka < 85) {
      nilaiHuruf = 'A-';
    } else if (nilaiAngka >= 75 && nilaiAngka < 80) {
      nilaiHuruf = 'B+';
    } else if (nilaiAngka >= 70 && nilaiAngka < 75) {
      nilaiHuruf = 'B';
    } else if (nilaiAngka >= 65 && nilaiAngka < 70) {
      nilaiHuruf = 'B-';
    } else if (nilaiAngka >= 60 && nilaiAngka < 65) {
      nilaiHuruf = 'C+';
    } else if (nilaiAngka >= 55 && nilaiAngka < 60) {
      nilaiHuruf = 'C';
    } else if (nilaiAngka >= 40 && nilaiAngka < 55) {
      nilaiHuruf = 'D';
    } else if (nilaiAngka >= 0 && nilaiAngka < 40) {
      nilaiHuruf = 'E';
    } else {
      nilaiHuruf = 'Nilai tidak valid';
    }


    const user = {
      namaDepan: namaDepan,
      namaBelakang: namaBelakang,
      nilaiHuruf: nilaiHuruf
    };

    localStorage.setItem('userData', JSON.stringify(user));

    alert(`Register Successfully!\n
          Nama Depan : ${user.namaDepan} \n
          Nama Belakang : ${user.namaBelakang} \n
          Nilai : ${user.nilaiHuruf}`);

    form.reset();
  });
