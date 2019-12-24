import React, { Fragment, Component } from 'react';

import './App.css';
import { BrowserRouter, Route, NavLink, Redirect } from "react-router-dom"




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Login: '',
      Password: '',
      test: '',
      myData: new Date(),
      fYear: new Date().getFullYear(),
      Month: new Date().getMonth(),
      fDay: new Date().getDate(),
      fMonth: '',
      monthEdt: []

    };


    this.monthName(new Date().getMonth());
    this.poleLogin = this.state.Login;
    this.polePassword = this.state.Password;
    this.testLogin = 'Admin';
    this.testPassword = '12345678';
    this.testPole = this.state.test;

    this.press = this.press.bind(this);

  }


  render() {

    return (
      <BrowserRouter>
        <div className='index'>

          <header className='header'>
            <img src='https://i.pinimg.com/originals/e8/7a/fb/e87afb485ae35f89aceef01bc65ff1c0.png' />

            {(this.state.test != '') ? <h3>Вы авторизованы как {this.state.test}</h3> : <h3>Добро пожаловать на сайт</h3>}
          </header>
          <nav className='nav'>
            <ul>
              <li>
                <NavLink to='/'>Главная</NavLink>
              </li>
              {(this.state.test == '') ? <li><NavLink to='/login'>Авторизация</NavLink></li> : ''}
              {(this.state.test != '') ? <li><NavLink to='/Profile'>Профиль</NavLink></li> : ''}
              {(this.state.test != '') ? <li><NavLink to='/Calendar'>Календарь</NavLink></li> : ''}
              <li>
                <NavLink to='/info'>Информация</NavLink>
              </li>
            </ul>
          </nav>

          <Route exact path='/' render={() => {
            return (
              <div className='indexBlock'>
                <img src="https://pbs.twimg.com/media/DwaCK4QX4AEHf2O.jpg:large"></img>
              </div>
            )
          }} />

          <Route path='/Profile' render={() => {
            return (
              <div className='profileBlock'>
                <img src="https://oluha.com/wp-content/uploads/bb-plugin/cache/flat-faces-icons-square-man-5-circle.png"></img>
                <h3>Профиль</h3>
                <h4>Имя: Иванов Иван</h4>
                <h4>Должность: Программист</h4>
                <h4>Стаж: 1 месяц</h4>
                <div><p>--События из базы--</p></div>
              </div>
            )
          }} />
          <Route path='/Info' render={() => {
            return (
              <div className='InfoBlock'>
                <h3>Добро пожаловать на сайт</h3>
                <p>Сайт создан для проверки способностей как тестовое задание</p>
              </div>
            )
          }} />

          <Route path='/Login' render={() => {
            if (this.state.test == '') {
              return (
                <div className='loginBlock'>
                  <h3>Авторизация</h3>
                  <div></div>
                  <div><p>Логин </p>
                    <input type="text" ref={ref => this.poleLogin = ref} defaultValue=''></input ></div>
                  <div><p>Пароль</p>
                    <input type="text" ref={ref => this.polePassword = ref} defaultValue=''></input ></div>
                  <button className='btn01' onClick={this.press}>Авторизация</button>
                </div>
              )
            }
            else {
              return (
                <div className='loginBlock'>
                  <h1>Добро пожаловать на сайт, {this.state.test}</h1>
                </div>
              )
            }

          }} />

          <Route path='/Calendar' render={() => {
            return (
              <div className='CalendarBlock'>
                <div className='CalendarBlock_head'>
                  <div className='CalendarBlock_head_left'>
                    <button className='btn01' >Добавить</button>
                    <button className='btn01' >Обновить</button>
                  </div>
                  <div className='CalendarBlock_head_ringt'>
                    <img src='http://www.clker.com/cliparts/r/N/1/v/H/d/magnifying-lens-th.png'></img>
                    <input></input>
                  </div>
                </div>
                <div className='CalendarBlock_main_head'>
                  <button onClick={this.dateCreate(-1).bind(this)}>{'<'}</button>
                  <div className='CalendarBlock_main_head_text'>
                    <p>{this.state.fMonth + " " + this.state.fYear}</p>
                  </div>
                  <button onClick={this.dateCreate(1).bind(this)}>{'>'}</button>
                  <button onClick={this.dateNow().bind(this)}>Сегодня</button>
                  <div className='CalendarBlock_main'>
                    <table>
                      <tr>
                        <th>Понедельник</th><th>Вторник</th><th>Среда</th><th>Четверг</th><th>Пятница</th><th>Суббота</th><th>Воскресенье</th>
                      </tr>
                      <tr>
                        <td><p>{this.state.monthEdt[1]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[2]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[3]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[4]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[5]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[6]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[7]}</p><textarea rows='7'></textarea></td>
                      </tr>
                      <tr>
                        <td><p>{this.state.monthEdt[1 + 7]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[2 + 7]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[3 + 7]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[4 + 7]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[5 + 7]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[6 + 7]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[7 + 7]}</p><textarea rows='7'></textarea></td>
                      </tr>
                      <tr>
                        <td><p>{this.state.monthEdt[1 + 14]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[2 + 14]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[3 + 14]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[4 + 14]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[5 + 14]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[6 + 14]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[7 + 14]}</p><textarea rows='7'></textarea></td>
                      </tr>
                      <tr>
                        <td><p>{this.state.monthEdt[1 + 21]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[2 + 21]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[3 + 21]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[4 + 21]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[5 + 21]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[6 + 21]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[7 + 21]}</p><textarea rows='7'></textarea></td>
                      </tr>
                      <tr>
                        <td><p>{this.state.monthEdt[1 + 28]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[2 + 28]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[3 + 28]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[4 + 28]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[5 + 28]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[6 + 28]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[7 + 28]}</p><textarea rows='7'></textarea></td>
                      </tr>
                      <tr>
                        <td><p>{this.state.monthEdt[1 + 35]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[2 + 35]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[3 + 35]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[4 + 35]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[5 + 35]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[6 + 35]}</p><textarea rows='7'></textarea></td>
                        <td><p>{this.state.monthEdt[7 + 35]}</p><textarea rows='7'></textarea></td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            )
          }} />

        </div>
      </BrowserRouter>
    );
  }



  getCountToMonth = (date) => {
    let dates = date;
    let newDate = new Date(dates.setMonth(dates.getMonth() + 1));
    newDate.setDate(0);
    return (newDate.getDate());
  }

  refreshCalendar = (year1, month1) => {

    let numOfEmptyDays = 0;
    let mEdt = [];
    let dates = new Date(year1, month1, 1);
    switch (dates.getDay()) {
      case 0: numOfEmptyDays = 6; break;
      case 1: numOfEmptyDays = 0; break;
      case 2: numOfEmptyDays = 1; break;
      case 3: numOfEmptyDays = 2; break;
      case 4: numOfEmptyDays = 3; break;
      case 5: numOfEmptyDays = 4; break;
      case 6: numOfEmptyDays = 5; break;
    }
    numOfEmptyDays++;
    for (let i = 0; i < numOfEmptyDays; i++) {
      mEdt.push(' ');
    }
    let ends = this.getCountToMonth(dates);
    for (let i = 1; i < ends; i++) {
      mEdt.push(i);
    }
    this.setState({ monthEdt: mEdt });
    this.setState((state) => {

      return { monthEdt: mEdt }
    });

  }

  press() {
    if (this.poleLogin.value == this.testLogin && this.polePassword.value == this.testPassword)
      this.setState({ test: this.poleLogin.value });
    else
      alert('Неверно введены данные');
    this.monthName(new Date().getMonth());

    this.refreshCalendar(this.state.fYear, this.state.Month);



  }

  monthName = (Month) => {
    switch (Month) {
      case 0: this.setState({ fMonth: "Январь" }); break;
      case 1: this.setState({ fMonth: "Февраля" }); break;
      case 2: this.setState({ fMonth: "Март" }); break;
      case 3: this.setState({ fMonth: "Апрель" }); break;
      case 4: this.setState({ fMonth: "Май" }); break;
      case 5: this.setState({ fMonth: "Июнь" }); break;
      case 6: this.setState({ fMonth: "Июль" }); break;
      case 7: this.setState({ fMonth: "Август" }); break;
      case 8: this.setState({ fMonth: "Сентябрь" }); break;
      case 9: this.setState({ fMonth: "Октябрь" }); break;
      case 10: this.setState({ fMonth: "Ноябрь" }); break;
      case 11: this.setState({ fMonth: "Декабрь" }); break;
    }
  }

  dateCreate = (item) => (event) => {
    var betaMonth = this.state.Month;
    betaMonth += item
    var betaYear = this.state.fYear + item;


    if (betaMonth > 11) {
      this.setState((state) => {
        return {
          Month: 0,
          fMonth: "Январь",
          fYear: betaYear
        }
      });
      this.refreshCalendar(betaYear, 0);
    } else if (betaMonth < 0) {
      this.setState((state) => {
        return {
          Month: 11,
          fMonth: "Декабрь",
          fYear: betaYear
        }
      });
      this.refreshCalendar(betaYear, 11);
    } else {
      this.setState((State) => {
        return {
          Month: State.Month + item
        }
      });
      this.setState({ Month: betaMonth });
      this.refreshCalendar(this.state.fYear, betaMonth);
    }
    this.monthName(betaMonth);

  }

  dateNow = (item) => (event) => {
    this.setState((state) => {
      return {
        fYear: new Date().getFullYear(),
        Month: new Date().getMonth(),
        fDay: new Date().getDate(),
        fMonth: "Декабрь"
      }
    });
    this.monthName(new Date().getMonth());

    this.refreshCalendar(new Date().getFullYear(), new Date().getMonth());

  }

}

export default App;
