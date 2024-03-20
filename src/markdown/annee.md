---
title: Mois de l'année
permalink: /annee/{{pagination.items[0] | slugify}}/
layout: layouts/layout.njk
pagination:
  data: monthList
  size: 1
---

<div class="flex flex-row  bg-slate-600 py-2 content-center"> 
    <div class="basis-1/8">
        <a href="{{pagination.href.previous}}">
            <img class="icon-filter h-8" src="/images/angle-gauche.svg" alt="" />
        </a>
    </div>
    <div class="grow text-center">
        <p class="text-2xl">{{pagination.items[0]}}</p>
    </div>
    <div class="basis-1/8">
        <a href="{{pagination.href.next}} ">
            <img class="icon-filter h-8" src="/images/angle-droit.svg" alt="" />
        </a>
    </div>
</div>
