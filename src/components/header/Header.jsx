import React from "react";
import './header.css';
import logo from './svg/logo-little.png';

function Header(){
    return(
    <header className="header">
        <div className="container">
          <div className="header-row">
            <div className="logo">
              <img src={logo} alt="кортинка" />
            </div>
            <nav className="nav-bar">
              <a href="/" className="nav-bar_element">Главная</a>
              <a href="/News" className="nav-bar_element">Новости</a>
              <a href="/Information" className="nav-bar_element">Информация</a>
              <a href="/Techniks" className="nav-bar_element">Техника</a>
              <a href="/Achivments" className="nav-bar_element">Достижения</a>
              <a href="/BestCustomer" className="nav-bar_element">Лучший работник</a>
              <a href="/Vacancies" className="nav-bar_element">Вакансии</a>
            </nav>
          </div>
        </div>
    </header>
    );
}

export default Header;