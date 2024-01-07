import { Component } from '@angular/core';
import { Todo } from './todo.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,CommonModule,InputTextModule,ButtonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos:Todo[]=[];
  newTodo:string;

  saveTodo(){
    if(this.newTodo){
      let todo=new Todo();
      todo.name=this.newTodo;
      todo.isCompleted=false;
      this.todos.push(todo);
      this.newTodo='';

    }
    else{
      alert("Please Enter Your ToDo!!");
    }
  }

  removeTask(name:string){
    alert(`Task "${name}" will be removed.`);
    this.todos = this.todos.filter((todo: Todo) => todo.name !== name);
  }


  completeTask(name:string) {
    const task = this.todos.find((todo: Todo) => todo.name === name);
    if (task) {
      task.isCompleted = true;
      alert(`Task "${name}" has been completed.`);
    }
  }

}
