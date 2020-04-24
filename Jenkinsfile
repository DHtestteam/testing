pipeline {
    agent { docker { image 'node:latest' } }
    environment {
        HOME = '.'
    }
    node {
            withCredentials([usernameColonPassword(credentialsId: 'DHtestteam', variable: 'Guilin$9017')]) {
            sh '''
                set +x
                curl -u "$USERPASS" https://gitbub.com/DHtestteam/ > output
                '''
            }
        }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'npm install --slient'
                sh 'npm install -g protractor'
                sh 'protractor ./conf.js'
            }
        }
    }
    post {
        always {
            junit 'build/reports/**/*.xml'
        }
    }
}
