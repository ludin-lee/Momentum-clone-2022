const quoteEng = document.querySelector(".work_form__left-quotes h1");
const authorEng = document.querySelector(".work_form__left-quotes h2");
const quoteKr = document.querySelector(".work_form__left-quotes h3");
const authorKr =document.querySelector(".work_form__left-quotes h4");
const quotes = [
    {quoteEng : "You will face many defeats in life, but never let yourself be defeated.",
     authorEng : "Maya Angelou",
     quoteKr : "인생에서 많은 패배에 직면하겠지만 결코 패배하지 말라.",
     authorKr : "마야 안젤루"},

     {quoteEng : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
     authorEng : "Nelson Mandela",
     quoteKr : "인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번 일어선다는 데 있다.",
     authorKr : "넬슨 만델라"},

     {quoteEng : "In the end, it’s not the years in your life that count. It’s the life in your years.",
     authorEng : "Abraham Lincoln",
     quoteKr : "결국, 여러분의 인생에서 중요한 것은 지나가는 세월이 아닌 생활이다.",
     authorKr : "아브라함 링컨"},

     {quoteEng : "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
     authorEng : "Thomas A. Edison",
     quoteKr : "많은 인생의 실패는 사람이 포기할 때 자신이 성공에 얼마나 가까이 있는지 깨닫지 못하는 것이다.",
     authorKr : "토마스 에디슨"},

     {quoteEng : "Despite the forecast, live like it’s spring.",
     authorEng : "Lilly Pulitzer",
     quoteKr : "일기예보에도 불구하고, 봄처럼 살아라.",
     authorKr : "릴리 퓰리쳐"},

     {quoteEng : "The two most important days in your life are the day you are born and the day you find out why. ",
     authorEng : "Mark Twain",
     quoteKr : "당신의 인생에서 가장 중요한 두 날은 당신이 태어난 날과 그 이유를 찾는 날이다.",
     authorKr : "마크 트웨인"},

     {quoteEng : "Try not to become a man of success but rather try to become a man of value. ",
     authorEng : "Albert Einstein",
     quoteKr : "성공한 사람이 되려고 애쓰지 말고, 가치 있는 사람이 되려 애써라.",
     authorKr : "아인슈타인"},

     {quoteEng : "I find that the harder I work, the more luck I seem to have. ",
     authorEng : "Thomas Jefferson",
     quoteKr : "더 열심히 일하면 할수록 운이 더 좋아진다는 것을 알게 된다.",
     authorKr : "토마스 제퍼슨"},

     {quoteEng : "All progress takes place outside the comfort zone.",
     authorEng : "Michael John Bobak",
     quoteKr : "모든 진보는 안전 구역 밖에서 이루어진다.",
     authorKr : "마이클 존 보박"},

     {quoteEng : "Do not be afraid to give up the good to go for the great. ",
     authorEng : "John D. Rockefeller",
     quoteKr : "더 좋은 것을 쫓기 위해 좋은 것을 버리는 것을 두려워하지 마라.",
     authorKr : "존 록펠러"},

     {quoteEng : "If you cannot fly then run. If you cannot run, then walk. And, if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
     authorEng : "Martin Luther King Jr.",
     quoteKr : "날지 못하면 달려라. 달리지 못하면 걸어라. 그리고 걷지 못하면 기어라, 당신이 무엇을 하든 앞으로 가야 한다는 것만 명심해라.",
     authorKr : "마틴 루터 킹 주니어"},

     {quoteEng : "Some people dream of success, while other people get up every morning and make it happen.",
     authorEng : "Wayne Huizenga",
     quoteKr : "성공을 꿈꾸는 사람들도 있지만, 매일 아침에 일어나 꿈을 실현시키는 사람들도 있다.",
     authorKr : "웨인 후이젠가"},

     {quoteEng : "If you really want to do something, you’ll find a way. If you do not, you’ll find an excuse. ",
     authorEng : "Jim Rohn",
     quoteKr : "무언가를 정말 하고 싶다면, 당신은 방법을 찾을 것이다. 그렇지 않다면, 변명을 찾을 것이다.",
     authorKr : "짐 론"},

     {quoteEng : "The only thing worse than starting something and failing … is not starting something.",
     authorEng : "Seth Godin",
     quoteKr : "무언가를 시작하고 실패하는 것보다 더 나쁜 것은…아무것도 시작하지 않는 것이다. ",
     authorKr : "세스 고딘"},
];

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quoteEng.innerText = `${todaysQuote.quoteEng}`;
authorEng.innerText = `-${todaysQuote.authorEng}-`;
quoteKr.innerText = `${todaysQuote.quoteKr}`;
authorKr.innerText = `-${todaysQuote.authorKr}-`;