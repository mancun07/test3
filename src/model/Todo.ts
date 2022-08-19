export class Todo {
    text: string;
    id: string;
    
    constructor(t: string) {
        this.text = t;
        this.id = Math.random().toString();
    }
}