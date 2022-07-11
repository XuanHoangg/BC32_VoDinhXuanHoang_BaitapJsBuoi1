/*Bài 1
    Mô hình 3 khối:
    Đầu vào:
        +Tạo 1 biến songaylam gán cho biến đó giá trị = số ngày làm (số ngày bất kì)
        +Tạo biến luong1ngay = 100000
    Xử lý:
        +Tạo biến tongluong = songaylam*luong1ngay
    Đầu ra:
        +Kết quả của tongluong

*/
var luong1ngay = 100000;
var songaylam = 20;
var tongluong = songaylam * luong1ngay;
console.log("Tổng lương: " + tongluong);


/*Bài 2
    Mô hình 3 khối:
    Đầu vào:
        +Tạo ra 5 biến st1 st2 st3 st4 st5 là gán cho 5 biến đó lần lượt các số thực bất kì
    Xử lý:
        +Tạo 1 biến giatritrungbinh = (st1 + st2 +st3 + st4 + st5)/5
    Đầu ra:
        +Kết quả giá trị trung bình của 5 số thực
*/
var st1 = 11.5;
var st2 = 13.6;
var st3 = 17.5;
var st4 = 9.1;
var st5 = 121.4;
var giatritrungbinh = (st1 + st2 + st3 + st4 + st5) / 5;
console.log("Giá trị trung bình: " + giatritrungbinh);


/*Bài 3
    Mô hình 3 khối:
    Đầu vào:
        +Tạo biến oneUSD = 23500
        +Tạo biến soluongdongUSD = 5 (số lượng bất kì)
    Xử lý:
        +Tạo biến quydoi = oneUSD*soluongdongUSD
    Đầu ra:
        +Kết quả đổi từ USD sang VNĐ
*/
var oneUSD = 23500;
var soluongdongUSD = 120;
var quydoi = oneUSD * soluongdongUSD;
console.log("Số tiền quy đổi được: " + quydoi + "VNĐ");




/*Bài 4
    Mô hình 3 khối:
    Đầu vào:
        +Tạo biến chieudai = chiều dài (Chiều dài bất kì)
        +Tạo biến chieurong = chiều rộng (Chiều rộng bất kì)
    Xử lý:
        +Tạo biến dientich = chieudai*chieurong
        +Tạo biến chuvi = (chieudai+chieurong)*2
    Đầu ra:
        +Kết quả của dientich và chuvi
*/
var chieudai = 29;
var chieurong = 20;
var dientich = chieudai * chieurong;
var chuvi = (chieudai + chieurong) * 2;
console.log("Diện tích: " + dientich);
console.log("Chu vi: " + chuvi);




/*Bài 5
    Mô hình 3 khối:
    Đầu vào:
        +Tạo biến n = giá trị bất kì có 2 chữ số
    Xử lý:
        +Tạo biến hangchuc = Math.floor(n/10)
        +Tạo biến hangDV = n%10
        +Tạo biến tong = hangchuc+hangDV
    Đầu ra:
        +Kết quả của tổng 2 chữ số
*/
var n = 92;
var hangchuc = Math.floor(n / 10);
var hangDV = n % 10;
var tong = hangchuc + hangDV;
console.log("Kết quả tổng 2 chữ số: " + tong);
