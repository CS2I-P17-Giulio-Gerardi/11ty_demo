---
title: Pvgis
permalink: /pvgis/
layout: layouts/layout.njk
---

| Month | Value |
| ----- | ----- |

{% for value in pvgis.outputs.monthly %}
| {{value.month}}/{{value.year}} | {{value['H(h)_m']}} |
{% endfor %}
