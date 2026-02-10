# Ошибки и решения: Astro SEO-блог

Документация по ошибкам, с которыми столкнулись при разработке, и их решениям.

---

## 1. GitHub Pages показывает 404 после деплоя

**Симптом:** Workflow проходит success, но сайт выдаёт 404.

**Причина:** Метод деплоя через `actions/deploy-pages@v4` (GitHub Actions artifact) требует точной настройки Pages Source. Иногда не подхватывается.

**Решение:** Переключиться на деплой через ветку `gh-pages`:
```yaml
# .github/workflows/deploy.yml
- name: Deploy to gh-pages branch
  uses: peaceiris/actions-gh-pages@v4
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist
```
В Settings > Pages выбрать: **Source: Deploy from a branch** → **gh-pages** / **/ (root)**

---

## 2. Навигация ведёт на 404 (base path)

**Симптом:** Ссылки «Главная», «Блог» ведут на несуществующие URL.

**Причина:** Сайт живёт на `litfsing-jpg.github.io/astra/`, а ссылки в компонентах были захардкожены как `/`, `/blog` — без префикса `/astra/`.

**Решение:** Использовать `import.meta.env.BASE_URL` во всех внутренних ссылках:
```astro
---
const base = import.meta.env.BASE_URL;
---
<a href={base}>Главная</a>
<a href={`${base}blog`}>Блог</a>
<a href={`${base}blog/${post.slug}`}>Статья</a>
```

---

## 3. Бургер-меню не работает после навигации

**Симптом:** Мобильное меню открывается один раз, после перехода на другую страницу перестаёт работать.

**Причина:** Astro View Transitions перезагружают DOM, но скрипт с addEventListener вешается только при первой загрузке.

**Решение:** Обернуть в `astro:page-load`:
```html
<script>
  document.addEventListener('astro:page-load', () => {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    btn?.addEventListener('click', () => {
      menu?.classList.toggle('hidden');
    });
  });
</script>
```

---

## 4. npm ci падает в GitHub Actions (peer dependency conflict)

**Симптом:** Workflow падает на шаге `Install dependencies` с ошибкой peer dependency.

**Причина:** `@astrojs/mdx@4.x` несовместим с `astro@4.x`. Нужна версия MDX 2.x.

**Решение:**
```bash
npm install @astrojs/mdx@2.3.1
```
Убедиться что `npm ci` работает локально перед пушем.

---

## 5. @astrojs/sitemap: Cannot read properties of undefined (reading 'reduce')

**Симптом:** Build падает на этапе sitemap генерации.

**Причина:** `@astrojs/sitemap@3.7.0` несовместим с Astro 4.

**Решение:**
```bash
npm install @astrojs/sitemap@3.2.1
```

---

## 6. Изображения не отображаются на GitHub Pages

**Симптом:** Фото в статьях и карточках не загружаются (404).

**Причина:** Пути к изображениям не учитывают base path `/astra/`.

**Решение:** Добавить BASE_URL к путям изображений:
```astro
<img src={`${import.meta.env.BASE_URL}${post.data.image?.replace(/^\//, '')}`} alt={post.data.title} />
```

Для изображений в Markdown (внутри MDX-статей) использовать полные пути от корня:
```markdown
![Alt текст](/images/articles/photo.webp)
```
Astro с `base: '/astra/'` автоматически подставит префикс для Markdown-изображений.

---

## 7. git добавил файл с мусорным именем (Windows path)

**Симптом:** В git попал файл с путём, содержащим Windows-разделители.

**Причина:** Команда `cp` с обратными слешами (`\`) некорректно интерпретировалась в bash на Windows.

**Решение:** Использовать прямые слеши в путях:
```bash
# Плохо:
cp "E:\folder\file" "E:\dest\"

# Хорошо:
cp "E:/folder/file" "E:/dest/"
```

---

## 8. Два workflow конфликтуют — сайт показывает 404

**Симптом:** Workflow-ы проходят success, но сайт показывает 404.

**Причина:** В `.github/workflows/` было два файла:
- `deploy.yml` — правильный (собирает Astro → деплоит в gh-pages)
- `static.yml` — ошибочный (деплоит raw исходники через GitHub Actions artifact)

`static.yml` перезатирал нормальный деплой и мог переключить Pages Source на «GitHub Actions».

**Решение:**
1. Удалить `static.yml`
2. Проверить Settings → Pages → Source: **Deploy from a branch** → **gh-pages / root**

---

## 9. Obsidian создаёт дубликаты файлов — сборка падает

**Симптом:** GitHub Actions (deploy.yml) падает с ошибкой после пуша из Obsidian.

**Причина:** Obsidian при копировании/дублировании файлов может создать:
- `файл 1.md` — копию с пробелом и цифрой в имени
- `файл.md` рядом с `файл.mdx` — два файла с одним slug

Astro не может собрать два файла с одинаковым slug (например `pochemu-ne-khudeyu.md` + `pochemu-ne-khudeyu.mdx`).

**Решение:**
1. В `src/content/blog/` не должно быть двух файлов с одинаковым именем (но разным расширением)
2. Удалить дубликаты
3. Файлы с пробелами в имени тоже удалить (Obsidian создаёт `файл 1.md` при дублировании)

**Профилактика:** Переименовывайте скопированный файл сразу, не оставляйте «файл 1.md».

---

## 10. Картинки внутри .md статей не отображаются (404)

**Симптом:** Обложка статьи видна, а фото внутри текста — нет (404).

**Причина:** Обложку из frontmatter обрабатывает шаблон `[...slug].astro` — он добавляет `/astra/` к пути. А картинки в markdown-тексте Astro НЕ дополняет base path автоматически.

**Решение:**
- Обложка в frontmatter: `image: "/images/covers/photo.webp"` — БЕЗ `/astra/`
- Фото внутри текста: `![Alt](/astra/images/articles/photo.webp)` — С `/astra/`

---

*Последнее обновление: 10.02.2026*
