function darkMode() {
    setTimeout('', 2000);
    var off = document.getElementById('light');
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    console.log(off);
    off.style.backgroundColor = 'black';
    btn1.style.display = 'none';
    btn2.style.display = 'inherit';
};

function lightMode() {
    setTimeout('', 2000);
    var off = document.getElementById('light');
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    console.log(off);
    off.style.backgroundColor = '#b7174b';
    btn1.style.display = 'inherit';
    btn2.style.display = 'none';
};