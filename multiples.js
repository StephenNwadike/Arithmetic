function problem1() {

    var p1 = document.getElementById('event1').value;
    var total = 0;
    for (var i = 1; i < parseInt(base, 10); i++) {
        if (i%3 === 0 || i%5 === 0) {
            total += i;
        }
        console.log(total);
    }
    document.getElementById('answer1').innerHTML = total;

};

function problem2() {
    var p2 = document.getElementById('event2').value;

    var total = 0;
    var first = 1;
    var second = 1;
    var num = 1;

    while(num < parseInt(base, 10)) {
        num = first + second;
        first = second;
        second = num;

        if (first % 2 === 0) {
            total += first;
        }
    }
    document.getElementById('answer2').innerHTML = total;
};

function problem3() {
    var p3 = parseInt(document.getElementById('event3').value , 10);

    var maxprime = 0;
    var currentdiv = 2;

    while (currentdiv <= p3) {
        if (p3%currentdiv === 0) {
            p3 = p3/currentdiv;
            maxprime = currentdiv;
            currentdiv = 2;
        }
        else {
            currentdiv +=1;
        }
        console.log(p3);
    }
    document.getElementById('answer3').innerHTML = maxprime;
};