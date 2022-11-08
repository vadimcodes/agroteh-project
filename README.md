# agroteh-project
> Сайт Агротех21


## Оглавление
1. [Команды Git](#Команды-Git)
2. [Верстка HTML](#Верстка-HTML)
3. [Правила CSS](#Правила-CSS)
4. [Дополнительно](#Дополнительно)

## Команды Git

Основные команды при работе с Git

```

├── cd weblayout                  # Перейти в конкретную директорию проекта
├── git clone link                # Клонировать репозиторий, где `link` ссылка на репозиторий GitHub
├── git status                    # Проверить статус
├── git checkout -b dev           # Создать ветку, где `dev` наименование ветки
├── git checkout dev              # Перейти в ветку, где `dev` наименование ветки
├── git add .                     # Добавить объекты к коммиту, где `.` добавить все объекты
├── git commit -m "add header"    # Коммиты (коментарии) к заданию, где `"add header"` коммит
├── git push origin dev           # Запушить задание в GitHub, где `origin` ссылка на репозиторий

```
> Коммиты пушим только в свою ветку!

## Верстка HTML

1. Строгое соблюдение методологии [БЭМ](https://ru.bem.info/);
2. [Проверка БЭМ](https://yoksel.github.io/html-tree/) на наличие ошибок;
3. Проверка на [наличие ошибок](https://validator.w3.org/#validate_by_input) в верстке.

Файл `index.html` служит только для подключения шаблонов страницы. Для шаблонов предусмотренна отдельная папка `src/partials`

```

<body class="page__body">
  <div class="site-container">
    @include('partials/header.html')
    <main class="main">
      @include('partials/hero.html')
      @include('partials/blog.html')
    </main>
    @include('partials/footer.html')
  </div>
</body>

```

## Правила CSS

1. Соблюдение синктаксиса и порядка свойств CSS: [Код-стайл](https://codeguide.maxgraph.ru/);
2. Использование SCSS: [Гайд SCSS](https://sass-scss.ru/guide/).

> Файл `main.scss` служит только для подключения компонентов. Для компонентов предусмотренна отдельная папка `src/scss/components`

```

.nav {

    &__list {
        margin: 0;
    }

    &__item {
        color: red;
    }
}

```

## Дополнительно

1. Ссылка на сборку [Gulp с описанием](https://github.com/maxdenaro/gulp-maxgraph) 
2. Рекомендации при разработке [сайтов](https://weblind.ru/inner.html): 
