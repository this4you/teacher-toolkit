# Лабораторна робота: UI автотести з Playwright (Intro)

## 🎯 Мета
Навчитися створювати UI автотести з **Playwright + TypeScript** та запускати їх локально.

---

## ✅ Завдання
Написати **5 автотестів** для сайту:

- https://the-internet.herokuapp.com

Тести мають бути **реальними UI сценаріями**:  
**відкриття сторінки → дія → перевірка**.

---

## 🧪 Що саме тестувати (обери будь-які 5 сценаріїв)
Можеш взяти будь-які 5 сторінок/фіч з цього списку:

- **Form Authentication** — `/login`
- **Checkboxes** — `/checkboxes`
- **Dropdown** — `/dropdown`
- **Dynamic Loading** — `/dynamic_loading/2`
- **Hovers** — `/hovers`
- **Add/Remove Elements** — `/add_remove_elements/`
- **JavaScript Alerts** — `/javascript_alerts`

> Можна обрати і будь-які інші сторінки з цього сайту.

---

## 🧱 Технічні вимоги
- Проєкт має бути на **TypeScript**
- Використовувати **Playwright Test Runner**: `@playwright/test`
- Тести зберігати у `tests/*.spec.ts`
- Має бути файл `playwright.config.ts`
- Кожен тест має містити:
    - `page.goto(...)`
    - хоча б одну дію (наприклад `click()` або `fill()`)
    - хоча б одну перевірку через `expect(...)`
- Тести мають запускатися командою:
  ```bash
  npx playwright test
  ```

---

## ▶️ Як запустити (перевірити себе)
1) Встановити залежності:
```bash
npm install
```

2) Встановити браузери:
```bash
npx playwright install
```

3) Запустити тести:
```bash
npx playwright test
```

4) (Опційно) Відкрити HTML репорт:
```bash
npx playwright show-report
```

---

## 📦 Що здати
Потрібно здати **2 речі**:

1) ✅ **Посилання на GitHub репозиторій** з кодом (публічний або надано доступ викладачу)
2) ✅ **Скріншот**, де видно що тести проходять успішно  
   (наприклад результат `npx playwright test` у терміналі або HTML report)

---

## ✅ Критерії оцінювання
- Є **5 тестів**
- Вони **запускаються** і **проходять**
- Репозиторій містить потрібні файли: `package.json`, `playwright.config.ts`, папку `tests/`
- Є скрін-підтвердження проходження тестів
