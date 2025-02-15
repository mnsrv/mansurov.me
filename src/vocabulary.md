---
title: Vocabulary
subtitle: new words for me
eleventyNavigation:
  key: vocabulary
  title: vocabulary
  order: 6
layout: "base.liquid"
---

{% for word in vocabulary %}

<p class="word-item">{{ word[0] }}<span class="word-translation"> – {{ word[1] }}</span></p>

{% endfor %}

<style>
    .word-item:hover .word-translation {
        opacity: 1;
    }

    .word-translation {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
</style>