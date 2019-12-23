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
      fMonth: 'Декабрь'
    };
    
    this.monthName(new Date().getMonth());
    this.poleLogin = this.state.Login;
    this.polePassword = this.state.Password;
    this.testLogin = '1';
    this.testPassword = '1';
    this.testPole = this.state.test;

    this.press = this.press.bind(this);
  }

  press() {
    if (this.poleLogin.value == this.testLogin && this.polePassword.value == this.testPassword)
      this.setState({ test: this.poleLogin.value });
    else
      alert('Неверно введены данные');
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
                    <button className='btn01'>Добавить</button>
                    <button className='btn01'>Обновить</button>
                  </div>
                  <div className='CalendarBlock_head_ringt'>
                    <input></input>
                  </div>
                </div>
                <div className='CalendarBlock_main'>
                  <button onClick={this.dateCreate(-1).bind(this)}>{'<'}</button>
                  <p>{this.state.fMonth + " " + this.state.fYear}</p>
                  <button onClick={this.dateCreate(1).bind(this)}>{'>'}</button>
                  <button onClick={this.dateNow().bind(this)}>Сегодня</button>
                </div>
              </div>
            )
          }} />

        </div>
      </BrowserRouter>
    );
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
      this.setState({
        Month: 0,
        fMonth: "Январь",
        fYear: betaYear
      });
    } else if (betaMonth < 0) {
      this.setState({
        Month: 11,
        fMonth: "Декабрь",
        fYear: betaYear
      });
      this.setState({ fYear: betaYear });
    } else {
      this.setState((State, item) => ({
        Month: State.Month + item
      }));
      this.setState({ Month: betaMonth })
    }
    this.monthName(betaMonth);
  }



  dateNow = (item) => (event) => {
    this.setState({
      fYear: new Date().getFullYear(),
      Month: new Date().getMonth(),
      fDay: new Date().getDate(),
      fMonth: "Декабрь"
    });
    this.monthName(new Date().getMonth());
  }

  
  
  

}



export default App;
