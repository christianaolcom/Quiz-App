const quizData = [
    {
        question: "1. What is the main function of the CPU in a computer?",
        options: ["Store data", "Execute instructions", "Manage files", "Display graphics"],
        answer: "Execute instructions"
    },

    {
        question: "2. Which of these is an example of software?",
        options: ["RAM", "Keyboard", "Microsoft word", "Hard disk"],
        answer: "Microsoft word"
    },

    {
        question: "3. Which component is used to store data permantently?",
        options: ["RAM", "CPU", "SSD", "Cache"],
        answer: "SSD"
    },

    {
        question: "4. Which device is used to output information from a computer?",
        options: ["Keyboard", "Mouse", "Monitor", "Scanner"],
        answer: "Monitor"
    },

    {
        question: "5. What does BIOS stand for?",
        options: ["Basic Input/Output System", "Binary Input Output Service", "Built-in Operating System", "Basic Internal Operating System"],
        answer: "Basic Input/Output System"
    },

    {
        question: "Who is known as the father of modern computers?",
        options: [" Alan Turing", "Charles Babbage", "Steve Jobs", "Tim Berners-Lee"],
        answer: "Charles Babbage"
    },

    {
        question: "What was the first mechanical computer called?",
        options: ["ENIAC", "Analytical Engine", "UNIVAC", "Colossus"],
        answer: "Analytical Engine"
    },

    {
        question: "Which invention marked the beginning of the second generation of computers?",
        options: ["Vacuum tubes", "Transistors", "Integrated circuits", " Microprocessors"],
        answer: "Transistors"
    },

    {
        question: "Who developed the World Wide Web?",
        options: ["Bill Gates", "Mark Zuckerberg", "Tim Berners-Lee", "Larry Page"],
        answer: "Tim Berners-Lee"
    },

    {
        question: "In which decade were personal computers first introduced?",
        options: ["1950s", "1960s", "1970s", "1980s"],
        answer: "1970s"
    },

    {
        question: "Which part of the computer is responsible for arithmetic operations?",
        options: ["RAM", "ALU", "GPU", "ROM"],
        answer: "ALU"
    },

    {
        question: "What type of memory is volatile?",
        options: ["RAM", "ROM", "SSD", "Hard drive"],
        answer: "RAM"
    },

    {
        question: "Which port is commonly used to connect external monitors?",
        options: ["USB", "HDMI", "Ethernet", "Serial"],
        answer: "HDMI"
    },

    {
        question: "What is the unit of measurement for the speed of a processor?",
        options: ["Bytes", "Hertz", "Pixels", "Amperes"],
        answer: "Hertz"
    },

    {
        question: "Which hardware component is essential for playing high-end video games?",
        options: ["CPU", "GPU", "SSD", "NIC"],
        answer: "GPU"
    },

    {
        question: "What is an Operating System?",
        options: ["A computer hardware component", "A program that manages hardware and software resources", " A computer virus", " A storage device"],
        answer: "A program that manages hardware and software resources"
    },

    {
        question: "Which of these is a web browser?",
        options: ["Adobe Photoshop", "Mozilla Firefox", " Python", "Microsoft Word"],
        answer: "Mozilla Firefox"
    },

    {
        question: "Which programming language is considered low-level?",
        options: ["Java", "Python", "Assembly", "Ruby"],
        answer: "Assembly"
    },

    {
        question: "What type of software is Microsoft Excel?",
        options: [" Database management", "Spreadsheet software", "Operating system", "Graphic design software"],
        answer: "Spreadsheet software"
    },

    {
        question: "Which term refers to the programs and applications used by a computer?",
        options: ["Firmware", " Hardware", "Software", "Malware"],
        answer: "Software"
    },

    {
        question: "How has AI impacted the healthcare industry?",
        options: ["By replacing doctors", "By diagnosing diseases faster and accurately", " By eliminating the need for hospitals", "By reducing medical education requirements"],
        answer: "By diagnosing diseases faster and accurately"
    },

    {
        question: "What is one major impact of 3D printing technology?",
        options: ["It produces instant holograms", "It allows for the creation of customized objects", "It eliminates the need for engineers", "It replaces traditional cameras"],
        answer: "It allows for the creation of customized objects"
    },

    {
        question: "Which technology powers cryptocurrencies like Bitcoin?",
        options: ["Artificial Intelligence", "Blockchain", " Cloud computing", "Quantum computing"],
        answer: "Blockchain"
    },

    {
        question: "How has cloud computing transformed businesses?",
        options: ["By eliminating the need for internet", "By increasing the size of data centers", "By reducing cybersecurity threats", " By providing on-demand storage and computing power"],
        answer: " By providing on-demand storage and computing power"
    },

    {
        question: "Which technology allows devices to communicate without human intervention?",
        options: ["IoT (Internet of Things)", " Augmented Reality", "Blockchain", " GPS"],
        answer: "IoT (Internet of Things)"
    },

    {
        question: "What is expected to be a significant advancement in transportation?",
        options: ["Steam engines", "Autonomous vehicles", "Manual-driven drones", "Mechanical bicycles"],
        answer: "Autonomous vehicles"
    },

    {
        question: "Which field might benefit the most from quantum computing?",
        options: ["Agriculture", "Cybersecurity", " History", "Fashion"],
        answer: "Cybersecurity"
    },

    {
        question: "How might AI impact education in the future?",
        options: ["By replacing teachers entirely", "By banning physical schools", "By automating grading only", "By providing personalized learning experiences"],
        answer: "By providing personalized learning experiences"
    },

    {
        question: "What is one challenge faced by AI development?",
        options: ["Lack of computing power", "Lack of data storage", "Too many programmers", "Bias in algorithms"],
        answer: "Bias in algorithms"
    },

    {
        question: "What is the future of renewable energy technology?",
        options: ["Fossil fuels will dominate", "Renewable energy will decrease", "Solar energy efficiency will increase", "Wind energy will become obsolete"],
        answer: "Solar energy efficiency will increase"
    },

    {
        question: "What does GUI stand for in software design?",
        options: ["Graphical User Interface", "General User Interface", "Global Utility Interface", "Graph Utility Input"],
        answer: "Graphical User Interface"
    },
    
    {
        question: "What is the primary function of an operating system?",
        options: ["To process user data", "To manage computer resources", "To run antivirus scans", "To display graphics"],
        answer: "To manage computer resources"
    },
    
    {
        question: "Which type of software controls the hardware directly?",
        options: ["Application software", "System software", "Utility software", "Firmware"],
        answer: "System software"
    },
    
    {
        question: "Which component is responsible for processing video and graphics in a computer?",
        options: ["RAM", "SSD", "CPU", "GPU"],
        answer: "GPU"
    },
    
    {
        question: "What is the primary purpose of a database management system (DBMS)?",
        options: ["To display images", "To manage data storage and retrieval", "To connect to the internet", "To process user inputs"],
        answer: "To manage data storage and retrieval"
    },
    
    {
        question: "Which programming language is primarily used for building Android applications?",
        options: ["Python", "Java", "Ruby", "C#"],
        answer: "Java"
    },
    
    {
        question: "What is an advantage of open-source software?",
        options: ["High cost", "Proprietary licenses", "Customization and collaboration", "Limited compatibility"],
        answer: "Customization and collaboration"
    },
    
    {
        question: "What type of memory is used to store the BIOS in a computer?",
        options: ["RAM", "ROM", "SSD", "Cache"],
        answer: "ROM"
    },
    
    {
        question: "Which software is commonly used for video editing?",
        options: ["Microsoft Excel", "Adobe Premiere Pro", "AutoCAD", "Google Chrome"],
        answer: "Adobe Premiere Pro"
    },
    
    {
        question: "What is the purpose of cybersecurity software?",
        options: ["To manage system resources", "To protect data and systems from threats", "To perform mathematical calculations", "To edit photos"],
        answer: "To protect data and systems from threats"
    },
    
    {
        question: "Which hardware device is used for data backup?",
        options: ["GPU", "Hard disk drive (HDD)", "Keyboard", "Monitor"],
        answer: "Hard disk drive (HDD)"
    },
    
    {
        question: "Which software is used to compress large files?",
        options: ["WinRAR", "PowerPoint", "Photoshop", "Visual Studio"],
        answer: "WinRAR"
    },
    
    {
        question: "Which type of software is Microsoft Access?",
        options: ["Presentation software", "Database management system", "Operating system", "Graphic design software"],
        answer: "Database management system"
    },
    
    {
        question: "Which component is responsible for maintaining a computer’s system clock?",
        options: ["GPU", "Motherboard", "CMOS battery", "RAM"],
        answer: "CMOS battery"
    },
    
    {
        question: "What does IDE stand for in programming?",
        options: ["Integrated Development Environment", "Internet Development Extension", "Interactive Database Engine", "Integrated Database Editor"],
        answer: "Integrated Development Environment"
    },
    
    {
        question: "What is the purpose of antivirus software?",
        options: ["To run programs faster", "To identify and remove malware", "To compress files", "To improve hardware performance"],
        answer: "To identify and remove malware"
    },
    
    {
        question: "What type of device is a scanner?",
        options: ["Input device", "Output device", "Storage device", "Processing device"],
        answer: "Input device"
    },
    
    {
        question: "Which type of software is Linux?",
        options: ["Database software", "Operating system", "Application software", "Antivirus software"],
        answer: "Operating system"
    },
    
    {
        question: "Which hardware component connects computers in a network?",
        options: ["Printer", "Switch", "Mouse", "Projector"],
        answer: "Switch"
    },
    
    {
        question: "What is an algorithm in software development?",
        options: ["A physical hardware component", "A series of instructions to solve a problem", "A tool for formatting text", "A program for editing videos"],
        answer: "A series of instructions to solve a problem"
    },
    
    {
        question: "What is the role of a firewall in computer networks?",
        options: ["To speed up network connections", "To block unauthorized access", "To store user data", "To improve graphics rendering"],
        answer: "To block unauthorized access"
    },
    
    {
        question: "What does the term 'cloud storage' refer to?",
        options: ["Data stored on local disks", "Data stored on internet servers", "Data stored on DVDs", "Data stored in RAM"],
        answer: "Data stored on internet servers"
    },
    
    {
        question: "Which software is commonly used for creating animations?",
        options: ["Adobe Illustrator", "Blender", "Notepad", "WinRAR"],
        answer: "Blender"
    },
    
    {
        question: "What type of hardware device is a touchpad?",
        options: ["Input device", "Output device", "Processing device", "Storage device"],
        answer: "Input device"
    },
    
    {
        question: "What is an example of wearable technology in healthcare?",
        options: ["MRI machine", "Smartwatch", "Desktop computer", "Laser printer"],
        answer: "Smartwatch"
    },
    
    {
        question: "Which AI-powered tool is used for diagnosing diseases?",
        options: ["Siri", "Google Translate", "IBM Watson Health", "Photoshop"],
        answer: "IBM Watson Health"
    },
    
    {
        question: "How has telemedicine impacted healthcare?",
        options: ["Reduced communication", "Improved remote access to medical services", "Eliminated hospitals", "Replaced traditional medicine"],
        answer: "Improved remote access to medical services"
    },
    
    {
        question: "Which AI technology enables voice recognition systems?",
        options: ["Machine learning", "Quantum computing", "Blockchain", "Data compression"],
        answer: "Machine learning"
    },
    
    {
        question: "What type of data is commonly used in healthcare AI models?",
        options: ["Weather data", "Genomic data", "Sports data", "Entertainment data"],
        answer: "Genomic data"
    },
    
    {
        question: "Which component is crucial for running AI algorithms efficiently?",
        options: ["GPU", "Keyboard", "Hard disk", "Printer"],
        answer: "GPU"
    },
    
    {
        question: "Which software is widely used in educational e-learning platforms?",
        options: ["Zoom", "Adobe Photoshop", "WinRAR", "Notepad"],
        answer: "Zoom"
    },
    
    {
        question: "What is a major advantage of AI in education?",
        options: ["Reduced teacher involvement", "Personalized learning experiences", "Increased textbook costs", "Limited student engagement"],
        answer: "Personalized learning experiences"
    },
    
    {
        question: "Which AI-powered feature can assist visually impaired students?",
        options: ["Text-to-speech systems", "Data encryption", "Image compression", "Video editing tools"],
        answer: "Text-to-speech systems"
    },
    
    {
        question: "What is an example of AI in automated learning systems?",
        options: ["Virtual reality headsets", "Adaptive learning software", "Traditional blackboards", "Handwritten notes"],
        answer: "Adaptive learning software"
    },
    
    {
        question: "How does AI improve medical imaging?",
        options: ["By reducing image quality", "By analyzing images faster and more accurately", "By eliminating the need for imaging devices", "By increasing costs"],
        answer: "By analyzing images faster and more accurately"
    },
    
    {
        question: "Which technology is used to manage patient records electronically?",
        options: ["EHR systems", "Web browsers", "Video conferencing software", "Graphics software"],
        answer: "EHR systems"
    },
    
    {
        question: "What is a chatbot in customer service?",
        options: ["A physical robot", "A computer program that simulates conversation", "A storage device", "A video editing tool"],
        answer: "A computer program that simulates conversation"
    },
    
    {
        question: "Which AI technology powers recommendation systems in e-learning platforms?",
        options: ["Blockchain", "Machine learning", "Quantum computing", "Data visualization"],
        answer: "Machine learning"
    },
    
    {
        question: "What is the function of RAM in a computer?",
        options: ["Permanent data storage", "Temporary data storage for processing", "Generating graphics", "Managing power supply"],
        answer: "Temporary data storage for processing"
    },
    
    {
        question: "Which AI tool is commonly used for predicting patient outcomes?",
        options: ["TensorFlow", "AutoCAD", "Photoshop", "SketchUp"],
        answer: "TensorFlow"
    },
    
    {
        question: "Which hardware component is primarily responsible for executing instructions in a computer?",
        options: ["CPU", "RAM", "GPU", "Hard Drive"],
        answer: "CPU"
    },
    
    {
        question: "Which port is commonly used for connecting external storage devices?",
        options: ["USB", "HDMI", "VGA", "Ethernet"],
        answer: "USB"
    },
    
    {
        question: "What is the function of a motherboard in a computer?",
        options: ["To process graphics", "To connect and communicate between components", "To store data", "To display images"],
        answer: "To connect and communicate between components"
    },
    
    {
        question: "Which programming language is widely used for AI development?",
        options: ["Python", "HTML", "SQL", "CSS"],
        answer: "Python"
    },
    
    {
        question: "What is the purpose of a solid-state drive (SSD)?",
        options: ["To increase internet speed", "To store data faster than HDDs", "To display graphics", "To improve battery life"],
        answer: "To store data faster than HDDs"
    },
    
    {
        question: "What does HTTP stand for?",
        options: ["HyperText Transfer Protocol", "High-Tech Transport Protocol", "HyperText Translation Program", "Hosting Transfer Technology Protocol"],
        answer: "HyperText Transfer Protocol"
    },
    
    {
        question: "Which software development model focuses on iterative progress?",
        options: ["Waterfall", "Agile", "V-Model", "Spiral"],
        answer: "Agile"
    },
    
    {
        question: "What does DNS stand for in networking?",
        options: ["Domain Name System", "Data Network System", "Device Name Service", "Digital Network System"],
        answer: "Domain Name System"
    },
    
    {
        question: "What is the purpose of cache memory?",
        options: ["To store files permanently", "To temporarily store frequently accessed data", "To process data faster", "To increase screen resolution"],
        answer: "To temporarily store frequently accessed data"
    },
    
    {
        question: "Which type of malware locks your files and demands payment for access?",
        options: ["Trojan", "Ransomware", "Adware", "Spyware"],
        answer: "Ransomware"
    },
    
    {
        question: "What is the main purpose of a compiler in software development?",
        options: ["To execute code directly", "To convert code into machine language", "To edit text files", "To manage system updates"],
        answer: "To convert code into machine language"
    },
    
    {
        question: "Which AI concept refers to systems capable of learning and improving from data?",
        options: ["Machine Learning", "Data Encryption", "Algorithm Sorting", "Code Refactoring"],
        answer: "Machine Learning"
    },
    
    {
        question: "What is an IP address?",
        options: ["A physical location of a computer", "A unique identifier for devices on a network", "A type of malware", "An error message code"],
        answer: "A unique identifier for devices on a network"
    },
    
    {
        question: "Which device is used to convert digital signals into sound?",
        options: ["Speaker", "Microphone", "Scanner", "Camera"],
        answer: "Speaker"
    },
    
    {
        question: "Which healthcare application uses AI to suggest treatments for specific diseases?",
        options: ["IBM Watson", "Adobe Lightroom", "Zoom", "Notepad"],
        answer: "IBM Watson"
    },
    
    {
        question: "What is the main advantage of cloud computing in education?",
        options: ["Increased hardware requirements", "Access to resources from anywhere", "Higher internet costs", "Limited scalability"],
        answer: "Access to resources from anywhere"
    },
    
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "High-Tech Machine Language", "Hyper Transfer Markup Logic", "Hosting Text Management Language"],
        answer: "HyperText Markup Language"
    },
    
    {
        question: "Which AI application can help doctors analyze X-rays faster?",
        options: ["Deep Learning algorithms", "Database management systems", "Web browsers", "Spreadsheet software"],
        answer: "Deep Learning algorithms"
    },
    
    {
        question: "What is the purpose of a graphics card in gaming computers?",
        options: ["To improve audio quality", "To render images and videos", "To store game files", "To enhance internet speed"],
        answer: "To render images and videos"
    },
    
    {
        question: "Which operating system is commonly used for web servers?",
        options: ["Windows", "Linux", "MacOS", "Android"],
        answer: "Linux"
    },
    
    {
        question: "What is the purpose of encryption in data security?",
        options: ["To increase file size", "To convert data into unreadable formats for protection", "To compress data", "To edit digital images"],
        answer: "To convert data into unreadable formats for protection"
    },
    
    {
        question: "What is the difference between hardware and software?",
        options: ["Hardware is physical, software is non-physical", "Hardware stores data, software processes data", "Hardware is for coding, software is for networking", "Hardware cannot be upgraded, software can"],
        answer: "Hardware is physical, software is non-physical"
    },
    
    {
        question: "Which type of software helps in creating documents?",
        options: ["Spreadsheet software", "Word processors", "Antivirus software", "CAD software"],
        answer: "Word processors"
    },
    
    {
        question: "What is the full form of LAN in networking?",
        options: ["Large Area Network", "Local Area Network", "Logical Application Node", "Linked Access Network"],
        answer: "Local Area Network"
    },
    
    {
        question: "What does FTP stand for in file transfer?",
        options: ["File Transfer Protocol", "Fast Transfer Process", "File Tracking Program", "Fast Transaction Path"],
        answer: "File Transfer Protocol"
    },
    
    {
        question: "Which hardware component is critical for multitasking?",
        options: ["RAM", "Hard Drive", "Monitor", "Keyboard"],
        answer: "RAM"
    },
    
    {
        question: "What is the primary function of biometric systems in security?",
        options: ["Data analysis", "Verification based on physical or behavioral traits", "Encrypting data", "Compressing files"],
        answer: "Verification based on physical or behavioral traits"
    },
    
    {
        question: "What is one benefit of AI-powered chatbots in education?",
        options: ["Reduce study time", "Provide instant responses to student queries", "Eliminate teacher roles", "Replace physical classrooms"],
        answer: "Provide instant responses to student queries"
    },
    
    {
        question: "What is the purpose of a NIC (Network Interface Card)?",
        options: ["To connect a computer to a network", "To manage operating systems", "To process user input", "To display images on a screen"],
        answer: "To connect a computer to a network"
    },
    
    {
        question: "Which AI technology is commonly used for facial recognition?",
        options: ["Deep Learning", "Blockchain", "Quantum Computing", "Data Visualization"],
        answer: "Deep Learning"
    }
    
];


