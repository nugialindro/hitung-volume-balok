        // angka
        const elementAngkaPertama = document.querySelector('.panjang');
        const elementAngkaKedua = document.querySelector('.lebar');
        const elementAngkaKetiga = document.querySelector('.tinggi');

        // button
        const elementTombolTambah = document.querySelector('.tombol-hitung');
    

        // hasil
        const elementHasil = document.querySelector('.hasil');

        elementTombolTambah.addEventListener('click', function() {
            const nilaiAngkaPertama = Number(elementAngkaPertama.value);
            const nilaiAngkaKedua = Number(elementAngkaKedua.value);
            const nilaiAngkaKetiga = Number(elementAngkaKetiga.value);

            const hasil = nilaiAngkaPertama * nilaiAngkaKedua * nilaiAngkaKetiga ;
            elementHasil.textContent = `Hasilnya adalah ${hasil}`;
        });

        // Darkmode

        const tombol = document.querySelector(".light-mode");
        tombol.addEventListener('click', function() {
            const judul = document.querySelector("body");
            judul.style.backgroundColor = 'white';
        })