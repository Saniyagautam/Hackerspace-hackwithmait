const quizData = [
    {
        question: "How often have you felt down, depressed, or hopeless in the past two weeks?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    },
    {
        question: "How often have you felt nervous, anxious, or on edge in the past two weeks?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    },
    {
        question: "How often have you felt stressed or overwhelmed in the past month?",
        options: ["Rarely or never", "Occasionally", "Frequently", "Almost constantly"],
    },
    {
        question: "How often do you experience difficulty falling asleep or staying asleep?",
        options: ["Rarely or never", "Occasionally", "Frequently", "Almost every night"],
    },
    {
        question: "How often do you feel isolated or disconnected from others?",
        options: ["Rarely or never", "Occasionally", "Frequently", "Almost constantly"],
    },
    {
        question: "How often do you consume alcohol or drugs to cope with stress or emotions?",
        options: ["Never", "Rarely", "Occasionally", "Frequently"],
    },
    {
        question: "How would you rate your overall self-esteem?",
        options: ["High", "Moderate", "Low", "Very low"],
    },
    {
        question: "How frequently do you experience sudden and intense shifts in mood?",
        options: ["Rarely or never", "Occasionally", "Frequently", "Almost constantly"],
    },
    {
        question: "Have you had thoughts of harming yourself or ending your life in the past month?",
        options: ["No", "Rarely", "Occasionally", "Frequently"],
    },
    {
        question: "How often do you struggle with concentration, memory, or decision-making?",
        options: ["Rarely or never", "Occasionally", "Frequently", "Almost constantly"],
    },
    {
        question: "How much does your mental health impact your physical well-being?",
        options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
        question: "How has your mental health affected your performance at work or school in the past month?",
        options: ["Not at all", "Slightly", "Moderately", "Significantly"],
    },
];

const container = document.querySelector('.container');
const questionBox = document.getElementById("questionBox");
const quizForm = document.getElementById("quizForm");

let index = 0;
let total = quizData.length;
let answers = [];

const loadQuestion = () => {
    if (index === total) {
        quizEnd();
    } else {
        questionBox.innerText = `${index + 1}. ${quizData[index].question}`;
        const options = quizData[index].options;
        const optionsHTML = options.map((option, i) => {
            return `<input type="radio" id="option${i}" name="answer" value="${i}">
                    <label for="option${i}">${option}</label><br>`;
        }).join('');
        document.querySelector('.options').innerHTML = optionsHTML;
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
    const selectedOption = quizForm.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an option.");
    } else {
        answers.push(parseInt(selectedOption.value));
        index++;
        loadQuestion();
    }
};

const quizEnd = () => {
    const totalScore = answers.reduce((acc, curr) => acc + curr, 0);
    let result;
    if (totalScore >= 0 && totalScore <= 6) {
        result = "Your mental health seems to be generally stable, with occasional fluctuations being part of normal life experiences. Continue practicing self-care and monitor any changes over time.\n- Engage in regular exercise: Physical activity can boost mood and reduce stress.\n- Practice mindfulness and relaxation techniques: Meditation, deep breathing exercises, and yoga can promote relaxation and reduce anxiety.\n- Maintain social connections: Spend time with friends and loved ones, even if it's virtual, to foster a sense of belonging and support.\n- Puzzle games: Engage in activities like crosswords, Sudoku, or jigsaw puzzles to keep the mind sharp and entertained.\n- Outdoor activities: Take leisurely walks, go for a bike ride, or spend time gardening to enjoy nature and fresh air.\n- Board games or card games: Gather friends or family for a game night with classics like Scrabble, Monopoly, or Uno.";
    }
    
    else if (totalScore >= 7 && totalScore <= 14) {
        result = "You may be experiencing mild to moderate levels of distress. It's essential to pay attention to your mental well-being and consider adopting coping strategies such as relaxation techniques or talking to a trusted friend or counselor.\n- Establish a daily routine: Structure and consistency can provide a sense of stability and control.\n- Journaling: Writing down thoughts and feelings can help process emotions and gain perspective.\n- Seek social support: Share your concerns with trusted friends or family members, or consider joining a support group.\n- Creative activities: Try painting, drawing, or crafting to express emotions and reduce stress.\n- Team sports: Join a local sports team or organize friendly matches with friends for social interaction and physical exercise.\n- Mindfulness apps: Explore apps that offer guided meditation, relaxation exercises, or stress management techniques.";
    }
    else if (totalScore >= 15 && totalScore <= 24) {
        result = "Your score suggests a moderate to high level of mental health concern. Seeking support from a mental health professional is recommended to address underlying issues and develop a personalized treatment plan.\n- Professional counselling or therapy: Work with a mental health professional to explore underlying issues and develop coping strategies.\n- Self-care activities: Prioritize self-care practices such as adequate sleep, healthy nutrition, and relaxation techniques.\n- Limit stressors: Identify and minimize sources of stress in your life, whether it's work-related, relationship issues, or environmental factors.\n- Therapeutic writing exercises: Practice journaling prompts focused on gratitude, self-reflection, or problem-solving to enhance coping skills.\n- Collaborative storytelling: Create stories or narratives with friends or family members, taking turns adding to the plot and characters.\n- Virtual support groups: Participate in online forums or support groups where individuals facing similar challenges can share experiences and provide encouragement.";
    }
    else {
        result = "Your score indicates a significant level of distress and impairment in functioning. It's crucial to seek professional help promptly. Consider reaching out to a therapist, counsellor, or psychiatrist for a comprehensive evaluation and treatment.\n- Immediate professional intervention: Reach out to a mental health crisis hotline, emergency services, or a healthcare provider for urgent support.\n- Safety planning: Develop a safety plan with a mental health professional if you're experiencing suicidal thoughts or behaviors.\n- Consider intensive treatment options: Inpatient or outpatient psychiatric care may be necessary for stabilization and intensive therapy.\n- Distraction games: Play immersive video games or online games that offer escapism and diversion from distressing thoughts.\n- Sensory activities: Experiment with sensory-based activities like aromatherapy, soothing music, or tactile stimulation to promote relaxation.\n- Therapeutic board games: Explore board games designed specifically for mental health, focusing on topics like emotions, coping skills, and self-awareness.";
    }
    
    container.innerHTML = `
        <div class="result">
            <h2>Mental Health Assessment Result:</h2>
            <p>${result}</p>
            <a href="contact.html">Consult a Therapist Now!!!</a>
        </div>`;
};

quizForm.addEventListener('submit', handleSubmit);

loadQuestion();