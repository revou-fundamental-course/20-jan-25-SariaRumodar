// ini file javaScript yang akan dijalankan pada halaman web
function calculateBmi() {
    let resultBmi = document.getElementById('result-bmi');
    let jenisKelamin = document.getElementById('input-jenis-kelamin').value;
    let inputUsia = document.getElementById('input-usia').value;
    let inputBeratBadan = document.getElementById('input-berat-badan').value;
    let inputTinggiBadan = document.getElementById('input-tinggi-badan').value;
    let statusBmi = document.getElementById('status-bmi');
    let description = document.getElementById('bmi-description'); // Elemen untuk deskripsi

    if (inputBeratBadan != '' && inputTinggiBadan != '' && inputUsia != '' && jenisKelamin != '') {
        let bmi = (inputBeratBadan / ((inputTinggiBadan / 100) ** 2)).toFixed(2);
        resultBmi.textContent = bmi;

        // Menentukan status berdasarkan BMI
        let status = "";
        let desc = "";

        if (bmi < 18.5) {
            status = "Kekurangan berat badan";
            desc = "Anda berada dalam kategori kekurangan berat badan. Sebaiknya Anda meningkatkan asupan nutrisi dan berkonsultasi dengan ahli gizi untuk mencapai berat badan ideal.";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            status = "Normal (Ideal)";
            desc = "Anda memiliki berat badan normal. Pertahankan pola makan sehat dan rutin berolahraga untuk menjaga kesehatan tubuh.";
        } else if (bmi >= 25 && bmi <= 29.9) {
            status = "Kelebihan berat badan";
            desc = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur pola makan yang sehat dan rutin berolahraga.";
        } else {
            status = "Kegemukan (Obesitas)";
            desc = "Anda berada dalam kategori obesitas. Dianjurkan untuk segera berkonsultasi dengan dokter atau ahli gizi untuk mendapatkan saran terbaik dalam menurunkan berat badan.";
        }

        statusBmi.textContent = status;
        description.textContent = desc;
    } else {
        alert('Tolong isi semua data.');
    }
}

