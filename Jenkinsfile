pipeline {
    agent { docker { image 'node:7-alpine' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'npm install'
                sh './node_modules/protractor/bin/webdriver-manager update'
                sh './node_modules/.bin/protractor conf.js'
            }
        }
    }
    post {
        always {
            junit 'build/reports/**/*.xml'
        }
    }
}
