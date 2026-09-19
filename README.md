# shvechkova.ru

Сайт-портфолио Анастасии Швечковой. Статика (HTML/CSS/JS), публикуется через GitHub Pages на домене **https://shvechkova.ru**.

## Как обновить сайт

```bash
# правим файлы, потом:
git add -A
git commit -m "описание изменений"
git push
```

Через 1–2 минуты изменения на сайте. Статус публикации — вкладка **Actions** в репозитории (задача `pages-build-deployment`).

## Что где лежит

| Путь | Что это |
|---|---|
| `index.html`, `project.html` | Главная и список проектов |
| `proj-*.html` | Страницы отдельных проектов |
| `belayaBereza/app/` | Статичная вёрстка «Белой Берёзы» (кнопка «ВЕРСТКА» на `proj-bb.html`) |
| `DIA/` | Лендинг DIA |
| `Luka/SmarskayaLuka/` | Лендинг «Самарская Лука» |
| `css/`, `scss/`, `js/`, `fonts/`, `images/` | Ресурсы главного сайта |
| `*.pdf` | Резюме |
| `CNAME` | Домен для GitHub Pages — не удалять |
| `.nojekyll` | Отключает обработку Jekyll, сайт отдаётся как есть — не удалять |
| `yandex_*.html` | Подтверждение прав в Яндекс.Вебмастере — не удалять |

## Публикация (настроено один раз)

- **Settings → Pages:** Source — *Deploy from a branch*, ветка `main`, папка `/ (root)`; Custom domain — `shvechkova.ru`; включено *Enforce HTTPS*.
- **DNS домена** (панель Timeweb):
  - `shvechkova.ru` — A-записи `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`;
  - `www` — CNAME `shvechkova.github.io`.

## История переезда

Первый коммит — сайт ровно в том виде, как был на хостинге Beget. Во втором убрано:

- кнопки «ПЕРЕЙТИ НА САЙТ» на мёртвые сайты (flower и vet на MODX, berezabelaya.tk на WordPress — их базы данных утеряны; KROVATO и тестовое задание — репозитории на GitHub удалены). Страницы проектов с описанием и видео остались;
- `start.php`, `email.php` (PHP на Pages не работает, форма в `index.html` и так была закомментирована);
- `app/` — неиспользуемый дубль `belayaBereza/app/`, `belayaBereza/bb-verst.rar` — исходник вёрстки.

Всё удалённое можно достать из первого коммита: `git show <коммит>:путь/к/файлу`.

Код MODX- и WordPress-проектов (flower, vet, belayabereza и др.) лежит в приватном репозитории [shvechkova-archive](https://github.com/Shvechkova/shvechkova-archive).

## Известные мелочи (были и на старом хостинге)

- `DIA/index.html` подключает `/bower_components/jquery/dist/jquery.js`, которого нет; jQuery всё равно грузится с CDN.
- `Luka/SmarskayaLuka/index.html` ссылается на отсутствующую картинку `img/_normal.jpg`.
