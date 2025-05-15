## QuizWizard

QuizWizard is an interactive platform for conducting quizzes with gamification elements. It is ideal for teachers, trainers, event organizers, and anyone looking to create and run engaging quizzes.

### Description

The platform allows you to quickly create quizzes with various question types, launch sessions with time and score tracking, and monitor results in real-time. The interface is mobile-friendly and easy to use.

### Features

* Quick Quiz Creation:

  * Support for 6 question types (multiple choice, true/false, and more)
  * Built-in editor with live preview

* Gamification:

  * Time limits per question
  * Scoring system
  * Leaderboard

* Responsive Design:

  * Mobile device support
  * Easy navigation

* Analytics:

  * Real-time participant answer statistics
  * Export results to CSV format

### Technologies

Frontend:

* HTML5
* CSS3
* JavaScript

Tools:

* Font Awesome

### Quick Start

1. Clone the repository:

git clone https://github.com/yourusername/quizwizard.git
cd quizwizard

2. Open the index.html file in your browser:

* For Linux/MacOS:

open index.html

* For Windows:

start index.html

### Usage

1. Creating a Quiz:

   * Go to the “Create Quiz” section
   * Add questions and configure parameters (time, bonuses)

2. Running a Quiz:

const quiz = new QuizWizard({
  questions: myQuestions,
  timeLimit: 30 // time per question in seconds
});
quiz.start();

3. Analyzing Results:

   * View real-time statistics
   * Export participant data

### Documentation

Additional materials are available in the Wiki section:

* Advanced settings
* API
* Sample quizzes

### Contributing

All suggestions and contributions are welcome. To contribute:

1. Fork the repository
2. Create a new branch:

      git checkout -b feature/MyFeature
   
3. Commit your changes:

      git commit -m "Added new feature"
   
4. Push the branch:

      git push origin feature/MyFeature
   
5. Open a Pull Request
