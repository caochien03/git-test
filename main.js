const Shift_keyboard = ["~",'!','@','#','$','%','^','&','*','(',')','_','+','Q','W','E','R','T','Y','U','I','O','P','{','}','|',
'A','S','D','F','G','H','J','K','L',':','"','Z','X','C','V','B','N','M','<','>','?']
const CapLock_keyboard = ["`",'1','2','3','4','5','6','7','8','9','0','-','=','Q','W','E','R','T','Y','U','I','O','P','[',']','\\',
'A','S','D','F','G','H','J','K','L',';','\'','Z','X','C','V','B','N','M',',','.','/']
const lowercase = ["`",'1','2','3','4','5','6','7','8','9','0','-','=','q','w','e','r','t','y','u','i','o','p','[',']','\\',
'a','s','d','f','g','h','j','k','l',';','\'','z','x','c','v','b','n','m',',','.','/']
const output = document.querySelector('.output')
const items = Array.from(document.querySelectorAll('.keyboard-button'))
const btnNormal = document.querySelectorAll('.btn')
const leftshift = document.querySelector('.left-shift')
const rightshift = document.querySelector('.right-shift')
const caplock = document.querySelector('.caplock')
const ctrl = document.querySelector('.ctrl')

function shiftUppercase() {
    for (let i = 0; i< btnNormal.length;i++) {
        btnNormal[i].innerHTML = Shift_keyboard[i]
    }
}
function CaplockUppercase() {
    for (let i = 0; i< btnNormal.length;i++) {
        btnNormal[i].innerHTML = CapLock_keyboard[i]
    }
}
function noShift_CapLock() {
    for (let i = 0; i< btnNormal.length;i++) {
        btnNormal[i].innerHTML = lowercase[i]
    }
}

items.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.innerHTML == 'DEL') {
            let arrtext = Array.from(output.innerHTML)
            arrtext.splice(arrtext.length - 1,1)
            output.innerHTML = arrtext.join('')
        }
        else if (btn.innerHTML == 'ctrl') {
            ctrl.classList.add('actived')
        }
        else if (ctrl.classList.contains('actived') && btn.innerHTML =='w') {
            output.innerHTML = ""
        }
        else if (btn.innerHTML == 'ENTER') {
            output.innerHTML += `<br>`
        }
        else if (btn.innerHTML == 'tab') {
            output.innerHTML += '&emsp;';
        }
        else if (btn.innerHTML == 'Space Bar') {
            output.innerHTML += '&nbsp;'
        }
        else if(btn.innerHTML =='cap lock') {
            if(caplock.classList.contains('actived')) {
                caplock.classList.remove('actived')
                noShift_CapLock()
            }
            else {
                caplock.classList.add('actived')
                CaplockUppercase()
            }
        }
        else if(btn.innerHTML =='SHIFT') {
            if(leftshift.classList.contains('actived')) {
                leftshift.classList.remove('actived')
                rightshift.classList.remove('actived')
                noShift_CapLock()
            }
            else {
                leftshift.classList.add('actived')
                rightshift.classList.add('actived')
                shiftUppercase()
            }
        }
        else { 
            if(leftshift.classList.contains('actived')){
                output.innerHTML += btn.innerHTML
                leftshift.classList.remove('actived')
                rightshift.classList.remove('actived')
                noShift_CapLock()
            }
            else {
                output.innerHTML += btn.innerHTML
            }
        }
    })
})


// // Khởi tạo biến để lưu trạng thái của Sound Lock
// let soundLock = true;

// // Bắt sự kiện keydown trên trang web của bạn
// document.addEventListener('keydown', function(event) {
//   // Nếu Sound Lock được bật, phát âm thanh khi phím được gõ xuống
//   if (soundLock) {
//     const audio = new Audio('sound.mp3');
//     audio.play();
//   }
// });

// // Thiết lập phím Sound Lock để bật / tắt âm thanh
// document.addEventListener('keydown', function(event) {
//   // Kiểm tra xem phím đã được bật / tắt
//   if (event.code === 'CapsLock') {
//     // Đảo ngược trạng thái của Sound Lock
//     soundLock = !soundLock;
//   }
// });

// document.addEventListener("keydown", function(event) {
//   if (event.key === "Enter") {
//     // Insert line break into the current string
//     let textarea = document.getElementById("myTextarea");
//     let currentString = textarea.value;
//     let cursorPosition = textarea.selectionStart;
//     let newString = currentString.slice(0, cursorPosition) + "\n" + currentString.slice(cursorPosition);
//     textarea.value = newString;
//     textarea.selectionStart = textarea.selectionEnd = cursorPosition + 1;
//     event.preventDefault();
//   }
// });

console.log(output)