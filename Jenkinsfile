Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { docker { image 'node:10.16.0' } }
    stages {
        stage('build') 
        {
            steps {
                sh 'npm --version'
                   }
        }
}
    post {
        always {
            junit 'build/reports/**/*.xml'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}
