import Header  from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CourseList from "./components/CourseList.jsx";
import {courses} from "./data/courses.js";
import "./App.css";

function App() {
  return (
      <div className="app">
        <Header/>
        <main className="main">
          <h2>  Учебные курсы</h2>
          <p className="courses-count"> Всего курсов: {courses.length}</p>
          <CourseList courses={courses} />
        </main>
        <Footer/>
      </div>
  );
}
export default App;




```
App
 |
 | Хранит students
 |
 | Создаёт deleteStudent()
 |
 v
StudentList
 |
 | Передаёт функцию дальше
 |
 v
StudentCard
 |
 | Пользователь нажал кнопку
 |
 v
Вызывает deleteStudent(id)
 |
 v
App обновляет students
 |
 v
React обновляет интерфейс
```

```
 App
                   |
             useState(students)
                   |
          +--------+--------+
          |                 |
          v                 v
     StudentList      StudentStatistics
          |                 |
          v                 v
     Показывает          Показывает
      карточки           количество
```

```
+------------------------------------------------------+
|                     STUDENT CRM                      |
|            Система управления студентами             |
+------------------------------------------------------+
|                                                      |
|                  Наши студенты                       |
|                                                      |
|       Всего: 5              Активных: 4              |
|                                                      |
|       [ Добавить студента ] [ Очистить список ]      |
|                                                      |
|  +------------------------------------------------+  |
|  | Anna Cohen                          [Активен]  |  |
|  | Возраст: 25                                   |  |
|  | Группа: React Basics                          |  |
|  |                                                |  |
|  | [ Изменить статус ]       [ Удалить ]          |  |
|  +------------------------------------------------+  |
|                                                      |
|  +------------------------------------------------+  |
|  | David Levi                          [Активен]  |  |
|  | Возраст: 28                                   |  |
|  | Группа: Python Basics                         |  |
|  |                                                |  |
|  | [ Изменить статус ]       [ Удалить ]          |  |
|  +------------------------------------------------+  |
|                                                      |
|  +------------------------------------------------+  |
|  | Sarah Miller                         [Пауза]   |  |
|  | Возраст: 23                                   |  |
|  | Группа: JavaScript                            |  |
|  |                                                |  |
|  | [ Изменить статус ]       [ Удалить ]          |  |
|  +------------------------------------------------+  |
|  Также: Michael Brown (30), Daniel Green (17).        |
|  У каждого своя карточка и две кнопки управления.     |
|                                                      |
+------------------------------------------------------+
|             Student CRM — учебный проект             |
+------------------------------------------------------+
```

```
student-crm/
|
+-- public/
|
+-- src/
|   |
|   +-- components/
|   |   |
|   |   +-- Header.jsx
|   |   +-- StudentList.jsx
|   |   +-- StudentCard.jsx
|   |   +-- StudentStatistics.jsx
|   |   +-- StatusBadge.jsx
|   |   +-- Footer.jsx
|   |
|   +-- data/
|   |   +-- students.js
|   |
|   +-- App.jsx
|   +-- App.css
|   +-- index.css
|   +-- main.jsx
|
+-- index.html
+-- package.json
```