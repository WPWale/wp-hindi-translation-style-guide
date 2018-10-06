# A Style Guide for translating WordPress into Hindi

An attempt to create a sensible style guide for translating WordPress to Hindi.

## Key Concepts

An awareness of these concepts will help translate better, as will become more obvious in the section on Types of Translation

### Structure Words vs Content Words

A sentence is composed of two types of words, those that carry the overall meaning (called content words) and those that make the sentence grammatically complete and well formed (structure words).

Consider the following sentence:

```
Sell my car, as I have gone to Mumbai.
```

If I rewrite the sentence as:

```
Sell car, gone Mumbai
```
The sentence still maintains most of its meaning although it becomes weird. All I did was remove the structure words (my, as, I, have, to).

 1. **Structure words** usually, therefore, are *Prepositions*, *Conjunctions*, *Articles*, *Pronouns*, *Auxillary Verbs*, etc.
 1. **Content words** are usually, *Nouns*, *Adjectives*, *Verbs* and *Adverbs*.

This difference is important in translations because structure words can change and rearrange freely without any loss in meaning. Content words need to be translated carefully considering words that are spelled the same but have a different meaning.

This means that you don't have to translate structure words *exactly* but content words usually need an exact translation.

**todo** add an example string from WordPress

### Idioms, Phrases & Cultural References

These are groups of words that carry a meaning different from the literal meaning of those words. They are often unique to a language or culture.

For a simple example, when something `is good to go` it doesn't mean that it is `जाने के लिए अच्छा है` as [Google translate suggests](https://translate.google.com/#auto/hi/is%20good%20to%20go). As a phrase it means something is ready or `तैयार है`.

There are many such examples that just can't be translated literally. Proverbs also fall in this category. 

## Types of Translations

Technically, **eight** different types of translations are identified. I have divided them into three groups:

### For analysis & understanding of source language

 1. *Word-for-Word Translation*: In this, the order of words of the source language is maintained and the words translated one by one by their most common meanings, out of context. Cultural words are translated literally. The main use of word-for-word translation is either to understand the mechanics of the source language or to break a difficult text down for understanding. 
 2. *Literal Translation*: The source language grammatical constructions (made of structure words) are converted to their nearest target language equivalents but content words are again singly, out of context.
 
## For creative reproduction & detailed explanation

 3. *Faithful Translation*: This translation attempts to be faithful to the precise contextual meaning of the original text within the constraints of the target language grammatical structures. It 'transfers' cultural words and preserves any degree of deviation in grammar and meaning from the source language norms. It attempts to be completely faithful to the intentions and the text realization of the source language writer. 
 4. *Semantic Translation*: Compared to 'faithful translation', semantic translation gives more importance to the beauty (aesthetic value) of the source language text. In doing so, it often compromises on the 'meaning' when needed so that the finished version retains its aesthetics. Less important cultural words are often replaced by culturally neutral third or functional terms but not by cultural equivalents. The distinction between 'faithful' and 'semantic' translation is that the first is uncompromising and dogmatic, while the second is more flexible. It prefers creativity over 100% fidelity and allows for the translator's intuitive empathy with the original. 
 5. *Adaptation*: This is the 'freest' form of translation. It is used mainly for plays, poetry and creative works. The themes, characters and plots are usually preserved, the source language culture is converted to the target language culture and the text is rewritten. 
 6. *Free Translation*: Free translation is usually longer and lengthier than the original text and usually is more of a paraphrase and an explanation than a translation. It's more about conveying the matter (content) than the style.

## For better understanding of readers

 7. *Idiomatic Translation*: Idiomatic translation reproduces the 'message' of the original but tends to change the finer  meaning by using phrases and idioms where these do not exist in the original.
 8. *Communicative Translation*: Communicative translation tries to preserve the exact contextual meaning of the original in such a way that both content and language are readily acceptable and comprehensible to the reader.

From the above, it is pretty obvious that the first category is what services like Google translate do. They are useful to understand the meaning of the text in source language but aren't useful as translations, at all.

The second category is more for creative and academic pursuits and not suitable for translating strings in a software.

The third category is more appropriate for translating a software so that it can be understood and used by the reader (user) comfortably. Of these, Idiomatic translation is more appropriate for marketing copies and lengthier texts usually pertaining to copywriting.

The most suitable & appropriate type of translation is communicative, where the focus is on conveying the exact meaning and context, rather than sticking to the original text's form and words.

With this understanding, the following basic principles will start making sense.

## Basic Principles

Even before devising a full style guide, the author feels that if translators follow a few basic principles, they won't need to refer a formal guide. A guide would, in fact, become a barrier in productivity if you had to look it up again and again. Keeping this in mind, think of this as a TLDR; version of the whole guide.

### 1. Human, not Machine

Machine translations like that performed by Google translate are a great tool for translators to understand the original string and to find synonyms that can be used instead. Copy-pasting their output is lazy and such contribution is first of all, useless and then a waste of time for translators, editors and users alike. Why spend your time doing something that could have been done with an API?

### 2. Communicative, not Literal

Translating does not meaning taking a sentence and replacing it word by word with its Hindi equivalent. Instead, think of what meaning the sentence is trying to convey to a user, in the given context and what is the user expected to do as a result of reading the text. It doesn't matter if the sentence is completely different from the original as long as it conveys the context, meaning and intentions.

### 3. Functionality, not Linguistic Pride

Yes, Hindi is a great language with a great history and it is absolutely okay to be proud of your lingusitic heritage and tradition. 

However, a software is built for a purpose and anything that interferes with its functionality and usage is going to be counter-productive. Just because the translation of a word exists in Hindi doesn't mean we must use it. Translating `keyboard` to `कुंजि-पटल` is probably a greater disservice to Hindi because it'll confuse users and prevent them from using WordPress in Hindi. Think about what is more important – creating a version of WordPress that is un-understandable and useless for people looking to use it or creating a non-dogmatic version that's easier to use and adopt which will lead to the publishing and availability of tonnes of content in Hindi? What will help the cause of Hindi more?