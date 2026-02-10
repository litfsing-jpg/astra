# ROADMAP: SEO-блог на Astro

**Проект:** Блог Карповой Ольги — здоровье, питание, привычки
**Стек:** Astro 4 + Tailwind CSS + GitHub Pages
**Репозиторий:** https://github.com/litfsing-jpg/astra

---

## Фаза 1: Запуск на GitHub [ВЫПОЛНЕНО]

- [x] Инициализировать git
- [x] Создать .gitignore
- [x] Настроить GitHub Actions деплой (gh-pages branch)
- [x] Сайт доступен на https://litfsing-jpg.github.io/astra/

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
- [ ] Настроить Obsidian vault (symlink в src/content/blog/) — опционально

## Фаза 6: Аналитика и продвижение [В ПЛАНАХ]

- [ ] Подключить Яндекс.Метрику
- [ ] Подключить Google Search Console
- [ ] Подключить Яндекс.Вебмастер
- [ ] Загрузить sitemap в поисковики
- [ ] Настроить Plausible / аналитику

## Фаза 7: Продвинутые возможности [В ПЛАНАХ]

- [ ] Подключить кастомный домен + HTTPS
- [ ] Добавить FAQPage schema для статей с FAQ
- [ ] Настроить RSS-ленту
- [ ] Добавить полнотекстовый поиск
- [ ] Исследовать MCP-серверы для автоматизации
- [ ] Оптимизация изображений (sharp, автоконвертация в WebP/AVIF)
- [ ] A/B тестирование CTA-кнопок

---

*Последнее обновление: 10.02.2026*