const questionNumberEl = document.getElementById("question-number");
const questionEl = document.getElementById("question");
const optionEl = document.querySelectorAll(".option");
const timerEl = document.getElementById("timer");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

let currentQuestion = 0;
let score = 0;
let timeLeft = 15 * 60; 
let timer;
let answerSelected = false;

function startGlobalTimer() {
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            displayTimeOver();
        } else {
            timeLeft--;
            updateTimerDisplay();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerEl.textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

function displayTimeOver() {
    resultEl.textContent = "Time Over";
    questionEl.textContent = "";
    optionEl.forEach(option => (option.textContent = ""));
    nextBtn.disabled = true;
}

function loadQuestion() {
    const { question, options } = quizData[currentQuestion];
    questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    questionEl.textContent = question;
    optionEl.forEach((option, index) => {
        option.textContent = options[index];
        option.classList.remove("correct", "incorrect");
        option.onclick = () => selectOption(option, options[index]);
    });
    answerSelected = false;
    nextBtn.disabled = true;
}

function selectOption(option, selectedAnswer) {
    if (answerSelected) return;
    answerSelected = true;

    const correctAnswer = quizData[currentQuestion].answer;
    console.log(`selected Answer: ${selectedAnswer}`);
    console.log(`correct Answer: ${correctAnswer}`);
    
    if (selectedAnswer === correctAnswer) {
        option.classList.add("correct");
       score++;
       scoreEl.innerHTML = `${score} out of ${quizData.length}`
       console.log(score);
       
        
    } else {
        option.classList.add("incorrect");
        optionEl.forEach(opt => {
            if (opt.textContent === correctAnswer) {
                opt.classList.add("correct");
            }
        });
    }
    // scoreEl.innerHTML = `${score} out of ${quizData.length}`
    nextBtn.disabled = false;
}

nextBtn.onclick = () => {
    answerSelected=false;
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        // currentQuestion++;
        loadQuestion();
    } else {
        showResult();
        // console.log("showResult");
        
    }
};

function showResult() {
   const quizEl = document.getElementById("quiz");
   quizEl.innerHTML = `<h1 style="text-align: center; font-weight: bold;">You scored ${score} out of ${quizData.length}</h1>`;
   //    quizEl.classList.add("hide");
//    resultEl.classList.remove("hide");
    
}
    
function initQuiz() {
    startGlobalTimer();
    loadQuestion();
}

console.log(score);

initQuiz();


