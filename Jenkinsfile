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
                sh './node_modules/protractor/bin/webdriver-manager update'
                sh 'npm test'
                sh 'cat .reports/json/cucumber_report.json | ./node_modules/.bin/cucumber-junit > cucumber_report.xml'
            }
        }
    }
    post {
        always {
            junit '**/reports/**/*.xml'
        }
    }
}
