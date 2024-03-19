---
title: Images
permalink: /images/
layout: layouts/layout.njk
---

## Insertion d'une image

### 📄Code

Les images s'intègrent à une page de cette manière :

```md
![Logo Markdown](/images/markdown.svg) Logo Markdown noir
```

### ➡️Résultat

![Logo Markdown](/images/markdown.svg) Logo Markdown noir

## Redimensionnement d'une image

Le langage Markdown ne propose pas de réglage pour redimensionner une image.\
Mais comme Markdown est un sur-ensemble de HTML, pour pouvez vous rabattre sur le langage HTML.

### 📄Code

Une image s'intègre comme ci en HTML :

```html
<img src="/images/markdown.svg" width="200" alt="Logo Markdown" />
```

### ➡️Résultat

{# include "html/images.html" #}

> **Note**\
> Certains dialectes Markdown comme celui d'Obsidian permettent un redimensionnement d'image.\
> La syntaxe est de cette forme :
>
> ```md
> ![Logo Markdown](/images/markdown.svg|200)
> ```
