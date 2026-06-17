export const issuesData = [
  {
    id: 'issue-1',
    title: 'Halaman dashboard masih dapat diakses menggunakan tombol Back browser setelah logout.',
    characteristic: 'Security',
    severity: 'Sedang',
    tool: 'Cypress',
    description: 'Setelah logout, pengguna masih dapat kembali ke dashboard menggunakan tombol Back browser. Akses baru benar-benar ditolak setelah halaman direfresh.',
    recommendation: 'Tambahkan cache-control header dan invalidasi session secara menyeluruh setelah logout.'
  },
  {
    id: 'issue-2',
    title: 'Data form register tidak konsisten ketika password dan confirm password tidak sesuai.',
    characteristic: 'Functional Suitability',
    severity: 'Sedang',
    tool: 'Cypress',
    description: 'Nama dan email tetap tersimpan, tetapi pilihan kelas ter-reset tanpa adanya notifikasi kepada pengguna.',
    recommendation: 'Pertahankan seluruh input pengguna atau tampilkan informasi yang jelas mengenai field yang harus diisi ulang.'
  },
  {
    id: 'issue-3',
    title: 'Pesan validasi confirm password muncul pada field yang tidak sesuai.',
    characteristic: 'Functional Suitability',
    severity: 'Sedang',
    tool: 'Cypress',
    description: 'Ketika confirm password kosong atau tidak sesuai, pesan validasi muncul pada field password, bukan pada field confirm password.',
    recommendation: 'Tempatkan pesan validasi tepat pada field yang mengalami kesalahan.'
  },
  {
    id: 'issue-4',
    title: 'Ditemukan kerentanan SQL Injection pada fitur Run Code.',
    characteristic: 'Security',
    severity: 'Tinggi',
    tool: 'OWASP ZAP',
    description: 'Pengujian keamanan menemukan kerentanan High Risk berupa SQL Injection pada parameter question_id.',
    recommendation: 'Gunakan parameterized query, validasi input, sanitasi parameter, dan sembunyikan detail error database.'
  },
  {
    id: 'issue-5',
    title: 'Nilai System Usability Scale (SUS) hanya memperoleh skor 60,15.',
    characteristic: 'Usability',
    severity: 'Sedang',
    tool: 'SUS Questionnaire',
    description: 'Skor SUS menunjukkan aplikasi berada pada kategori OK namun masih memerlukan peningkatan pengalaman pengguna.',
    recommendation: 'Meningkatkan kualitas UI/UX berdasarkan masukan pengguna terutama pada aspek tampilan, navigasi, dan responsivitas.'
  },
  {
    id: 'issue-6',
    title: 'Nilai Maintainability hanya memperoleh skor 60%.',
    characteristic: 'Maintainability',
    severity: 'Sedang',
    tool: 'Maintainability Checklist',
    description: 'Masih terdapat indikator analyzability, modifiability, dan testability yang belum terpenuhi.',
    recommendation: 'Melakukan refactoring kode, meningkatkan modularitas komponen, validasi sistem, dan error handling.'
  }
];
