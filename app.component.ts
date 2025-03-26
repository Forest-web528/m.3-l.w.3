import { Component, OnInit, OnChanges, DoCheck, AfterViewInit, AfterContentInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterContentInit, OnDestroy {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  username: string = '';
  greeting: string = '';

  constructor() {
    console.log('Constructor: компонент создан');
  }

  ngOnInit() {
    console.log('ngOnInit: компонент инициализирован');
  }

  ngOnChanges() {
    console.log('ngOnChanges: изменение входных параметров');
  }

  ngDoCheck() {
    console.log('ngDoCheck: проверка изменений');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: представление компонента загружено');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit: контент компонента загружен');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: компонент уничтожен');
  }

  sayHello() {
    this.greeting = `Приветствую, ${this.username}!`;
  }
}