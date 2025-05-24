import './App.css';

function App() {
  // Define the toggleMenu function for the menu toggle button
  const toggleMenu = () => {
    console.log("Menu toggled!");
    // You can add logic here to toggle a menu, e.g., by updating state to show/hide a menu
  };

  return (
    <div>
      <header>
        <h1>Screenshoter+</h1>
        <nav>
          <ul>
            <li><a href="#">Функции</a></li>
            <li><a href="#">Преимущества</a></li>
            <li><a href="#">Как использовать</a></li>
            <li><a href="#">Частые вопросы</a></li>
          </ul>
        </nav>
        <div className="right-section">
          <select id="languageSwitcher">
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="text">
          <h2 className="title">
            Делайте снимки и записывайте экран <span className="highlight">в 1 клик</span>
          </h2>
          <p>
            Вместе со Screenshoter можно в один клик сделать снимок или записать происходящее на экране ПК, чтобы поделиться с кем угодно.
          </p>
          <button id="downloadBtn">Скачать бесплатно</button>
        </div>
        <div className="image">
          <img src="/img/example 1.png" alt="Example" />
        </div>
      </section>

      <section className="hero">
        <h2>
          Встречайте — скриншоты и запись экрана <span className="highlight">2 в 1</span>
        </h2>
        <p>
          Больше не нужно искать две отдельные программы для скриншотов и записи экрана. Screenshoter поможет сделать снимок экрана, записать видео и поделиться им с кем угодно. Можно выделить весь экран, определенную область или активное окно.
        </p>
      </section>

      <section className="features">
        <div className="feature">
          <img src="/img/001-cursor.png" alt="Cursor" />
          <h3>Снимки и запись экрана в 1 клик</h3>
        </div>
        <div className="feature">
          <img src="/img/003-save.png" alt="Save" />
          <h3>Моментальная ссылка на файл</h3>
        </div>
        <div className="feature">
          <img src="/img/001-puzzle.png" alt="Puzzle" />
          <h3>Удобный редактор снимков</h3>
        </div>
        <div className="feature">
          <img src="/img/002-heart.png" alt="Heart" />
          <h3>Бесплатно и без регистрации</h3>
        </div>
      </section>

      <section className="recording-section">
        <div className="recording-box">
          <img src="/img/gif (1).png" alt="Recording GIF 1" />
        </div>
        <div className="recording-content">
          <h2>Запись экрана</h2>
          <p>Недостаточно снимков? Запишите происходящее на экране со своим голосом или звуком системы.</p>
          <p>
            <strong>Достаточно нажать две кнопки мыши</strong>, выделить необходимую область и начнется запись видео с экрана. Быстро и без сложных настроек.
          </p>
        </div>

        <div className="recording-content">
          <h2>В один клик</h2>
          <p>
            <strong>Достаточно нажать две кнопки мыши</strong> на клавиатуре, чтобы сделать скриншот или начать записывать видео с экрана.
          </p>
          <br />
          <p>Просто нажмите две кнопки мыши или настройте горячую кнопку на любую удобную клавишу.</p>
        </div>
        <div className="recording-box">
          <img src="/img/gif.png" alt="Recording GIF" />
        </div>

        <div className="recording-box">
          <img src="/img/gif (1).png" alt="Recording GIF 1" />
        </div>
        <div className="recording-content">
          <h2>Мгновенная ссылка</h2>
          <p>
            Мгновенное получение ссылки на снимок или видео. Вы только нажали Enter, а ссылка уже в буфере обмена. Перейдя по ссылке, можно будет посмотреть ваш снимок или записанное видео.
          </p>
        </div>

        <div className="recording-content">
          <h2>И редактор снимков</h2>
          <p>
            <strong>Более 5 инструментов</strong> для редактирования. Выделяете область и редактируете.
          </p>
          <br />
          <p>
            Если неверно выбрали область — не беда, можно без проблем её передвинуть и/или изменить размер, не удаляя то, что уже нарисовано!
          </p>
        </div>
        <div className="recording-box">
          <img src="/img/gif.png" alt="Recording GIF" />
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <img src="/img/crayon 1.png" alt="Crayon" />
          <h3>Выбирайте цвет и рисуйте карандашом</h3>
        </div>
        <div className="feature">
          <img src="/img/fullscreen 1.png" alt="Fullscreen" />
          <h3>Используйте стрелку, круг или квадрат для выделения</h3>
        </div>
        <div className="feature">
          <img src="/img/chat 1.png" alt="Chat" />
          <h3>Оставляйте комментарии</h3>
        </div>
        <div className="feature">
          <img src="/img/raindrop 1.png" alt="Raindrop" />
          <h3>Размывайте необходимую область</h3>
        </div>
      </section>

      <p className="triadas-title">
        <span>Screenshoter</span> - это функции на каждый день
      </p>

      <section className="triadas">
        <div className="triada">
          <img src="/img/SuperToroid-2.png" alt="Иконка 1" />
          <span>01</span>
          <h3>Обмен идеями</h3>
          <p>
            Когда нужно что-то наглядно показать коллеге, исполнителю или заказчику — можно сделать снимок экрана и добавить к нему комментарий. А если ситуация требует более детального объяснения — окей, не проблема. Screenshoter поможет записать видео экрана вместе с вашими голосовыми комментариями.
          </p>
        </div>
        <div className="triada">
          <img src="/img/RoundCube-Black-Matte.png" alt="Иконка 2" />
          <span>02</span>
          <h3>Создание инструкций</h3>
          <p>
            Нужно что-то наглядно объяснить? Создавайте удобные, пошаговые инструкции, добавляя комментарии и визуальные отметки в необходимом месте скриншота. Поделиться снимком или видеозаписью можно с помощью ссылки, которая мгновенно появляется в буфере обмена.
          </p>
        </div>
        <div className="triada">
          <img src="/img/Cone.png" alt="Иконка 3" />
          <span>03</span>
          <h3>Обратная связь</h3>
          <p>
            Если в процессе работы приложения, сайта или сервиса возникла ошибка, её можно моментально зафиксировать. Отправьте скриншот в техподдержку, где будет видно, в чем именно заключается проблема.
          </p>
        </div>
      </section>

      <section className="steps">
        <h2>
          Как использовать <span>Screenshoter</span>
        </h2>
        <div className="steps-container">
          <div className="step">
            <h3>Шаг 1.</h3>
            <div className="step-box">
              <img src="/img/screen.png" alt="Screen" />
            </div>
            <p>
              <strong>Скачайте программу</strong> на свой ПК или ноутбук
            </p>
          </div>
          <div className="step">
            <h3>Шаг 2.</h3>
            <div className="step-box">
              <p>Кадр с загрузкой программы</p>
            </div>
            <p>
              <strong>Запустите Screenshoter:</strong> программа будет работать в фоновом режиме
            </p>
          </div>
          <div className="step">
            <h3>Шаг 3.</h3>
            <div className="step-box">
              <p>Кадр с приложением программы</p>
            </div>
            <p>
              <strong>Наслаждайтесь удобством</strong> и быстродействием
            </p>
          </div>
        </div>
        <button className="step-btn">Скачать бесплатно</button>
      </section>

      <section className="features">
        <div className="feature-cards">
          <div className="card">
            <img src="/img/001-star.png" alt="Иконка 1" />
            <p>Без регистрации: не нужно вводить никаких персональных данных</p>
          </div>
          <div className="card">
            <img src="/img/shield 1.png" alt="Иконка 2" />
            <p>Бесплатно, без скрытых платежей и комиссий</p>
          </div>
          <div className="card">
            <img src="/img/002-cubes.png" alt="Иконка 3" />
            <p>Неограниченное количество скриншотов и записей</p>
          </div>
          <div className="card">
            <img src="/img/002-cloud-computing.png" alt="Иконка 4" />
            <p>Файлы хранятся в течение 1 года – вы можете удалить их в любое время</p>
          </div>
        </div>
      </section>

      <section className="faq">
        <h1>FAQ</h1>
        <div className="faq-item">
          <button className="faq-question">
            01. Платная ли программа? <span>+</span>
          </button>
          <div className="faq-answer">
            Нет, Screenshoter абсолютно бесплатный. Вам не нужно платить за скачивание, установку или использование программы — все функции бесплатные.
          </div>
        </div>
        <div className="faq-item">
          <button className="faq-question">
            02. Для каких платформ доступен Screenshoter? <span>+</span>
          </button>
        </div>
        <div className="faq-item">
          <button className="faq-question">
            03. Чем Screenshoter отличается от других программ для создания скриншотов?<span>+</span>
          </button>
        </div>
        <div className="faq-item">
          <button className="faq-question">
            04. Куда сохраняются скриншоты и видео?<span>+</span>
          </button>
        </div>
        <div className="faq-item">
          <button className="faq-question">
            05. Можно ли удалить файлы с сервера в пару кликов?<span>+</span>
          </button>
        </div>
      </section>

      <section className="cta">
        <div className="cta-image">
          <div className="hologran">
            <img src="/img/003-save.png" alt="Save Icon" />
          </div>
        </div>
        <div className="cta-content">
          <h2>Присоединяйтесь к 50 000+ пользователей</h2>
          <p>которые ежедневно используют Screenshoter в работе и личной переписке</p>
          <button className="cta-button">Загрузить сейчас</button>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="logo">Screenshoter+</div>
          <div className="footer-links">
            <a href="#">Функции</a>
            <a href="#">Преимущества</a>
            <a href="#">Как использовать</a>
          </div>
          <div className="footer-links">
            <a href="#">Обратная связь</a>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;