pipeline {
    agent { docker { image 'node:13' } }
    stages {
        stage('test') {
            steps {
                sh 'npm i'
                sh 'npm run test'
            }
        }
    }
}
