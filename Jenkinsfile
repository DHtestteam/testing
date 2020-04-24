pipeline {
    agent { docker { image 'node:latest' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'npm install --slient'
                sh 'wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \'
                sh 'apt-get update && apt-get install -y google-chrome-stable'
                sh 'npm install -g chromedriver'
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
