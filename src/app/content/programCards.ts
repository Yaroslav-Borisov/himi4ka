const PROGRAM_CARDS = [
    {
        image: {
            src: "/lessonIcons/lesson1.svg",
            alt: "lesson 1 image",
        },
        title: "Урок 1. Атомы и химические элементы",
        description: [
            "Что такое атом",
            "Что происходит с атомами в химических реакциях",
            "Что такое химический элемент",
            "Чем различаются атомы разных химических элементов",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson2.svg",
            alt: "lesson 2 image",
        },
        title: "Урок 2. Относительная атомная масса химических элементов",
        description: [
            "Что такое атомная еденица массы",
            "Что такое относительная атомная масса",
            "Как определить, что одни атомы тяжелее других",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson3.svg",
            alt: "lesson 3 image",
        },
        title: "Урок 3. Молекулы и простые вещества",
        description: [
            "Что такое молекула",
            "Чем отличаются металлы и неметаллы",
            "Чем такое простое вещество",
            "Чем простое вещество отличается от химического элемента",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson4.svg",
            alt: "lesson 4 image",
        },
        title: "Урок 4. Сложные вещества",
        description: [
            "Что такое сложные вещества и чем они отличаются от простых",
            "Чем такое органические и неорганические вещества",
            "Как определять качественный и количественный состав веществ",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson5.svg",
            alt: "lesson 5 image",
        },
        title: "Урок 5. Химическая формула",
        description: [
            "Что такое химическая формула",
            "Как научиться составлять химические формулы",
            "Как узнать состав молекулы по химической формуле",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson6.svg",
            alt: "lesson 6 image",
        },
        title: "Урок 6. Валентность",
        description: [
            "Что такое валентность",
            "Как научиться определять валентность",
            "Как составлять химические формулы по валентности",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson7.svg",
            alt: "lesson 7 image",
        },
        title: "Урок 7. Относительная молекулярная и формульная массы",
        description: [
            "Что такое относительная молекулярная масса",
            "Что такое относительная формульная масса",
            "Как вычислять массовую долю",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson8.svg",
            alt: "lesson 8 image",
        },
        title: "Урок 8. Химическое количество вещества и моль",
        description: [
            "Что такое химическое количество вещества",
            "Что такое постоянная Авогадро",
            "Как вычислять количество вещества",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson9.svg",
            alt: "lesson 9 image",
        },
        title: "Урок 9. Молярная масса и молярный объем",
        description: [
            "Что такое молярная масса",
            "Что такое молярный объём",
            "Как вычислять массу и объём веществ",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson10.svg",
            alt: "lesson 10 image",
        },
        title: "Урок 10. Признаки химических реакций",
        description: [
            "Что такое химические реакции",
            "Какие есть признаки химических реакций",
            "Условия протекания химических реакций",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson11.svg",
            alt: "lesson 11 image",
        },
        title: "Урок 11. Химические уравнения",
        description: [
            "Закон сохранения массы веществ",
            "Что такое химические уравнения",
            "Как составлять химические уравнения",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson12.svg",
            alt: "lesson 12 image",
        },
        title: "Урок 12. Составление уравнений химических реакций",
        description: [
            "Узнаете, как составлять химические уравнения",
            "Что такое коэффициенты и как их расставлять",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson13.svg",
            alt: "lesson 13 image",
        },
        title: "Урок 13. Типы химических реакций",
        description: [
            "Что такое реакции соединения",
            "Что такое реакции разложения",
            "Что такое реакции замещения",
            "Что такое реакции обмена",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson14.svg",
            alt: "lesson 14 image",
        },
        title: "Урок 14. Расчеты по уравнениям химических реакций",
        description: [
            "Что рассчитывать массу образовавшегося вещества",
            "Что находить массу прореагирующего вещества",
            "Что найти объём образовавшегося газа",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson15.svg",
            alt: "lesson 15 image",
        },
        title: "Урок 15. Воздух как смесь газов",
        description: [
            "Из каких газов состоит воздух",
            "Чему равна молярная масса воздуха",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson16.svg",
            alt: "lesson 16 image",
        },
        title: "Урок 16. Кислород и озон",
        description: [
            "Кислород как химическое вещество",
            "Как и где применяется кислород",
            "Что такое озон",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson17.svg",
            alt: "lesson 17 image",
        },
        title: "Урок 17. Физические и химические свойства кислорода",
        description: [
            "Физические свойства кислорода",
            "Химические свойства кислорода",
            "Что такое реакция горения",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson18.svg",
            alt: "lesson 18 image",
        },
        title: "Урок 18. Соединения элементов с кислородом",
        description: [
            "Что такое оксиды",
            "Как называть оксиды",
            "Где оксиды встречаются в природе",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson19.svg",
            alt: "lesson 19 image",
        },
        title: "Урок 19. Окислительные процессы",
        description: [
            "Какие есть процессы с участием кислорода",
            "Что такое реакции окисления",
            "Что такое топливо",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson20.svg",
            alt: "lesson 20 image",
        },
        title: "Урок 20. Водород — самый лёгкий газ",
        description: [
            "Что такое водород",
            "Какие есть физические свойства у водорода",
            "Почему водород легче воздуха",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson21.svg",
            alt: "lesson 21 image",
        },
        title: "Урок 21. Химические свойства водорода",
        description: [
            "Что образуется при реакции водорода с простыми веществами",
            "Что образуется при реакции водорода со сложными веществами",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson22.svg",
            alt: "lesson 22 image",
        },
        title: "Урок 22. Понятие о кислотах",
        description: [
            "Что такое кислота",
            "Что такое индикаторы",
            "Что образуется при реакции кислоты и металла",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson23.svg",
            alt: "lesson 23 image",
        },
        title: "Урок 23. Соли",
        description: [
            "Что такое соли",
            "Как составить формулу соли",
            "Как называть соли",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson24.svg",
            alt: "lesson 24 image",
        },
        title: "Урок 24. Получение водорода и его применение",
        description: [
            "Как получают водород в лабораториях",
            "Как получают водород в промышленности",
            "Где применяют водород",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson25.svg",
            alt: "lesson 25 image",
        },
        title: "Урок 25. Состав и физические свойства воды",
        description: [
            "Какой состав и строение у воды",
            "Какие есть физические свойства у воды",
            "Что такое раствор и растворитель",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson26.svg",
            alt: "lesson 26 image",
        },
        title: "Урок 26. Химические свойства воды",
        description: [
            "Как вода реагирует с оксидами металлов и неметаллов",
            "Что такое кислотные и основные оксиды",
            "Как вода реагирует с металлами",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson27.svg",
            alt: "lesson 27 image",
        },
        title: "Урок 27. Понятие об основаниях",
        description: [
            "Что такое основания",
            "Что такое реакция нейтрализации",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson28.svg",
            alt: "lesson 28 image",
        },
        title: "Урок 28. Оксиды",
        description: [
            "Какой состав у оксидов",
            "Классификафия оксидов",
            "Где мы встречаемся с оксидами в природе",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson29.svg",
            alt: "lesson 29 image",
        },
        title: "Урок 29. Химические свойства оксидов",
        description: [
            "Химические свойства кислотных оксидов",
            "Химические свойства основных оксидов",
            "Что такое солеобразующие и несолеобразующие оксиды",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson30.svg",
            alt: "lesson 30 image",
        },
        title: "Урок 30. Получение и применение оксидов",
        description: [
            "Какие есть способы получения оксидов",
            "Применение оксидов в быту, технике и промышленности",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson31.svg",
            alt: "lesson 31 image",
        },
        title: "Урок 31. Кислоты",
        description: [
            "Из чего состоят кислоты",
            "Классификация кислот",
            "Какие существуют природные кислоты",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson32.svg",
            alt: "lesson 32 image",
        },
        title: "Урок 32. Химические свойства кислот",
        description: [
            "Как кислоты реагируют с металлами",
            "Как кислоты реагируют с оксидами",
            "Как кислоты реагируют с основаниями",
            "Как кислоты реагируют с солями",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson33.svg",
            alt: "lesson 33 image",
        },
        title: "Урок 33. Получение и применение кислот",
        description: [
            "Как получают кислоты в лабораториях и промышленности",
            "Где и как применяют кислоты",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson34.svg",
            alt: "lesson 34 image",
        },
        title: "Урок 34. Основания",
        description: [
            "Из чего состоят основания",
            "Классификация оснований",
            "Какие есть химические свойства у оснований",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson35.svg",
            alt: "lesson 35 image",
        },
        title: "Урок 35. Получение и применение оснований",
        description: [
            "Как получают щёлочи",
            "Как получают нерастворимые основания",
            "Где и как применяются основания",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson36.svg",
            alt: "lesson 36 image",
        },
        title: "Урок 36. Соли",
        description: [
            "Состав солей",
            "Классификация солей",
            "Соли в природе и в повседневной жизни",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson37.svg",
            alt: "lesson 37 image",
        },
        title: "Урок 37. Химические свойства солей",
        description: [
            "Взаимодействие солей с металлами, кислотами, щелочами и другими солями",
            "Что такое термическое разложение",
        ],
    },
    {
        image: {
            src: "/lessonIcons/lesson38.svg",
            alt: "lesson 38 image",
        },
        title: "Урок 38. Цепочки химических превращений",
        description: [
            "Что такое цепочки химических превращений",
            "Как научиться составлять цепочки химических превращений",
        ],
    },
]

export default PROGRAM_CARDS