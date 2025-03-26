import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// ✅ Импортируем модуль маршрутизации
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]) // ✅ Добавляем пустой массив маршрутов (если еще нет маршрутов)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
