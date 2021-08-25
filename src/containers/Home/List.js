import React, { useContext, useEffect } from 'react';
import { clientContext } from '../../contexts/ClientContext';
import MediaCard from './MediaCard';
import Slider from './Slider';


const List = () => {
    const { getProducts, products } = useContext(clientContext)

    useEffect(() => {
        // getProducts()
    }, [])

    return (
         <div class="lis">
              <div class="header"> 
                  <div class="nav_list">
                    <h1>SAA & SHOP</h1>
                    <h2>Все делаем с любовью!</h2>
                  </div>
                  <div class="container_1">
                       <div class="row_1">  
                           <ul class="navbar_menu">
                               <li class="menu_item">
                                   <a href="">Контакты</a>
                                </li>
                                <li class="menu_item">  
                                    <a href="">Оплата</a>
                                </li>
                                <li class="menu_item">     
                                    <a href="">Доставка</a>
                                </li>    
                                <li class="menu_item"> 
                                   <a href="">Гарантия</a>
                                 </li>
                                <li class="menu_item">    
                                   <a href="">Продавцам</a>
                               </li>
                           </ul>
                       </div>
                   </div>
                 <Slider/>
                  
              </div>
              <div class="sidebar">
                    <nav class="container_cont" >
                          <div class="container_content">
                             <div class="row">
                                  <div class="col-md-4">
                                      <div class="list-group">
                                           <a href="#" class="list-group-item">  КАТАЛОГ ТОВАРОВ</a>
                                           <a href="#" class="list-group-item">Мобильные телефоны</a>
                                           <a href="#" class="list-group-item">Аксессуары и Гаджеты</a>
                                           <a href="#" class="list-group-item">ТВ, Аудио, Видео</a>
                                           <a href="#" class="list-group-item">Фото и Видео</a>
                                           <a href="#" class="list-group-item">Ноутбуки и Компьютеры</a>
                                           <a href="#" class="list-group-item">Периферия</a>
                                           <a href="#" class="list-group-item">Защита питания</a>
                                           <a href="#" class="list-group-item">Оргтехника</a>
                                           <a href="#" class="list-group-item">Сетевое оборудование</a>
                                           <a href="#" class="list-group-item">Мелкая бытовая техника</a>
                                           <a href="#" class="list-group-item">Крупная бытовая техника</a>
                                      </div>
                                  </div>
                                     
                             </div>
                         </div>
                    </nav>
                  
              </div>
              <div class="content">
                  <div className="list">
                    {
                       products ? (
                           products.length ? (
                              products.map(product => (
                                <MediaCard key={product.id} product={product} />
                                ))
                                ) : (
                                    <h1>Нету товаров</h1>
                                    )
                         )    :   (
                        <h1>Loading...</h1>
                        )
                    }
                 </div> 
                  
              </div>
              <div class="footer">
                   <div class="bottom_menu">
                            <ul class="bottommenu_ul">
                                     <li class="bm_parent">О Компании</li>
                                     <li><a href="/aboutus">О Нас</a></li>
                                     <li><a href="/contact">Контакты</a></li>
                                     <li><a href="/work">Вакансии</a></li>                   
                            </ul>
                            <ul class="bottommenu_ul">
                                     <li class="bm_parent">Помощь</li>
                                     <li><a href="/order">Оформление заказа</a></li>
                                     <li><a href="/delivery">Доставка и Самовывоз</a></li>
                                     <li><a href="/payment">Оплата</a></li>
                                     <li><a href="/warranty">Гарантия</a></li>
                                     <li><a href="/obmen-i-vozvrat">Обмен и Возврат</a></li>
                                     <li><a href="/faq">Вопросы и Ответы</a></li>
                                     <li><a href="/publicoffer">Условия продажи товаров</a></li>                    </ul>
                            <ul class="bottommenu_ul">
                                    <li class="bm_parent">Разное</li>
                                    <li><a href="/discounts">Акции, Скидки, Подарки</a> </li>
                                    <li><a href="/install">Установка бытовой техники</a></li>                    </ul>
                            <ul class="bottommenu_ul">
                                    <li class="bm_parent">Для бизнеса</li>
                                    <li><a href="/corporate">Корпоративным клиентам</a></li>
                                    <li><a href="/suppliers">Продавцам</a></li>
                                    <li><a href="/reklama">Рекламодателям</a></li>                    </ul>
                       </div>
               </div>
       
        </div>
    
    );
};

export default List;