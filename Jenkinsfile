pipeline {
    agent any
    environment {
        HOME = '.'
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'npm install'
                sh 'npm run webdriver-update'
                sh 'npm test'
                sh 'cat ./reports/json/cucumber_report.json | ./node_modules/.bin/cucumber-junit > ./reports/cucumber_report.xml'
            }
        }
    }
    post {
        always {
            junit '**/reports/**/*.xml'
        }
    }
}
