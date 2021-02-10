# React-Firebase To do App

Bu Proje ReactJS ve Firebase kullanılarak oluşturulmaya çalışılmıştır.
UI Tasarımı konusunda henüz ciddi bir çalışma yapılmadı.
Firebase Auth ve Firestore kullanılarak üyelerin listeye ekledikleri "todo" tekrar gösterilmiştir.

## Problems

Auth ve Firestore kuralları test aşamasında olduğu için herhangi bir güvenlik önlemi alınmamıştır.
"Todoların" olduğu component Infinite Loop içerisindedir. Infinite Loop'tan çıkardığımız takdirde "Finish" ve "Remove" methodları düzgün Firestore ile eş zamanlı olarak çalışmamaktadır.
