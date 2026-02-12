# ROADMAP: SEO-блог на Astro

**Проект:** Блог Карповой Ольги — здоровье, питание, привычки
**Стек:** Astro 4 + Tailwind CSS + GitHub Pages
**Домен:** https://zdravolog.ru
**Репозиторий:** https://github.com/litfsing-jpg/astra

---

## Фаза 1: Запуск на GitHub [ВЫПОЛНЕНО]

- [x] Инициализировать git
- [x] Создать .gitignore
- [x] Настроить GitHub Actions деплой (gh-pages branch)
- [x] Сайт доступен в интернете

## Фаза 2: SEO-доработки [ВЫПОЛНЕНО]

- [x] Подключить @astrojs/sitemap (автогенерация sitemap-index.xml)
- [x] Добавить robots.txt
- [x] JSON-LD Schema.org: Person, WebSite, BreadcrumbList (все страницы)
- [x] JSON-LD: BlogPosting + MedicalWebPage (статьи)
- [x] Open Graph мета-теги
- [x] Twitter Cards
- [x] Canonical URLs

## Фаза 3: Контент и Obsidian [ВЫПОЛНЕНО]

- [x] Подключить MDX (@astrojs/mdx) для компонентов в статьях
- [x] Создать CTA-кнопку (CtaButton.astro) для партнёрских ссылок
- [x] Перенести статью «Почему не худею» из MyNote (271 строка)
- [x] Настроить структуру изображений (public/images/covers, articles)
- [x] Исправить пути изображений для GitHub Pages base path

## Фаза 4: Документация [ВЫПОЛНЕНО]

- [x] Создать ROADMAP.md
- [x] Создать docs/ERRORS_AND_SOLUTIONS.md
- [x] Адаптировать систему экспертных ролей (Quartz → Astro)

## Фаза 5: Расширение контента [ВЫПОЛНЕНО]

- [x] Написать 3 новые статьи для health-ниши (питание, привычки, водный баланс)
- [x] Добавить страницу «Об авторе» (src/pages/about.astro)
- [x] Добавить страницу «Контакты» (src/pages/contacts.astro)
- [x] Обновить навигацию (Header + Footer)
- [x] Удалить sample-post.md (старый автор)

## Фаза 6: Аналитика и продвижение [ВЫПОЛНЕНО]

- [x] Яндекс.Метрика — счётчик 106796892, работает
- [x] Google Search Console — верификация wwRrsfJ6gH4qhs-Mm78VdGhEsOSuNwRJaRZ5jxz4DAM
- [x] Яндекс.Вебмастер — верификация e770463ad98708f6
- [x] Sitemap загружен в оба поисковика
- [x] Сайт подтверждён в Google и Яндекс

## Фаза 7: Продвинутые возможности [ВЫПОЛНЕНО]

- [x] RSS-лента (@astrojs/rss, ручная генерация с CDATA)
- [x] FAQPage schema (frontmatter faq + JSON-LD + визуальный блок)
- [x] Полнотекстовый поиск (Pagefind, src/pages/search.astro)
- [x] Lazy loading изображений (loading=lazy, decoding=async)
- [x] Кастомный домен zdravolog.ru + HTTPS
- [x] Фавикон (сердце с пульсом)
- [x] SEO-картинка для соцсетей (seo-image.webp)
- [x] Обновлены картинки в статье «Почему не худею» (Unsplash)
- [x] robots.txt обновлён на новый домен
- [x] Полный гайд для новичка (docs/FULL-PROJECT-GUIDE.md)

## Фаза 8: Рост контента и оптимизация [В ПЛАНАХ]

- [ ] Написать ещё 5-10 статей (цель: 15 статей для SEO-веса)
- [ ] Добавить FAQ в остальные 3 статьи
- [ ] A/B тестирование CTA-кнопок (текст, цвет)
- [ ] Оптимизация Core Web Vitals (PageSpeed Insights)
- [ ] Внутренняя перелинковка между статьями
- [ ] Настроить Open Graph изображения для каждой статьи (1200x630)
- [ ] Email-рассылка / подписка на обновления
- [ ] MCP-серверы для автоматизации

---

*Последнее обновление: 12.02.2026*
