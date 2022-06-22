import { interval } from "rxjs";


const observer = {
        next: val => console.log('Next', val),
        complete: () => console.log('Complete')
}

const  interval$ = interval(1000);