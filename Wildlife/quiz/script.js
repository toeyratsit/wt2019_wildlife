const StartButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const Question = document.getElementById('question-container')
const QuestionElement = document.getElementById('question')
const ansButtonElement = document.getElementById('answer')
StartButton.addEventListener('click', Start)
nextButton.addEventListener('click', () => {
    CurrentQuestion++
    NextQuestion()
})
let RandomQuestion, CurrentQuestion

function Start() {
    score = 0
    console.log('started')
    StartButton.classList.add('hide')
    RandomQuestion = questionList.sort(() => Math.random() - .5)
    CurrentQuestion = 0
    Question.classList.remove('hide')
    NextQuestion()
}


function NextQuestion() {
    resetState()
    showQuestion(RandomQuestion[CurrentQuestion])
}

function showQuestion(questionList) {
    QuestionElement.innerText = questionList.question
    questionList.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', Answer)
        ansButtonElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (ansButtonElement.firstChild) {
        ansButtonElement.removeChild(ansButtonElement.firstChild)
    }
}

function Answer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(ansButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (RandomQuestion.length > CurrentQuestion + 1) {
        nextButton.classList.remove('hide')
    } else {
        Swal.fire({
            title: (score - 10) + ' คะแนน สุดยอดไปเลย !',
            icon: 'success',
            // imageUrl: 'confetti-right.png',
            // imageWidth: 200,
            // imageHeight: 200,
            // imageAlt: 'Custom image',
            // text: 'Do you want to continue',
            // icon: 'error',
            confirmButtonText: 'OK'
        })
        StartButton.innerText = 'เล่นใหม่อีกครั้ง'
        StartButton.classList.remove('hide')
    }

}



function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        score += 1
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questionList = [{
        question: 'กูปรีเป็นสัตว์ป่าจำพวกใด ?',
        answers: [{
                text: 'จำพวกสัตว์น้ำ',
                correct: false
            },
            {
                text: 'จำพวกสัตว์ปีก',
                correct: false
            },
            {
                text: 'จำพวกสัตว์เลี้ยงลูกด้วยนม',
                correct: true,
            },
            {
                text: 'จำพวกสัตว์เลื้อยคลาน',
                correct: false
            }

        ]
    },
    {
        question: 'สัตว์ป่าจำพวกสัตว์เลี้ยงลูกด้วยนมตัวใด มีความเสี่ยงที่จะสูญพันธ์ุมากที่สุด ?',
        answers: [{
                text: 'กระซู่',
                correct: true
            },
            {
                text: 'กวางผา',
                correct: false
            },
            {
                text: 'ควายป่า',
                correct: false,
            },
            {
                text: 'สมัน',
                correct: false
            }

        ]
    },
    {
        question: 'สัตว์ป่าในประเทศไทยข้อใดที่ได้มีการสูญพันธุ์ไปแล้ว ?',
        answers: [{
            text: 'กวางผา',
            correct: false
        }, {
            text: 'พะยูน',
            correct: false
        }, {
            text: 'นกเจ้าฟ้าหญิงสิรินธร',
            correct: true
        }, {
            text: 'วาฬบรูด้า',
            correct: false
        }]

    }, {
        question: 'ข้อใดกล่าวถูกต้อง ?',
        answers: [{
            text: 'นกกะเรียนมีการเกี้ยวพาราสีด้วยการบินขึ้นไปบนที่สูง',
            correct: false
        }, {
<<<<<<< HEAD
            text: 'สมันมีน้ำหนักประมาณ 30-50 กก.',
=======
            text: 'สมันมีถิ่นกำเนิดอยู่ที่เขมร',
>>>>>>> d6031daa592d014034554cd1e8340cc12a8edf21
            correct: false
        }, {
            text: 'พะยูนโดยทั่วไปจะอาศัยอยู่ในบริเวณน้ำลึก',
            correct: false
        }, {
            text: 'เต่ามะเฟืองเป็นเต่าทะเลที่มีขนาดใหญ่ที่สุด',
            correct: true
        }]
    }, {
        question: 'อาหารของสัตว์ในข้อใดแตกต่างจากพวก ?',
        answers: [{
            text: 'แมวลายหินอ่อน',
            correct: true
        }, {
            text: 'กูปรี',
            correct: false
        }, {
            text: 'เก้งหม้อ',
            correct: false
        }, {
            text: 'ละมั่ง',
            correct: false
        }]
    }, {
        question: 'สัตว์ป่าในข้อใดมีระยะเวลาการตั้งท้องเป็นเวลา 9 เดือน ?',
        answers: [{
            text: 'สมเสร็จ',
            correct: false
        }, {
            text: 'ควายป่า',
            correct: false
        }, {
            text: 'กูปรี',
            correct: true
        }, {
            text: 'วาฬบรูด้า',
            correct: false
        }]
    }, {
        question: 'สัตว์ป่าในข้อใดที่ล่าสุดถูกบรรจุเพิ่มเข้ามาในรายชื่อสัตว์ป่าสงวน ?',
        answers: [{
            text: 'ละมั่ง',
            correct: false
        }, {
            text: 'กวางผา',
            correct: false
        }, {
            text: 'เต่ามะเฟือง',
            correct: true
        }, {
            text: 'แรดชวา',
            correct: false
        }]
    }, {
        question: 'ปลาฉลามวาฬ มีครีบอกและครีบหางอย่างละกี่อัน ?',
        answers: [{
            text: 'ครีบอก 1 อัน และครีบหาง 1 อัน',
            correct: false
        }, {
            text: 'ครีบอก 2 อัน และครีบหาง 1 อัน',
            correct: false
        }, {
            text: 'ครีบอก 1 อัน และครีบหาง 2 อัน',
            correct: false
        }, {
            text: 'ครีบอก 2 อัน และครีบหาง 2 อัน',
            correct: true
        }]
    }, {
        question: 'สัตว์ป่าในข้อใดแตกต่างจากพวก ?',
        answers: [{
            text: 'วาฬบรูด้า',
            correct: false
        }, {
            text: 'สมัน',
            correct: false
        }, {
            text: 'กูปรี',
            correct: false
        }, {
            text: 'นกกระเรียน',
            correct: true
        }]
    }, {
        question: 'พระราชบัญญัติสงวนและคุ้มครองสัตว์ป่าฉบับแรกตราขึ้นเมื่อปี พ.ศ. ใด ?',
        answers: [{
            text: 'พ.ศ.2535',
            correct: false
        }, {
            text: 'พ.ศ.2510',
            correct: false
        }, {
            text: 'พ.ศ.2503',
            correct: true
        }, {
            text: 'พ.ศ.2530',
            correct: false
        }]
    }

]