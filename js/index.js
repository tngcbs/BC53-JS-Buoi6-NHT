// Bài 1
// Tìm số nguyên dương nhỏ nhất sao cho:
// 1 + 2 + ... + n > 10000

document.querySelector('#btn1').onclick = function () {
    var minNumber = 0;
    var sumMin = 0;

    for (var index = 1; sumMin <= 10000; index++) {
        sumMin += index;
        minNumber = index;
    }

    document.querySelector('#result1').innerHTML = 'Kết quả là: ' + minNumber;
};

// Bài 2
// Viết chương trình nhập vào 2 số x, n
// Tính tổng: S(n) = x + x^2 + x^3 + ... + x^n

document.querySelector('#btn2').onclick = function () {
    var x = +document.querySelector('#numberx').value;
    var n = +document.querySelector('#numbern').value;
    var sumPow = 0;

    for (var index = 1; index <= n; index++) {
        sumPow += Math.pow(x, index);
    }

    document.querySelector('#result2').innerHTML = 'Kết quả là: ' + sumPow;
};

// BÀI 3
// Nhập vào n. Tính giai thừa 1 * 2 * ... * n

document.querySelector('#btn3').onclick = function () {
    var number3 = +document.querySelector('#number3').value;
    var fact = 1;

    if (number3 > 0) {
        for (var index = 1; index <= number3; index++) {
            fact *= index;
        }
        document.querySelector('#result3').innerHTML = 'Kết quả là: ' + fact;
    } else {
        document.querySelector('#result3').innerHTML = 'Nhập lại số n'
    }
};

// BÀI 4
// Viết chương trình click button tạo thẻ div
// Nếu thẻ div nào ở vị trí chẵn thì background màu đỏ, vị trí lẻ thì background màu xanh

document.querySelector('#btn4').onclick = function () {
    var addDiv = document.querySelector('#adddiv');
    addDiv.innerHTML = '';

    for (var index = 1; index <= 10; index++) {
        var newDiv = document.createElement('div');
        newDiv.innerHTML = 'Thẻ div số ' + index;
        if (index % 2 === 0) {
            newDiv.className = 'bg-danger';
        } else {
            newDiv.className = 'bg-primary';
        }
        addDiv.appendChild(newDiv);
    }
};

// BÀI 5
// In ra các số nguyên tố từ 1 đến giá trị mà người dùng nhập

document.querySelector('#btn5').onclick = function () {
    var number5 = +document.querySelector('#number5').value;
    var result5 = document.querySelector('#result5');
    result5.innerHTML = '';

    if (number5 <= 0) {
        result5.innerHTML = 'Nhập vào một số nguyên lớn hơn 0';
    } else {
        for (var index = 1; index <= number5; index++) {
            result5.innerHTML += index + ' ';
        }
    }
};