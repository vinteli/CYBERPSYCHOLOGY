function hitungSkor() {
  let skor = 0;
  for (let i = 1; i <= 5; i++) {
    const val = document.querySelector(`input[name="q${i}"]:checked`);
    if (val) skor += parseInt(val.value);
  }

  let hasil = '';
  if (skor >= 4) {
    hasil = "⚠️ Tinggi: Kamu menunjukkan tanda-tanda adiksi. Pertimbangkan konsultasi atau mulai mengurangi durasi bermain.";
  } else if (skor >= 2) {
    hasil = "⚠️ Sedang: Kamu berisiko mengalami adiksi. Tetap waspada dan atur waktu bermain dengan bijak.";
  } else {
    hasil = "✅ Rendah: Kamu bermain game dengan cukup sehat. Pertahankan keseimbangan ini!";
  }

  document.getElementById("hasilQuiz").innerText = hasil;
}
