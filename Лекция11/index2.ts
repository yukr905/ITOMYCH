class Team{
    job?:string
    constructor(){

    }
}

class Developer extends Team{
    name: string
    surname: string
    constructor(name:string, surname:string){
        super()
        this.name = name
        this.surname = surname
    }
    push(){

    }
    upSkill(){

    }
    commit(){

    }
}

class FrontEndDeveloper extends Developer {

    constructor(name: string, surname: string) {
        super(name, surname)
        this.job = "Front"
    }

    createSite() {

    }

    createКequest(){

    }

    writeBack(){

    }
}

class BackEndDeveloper extends Developer {

    constructor(name: string, surname: string) {
        super(name, surname)
        this.job = "Back"
  
    }

    createBD() {

    }

    createAPI() {

    }

    writeFront(){

    }
}

class DevOps extends Developer {

    constructor(name: string, surname: string) {
        super(name, surname)
        this.job = "Devops"
    }

    release() {

    }

    deploy() {

    }
}

class PM extends Developer {

    constructor(name: string, surname: string) {
        super(name, surname);
        this.job = "PM";
    }

    checkTask() {

    }

    createTask() {

    }

    meetup() {

    }
}

class QA extends Developer {

    constructor(name: string, surname: string) {
        super(name, surname);
        this.job = "QA";
    }

    tests() {

    }

    writeTest() {

    }

    bugreport() {

    }
}

class BusinessAnalytic extends Developer {

    constructor(name: string, surname: string) {
        super(name, surname);
        this.job = "Business Analyst";
    }

    analytic() {

    }

    meetup() {

    }

    createTask() {

    }
}

class Task{
    title:string
    text:string
    status:string
    created:object
    executor:object
    constructor(title:string, text:string, status:string, created:object, executor:object){
        this.title = title
        this.text = text
        this.status = status
        this.created = created
        this.executor = executor
    }
    setStatus(worker:object,newStatus:string){
        if(worker == this.executor){
            this.status = newStatus
        }else{
            console.log("You can't change status")
        }
    }
    getStatus():string{
        return this.status
    }
}


const Yehor = new  BackEndDeveloper("Yehor","Ruban")
const Nazar = new PM("Nazar","Zastavnyi")

const task1 = new Task("API","create CRUD operations" , "TO DO" , Nazar , Yehor)

console.log(task1)

task1.setStatus(Yehor, "QA")

console.log(task1.getStatus())
