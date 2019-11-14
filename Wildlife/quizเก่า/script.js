const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}


function startGame() {
    state = {}
    showText(1)

}

function showText(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => Option(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function Option(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showText(nextTextNodeId)
}

const textNodes = [{
        id: 1,
        text: 'กูปรีเป็นสัตว์ป่าจำพวกใด ?',
        options: [{
                text: 'จำพวกสัตว์น้ำ',
                nextText: 12,

            },
            {
                text: 'จำพวกสัตว์ปีก',
                nextText: 12
            }, {
                text: 'จำพวกสัตว์เลี้ยงลูกด้วยนม',
                nextText: 2,
            },
            {
                text: 'จำพวกสัตว์เลื้อยคลาน',
                nextText: 12
            }
        ]
    },
    {
        id: 2,
        text: 'สัตว์ป่าจำพวกสัตว์เลี้ยงลูกด้วยนมตัวใด มีความเสี่ยงที่จะสูญพันธ์ุมากที่สุด ?',
        options: [{
                text: 'กระซู่',
                nextText: 3
            },
            {
                text: 'กวางผา',
                nextText: 21
            },
            {
                text: 'ควายป่า',
                nextText: 21
            },
            {
                text: 'สมัน',
                nextText: 21
            }
        ]
    },
    {
        id: 3,
        text: 'สัตว์ป่าในประเทศไทยข้อใดที่ได้มีการสูญพันธุ์ไปแล้ว ?',
        options: [{
                text: 'กวางผา',
                nextText: 13
            },
            {
                text: 'สมัน',
                nextText: 4
            },
            {
                text: 'นกเจ้าฟ้าหญิงสิรินธร',
                nextText: 4
            },
            {
                text: 'วาฬบรูด้า',
                nextText: 13
            }
        ]
    },
    {
        id: 4,
        text: 'ข้อใดกล่าวถูกต้อง ?',
        options: [{
                text: 'นกกะเรียนมีการเกี้ยวพาราสีด้วยการบินขึ้นไปบนที่สูง',
                nextText: 14
            }, {
                text: 'ละมั่งเป็นสัตว์ที่คล้ายกับแพะและแกะ',
                nextText: 14
            }, {
                text: 'พะยูนโดยทั่วไปจะอาศัยอยู่ในบริเวณน้ำลึก',
                nextText: 14
            },
            {
                text: 'เต่ามะเฟืองเป็นเต่าทะเลที่มีขนาดใหญ่ที่สุด',
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: 'อาหารของสัตว์ในข้อใดแตกต่างจากพวก ?',
        options: [{
                text: 'แมวลายหินอ่อน',
                nextText: 6
            },
            {
                text: 'กูปรี',
                nextText: 15
            },
            {
                text: 'เก้งหม้อ',
                nextText: 15
            },
            {
                text: 'ละมั่ง',
                nextText: 15
            }
        ]
    },
    {
        id: 6,
        text: 'สัตว์ป่าในข้อใดมีระยะเวลาการตั้งท้องเป็นเวลา 9 เดือน ?',
        options: [{
                text: 'สมเสร็จ',
                nextText: 16
            },
            {
                text: 'ควายป่า',
                nextText: 16
            },
            {
                text: 'กูปรี',
                nextText: 7
            },
            {
                text: 'วาฬบรูด้า',
                nextText: 16
            },
        ]
    },
    {
        id: 7,
        text: 'สัตว์ป่าในข้อใดที่ล่าสุดถูกบรรจุเพิ่มเข้ามาในรายชื่อสัตว์ป่าสงวน ?',
        options: [{
                text: 'ละมั่ง',
                nextText: 17
            },
            {
                text: 'กวางผา',
                nextText: 17
            },
            {
                text: 'เต่ามะเฟือง',
                nextText: 8
            },
            {
                text: 'ปลาฉลามวาฬ',
                nextText: 17
            }
        ]
    },
    {
        id: 8,
        text: 'ปลาฉลามวาฬ มีครีบอกและครีบหางอย่างละกี่อัน ?',
        options: [{
            text: 'ครีบอก 1 อัน และครีบหาง 1 อัน',
            nextText: 18
        }, {
            text: 'ครีบอก 2 อัน และครีบหาง 1 อัน',
            nextText: 18
        }, {
            text: 'ครีบอก 1 อัน และครีบหาง 2 อัน',
            nextText: 18
        }, {
            text: 'ครีบอก 2 อัน และครีบหาง 2 อัน',
            nextText: 9
        }]
    },
    {
        id: 9,
        text: 'สัตว์ป่าในข้อใดแตกต่างจากพวก ?',
        options: [{
                text: 'วาฬบรูด้า',
                nextText: 10
            },
            {
                text: 'สมัน',
                nextText: 19
            },
            {
                text: 'กูปรี',
                nextText: 19
            },
            {
                text: 'นกกระเรียน',
                nextText: 19
            }
        ]
    },
    {
        id: 10,
        text: 'พระราชบัญญัติสงวนและคุ้มครองสัตว์ป่าฉบับแรกตราขึ้นเมื่อปี พ.ศ. ใด ?',
        options: [{
                text: 'พ.ศ.2535',
                nextText: 20
            },
            {
                text: 'พ.ศ.2510',
                nextText: 20
            },
            {
                text: 'พ.ศ.2503',
                nextText: 11
            },
            {
                text: 'พ.ศ.2530',
                nextText: 20
            }
        ]
    },
    {
        id: 11,
        text: 'ยินดีด้วยคุณได้ 10 คะแนน 🤩🎉🎊',
        options: [{
            text: 'เล่นใหม่อีกครั้ง',
            nextText: -1
        }]
    },
    //// score ////
    {
        id: 12,
        text: 'ตอบผิด ไม่ได้คะแนน สู้ๆ ลองเล่นใหม่อีกครั้งนะ 🤝',
        options: [{
            text: 'เล่นใหม่อีกครั้ง',
            nextText: -1
        }]
    }, {
        id: 13,
        text: 'ตอบผิด ได้ 2 คะแนน สู้ๆ ลองเล่นใหม่อีกครั้งนะ 🤘',
        options: [{
            text: 'เล่นใหม่อีกครั้ง',
            nextText: -1
        }]
    }, {
        id: 14,
        text: 'ตอบผิด ได้ 3 คะแนน สู้ๆ ลองเล่นใหม่อีกครั้งนะ 🤟',
        options: [{
            text: 'เล่นใหม่อีกครั้ง',
            nextText: -1
        }]
    }, {
        id: 15,
        text: 'ตอบผิด ได้ 4 คะแนน สู้ๆ ลองเล่นใหม่อีกครั้งนะ ✌✌',
        options: [{
            text: 'เล่นใหม่อีกครั้ง',
            nextText: -1
        }]
    }, {
        id: 16,
        text: 'ตอบผิด ได้ 5 คะแนน 🖐',
        options: [{
            text: 'เล่นใหม่อีกครั้ง',
            nextText: -1
        }]
    },
    {
        id: 17,
        text: 'ตอบผิด ได้ 6 คะแนน 😉',
        options: [{
            text: 'เล่นใหม่อีกครั้ง',
            nextText: -1
        }]
    }, {
        id: 18,
        text: 'ตอบผิด ได้ 7 คะแนน 😰',
        options: [{
            text: 'เล่นใหม่อีกครั้ง',
            nextText: -1
        }]
    }, {
        id: 19,
        text: 'ตอบผิด ได้ 8 คะแนน 😰',
        options: [{
            text: 'เล่นใหม่อีกครั้ง',
            nextText: -1
        }]
    }, {
        id: 20,
        text: 'ตอบผิด ได้ 9 คะแนน 😱',
        options: [{
            text: 'เล่นใหม่อีกครั้ง',
            nextText: -1
        }]
    }, {
        id: 21,
        text: 'ตอบผิด ได้ 1 คะแนน สู้ๆ ลองเล่นใหม่อีกครั้งนะ 🤝',
        options: [{
            text: 'เล่นใหม่อีกครั้ง',
            nextText: -1
        }]
    }
]

startGame()