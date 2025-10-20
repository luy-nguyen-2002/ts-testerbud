// pipeline {
//   agent any
//   environment {
//     CI = "true"
//     HEADLESS = "true"
//   }
//   options {
//     timeout(time: 90, unit: 'MINUTES')
//     timestamps()
//   }
//   stages {
//     stage('Checkout') {
//       steps {
//         git branch: 'main', url: 'https://github.com/luy-nguyen-2002/ts-testerbud.git'
//       }
//     }
//     stage('Setup Node.js') {
//       steps {
//         bat 'node -v || echo Node not installed'
//         bat 'npm -v || echo npm not installed'
//       }
//     }
//     stage('Install Dependencies') {
//       steps {
//         bat 'npm install'
//       }
//     }
//     stage('Generate BDD Tests') {
//       steps {
//         bat 'npx bddgen'
//       }
//     }
//     stage('Priority Tests - Google Chrome') {
//       steps {
//         bat 'npx playwright test --project="Google Chrome" --grep "@smoke|@positive" --reporter=list,html,allure-playwright'
//       }
//     }
//     // ... keep rest of your stages ...
//     stage('Generate Allure Report') {
//       steps {
//         bat 'npx allure generate ./allure-results --clean -o allure-report'
//       }
//     }
//   }
//   post {
//     always {
//       archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true
//       archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
//       archiveArtifacts artifacts: 'videos/**, traces/**, test-results/**', allowEmptyArchive: true
//     }
//     failure {
//       echo 'Build failed! Check test reports and logs.'
//     }
//     success {
//       echo '✅ All tests passed successfully!'
//     }
//   }
// }
