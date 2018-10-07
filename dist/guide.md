# Style Guide for Translating WordPress to Hindi

<!-- toc -->

- [General Guidelines](#general-guidelines)
  * [1. Human, not Machine](#1-human-not-machine)
  * [2. Communicative, not Literal](#2-communicative-not-literal)
  * [3. Functionality, not Linguistic Pride](#3-functionality-not-linguistic-pride)
- [Terminology](#terminology)
- [Punctuations and Text Conventions](#punctuations-and-text-conventions)
- [Localisation (l10n)](#localisation-l10n)
  * [Date and Time](#date-and-time)
  * [Currency](#currency)
  * [Proper Nouns](#proper-nouns)
- [Numerals](#numerals)
  * [Numbering System](#numbering-system)
- [Units and Measurements](#units-and-measurements)
  * [Volume, Weight, Length](#volume-weight-length)
  * [Power, Temperature, Electricity](#power-temperature-electricity)
  * [Time Units](#time-units)
  * [Information Units](#information-units)
- [General Spelling Guidelines](#general-spelling-guidelines)
- [Basic Quality Parameters](#basic-quality-parameters)

<!-- tocstop -->

## General Guidelines

> Note: A basic understanding of [types of translation](https://github.com/WPWale/wp-hindi-translation-style-guide/blob/draft/docs/types-translation.md) is needed to understand these.

Even before devising a full style guide, the author feels that if translators follow a few basic principles, they won't need to refer a formal guide. A guide would, in fact, become a barrier in productivity if you had to look it up again and again. Keeping this in mind, think of this as a TLDR; version of the whole guide.

### 1. Human, not Machine

Machine translations like that performed by Google translate are a great tool for translators to understand the original string and to find synonyms that can be used instead. Copy-pasting their output is lazy and such contribution is first of all, useless and then a waste of time for translators, editors and users alike. Why spend your time doing something that could have been done with an API?

### 2. Communicative, not Literal

Translating does not meaning taking a sentence and replacing it word by word with its Hindi equivalent. Instead, think of what meaning the sentence is trying to convey to a user, in the given context and what is the user expected to do as a result of reading the text. It doesn't matter if the sentence is completely different from the original as long as it conveys the context, meaning and intentions.

### 3. Functionality, not Linguistic Pride

Yes, Hindi is a great language with a great history and it is absolutely okay to be proud of your lingusitic heritage and tradition. 

However, a software is built for a purpose and anything that interferes with its functionality and usage is going to be counter-productive. Just because the translation of a word exists in Hindi doesn't mean we must use it. Translating `keyboard` to `कुंजि-पटल` is probably a greater disservice to Hindi because it'll confuse users and prevent them from using WordPress in Hindi. Think about what is more important – creating a version of WordPress that is un-understandable and useless for people looking to use it or creating a non-dogmatic version that's easier to use and adopt which will lead to the publishing and availability of tonnes of content in Hindi? What will help the cause of Hindi more?
## Terminology

## Punctuations and Text Conventions

## Localisation (l10n)

### Date and Time

> Most auto-generated dates are taken care of by localisation mechanisms built into WordPress. This is only for specific dates mentioned in text, for instance, in announcements.

Dates in Hindi are expressed the same way using the same [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar) as the rest of the world. Only when translating from American English, dates should be converted to `dd/mm` (or equivalent) to from `mm/dd` (or equivalent.

For eg, `03/11/2018` in US English is 11th March and not 3rd October. It should be translated to `11/03/2018`.

Time is expressed the same universally.

>Also see the section on [Numerals](#numerals) 

### Currency

> Most auto-generated pricing is taken care of in code. This is only in case it appears as it is in strings.

Any `$` sign in original text must be replaced by `₹` in translations. An exception to this rule is when the text contains the price of something (eg, $100) in which case it can be misleading to simply replace the currency symbol.

In special cases, based on discussions with the author/owner of the original text, you could convert the value as well. However, as a general guideline, keep the price as it is.

### Proper Nouns

Names of people should be simply transliterated instead of translated, even if an apparent equivalent name exists in general culture.

| Source | Target (Wrong) | Target (Correct) |
| ------ | -------------- | ---------------- |
| Uthman | उस्मान | उथमान | 
| Mary | मेरी | मॅरी |
| Socrates | सुकरात | सॉक्रेटेस |
| Johny | जानी | जॉनी |

Cultural names like names of places, religions, cultures, languages, etc often have a Hindi version. When available use them instead of simply transliterating: 

| Source | Target (Wrong) | Target (Correct) |
| ------ | -------------- | ---------------- |
| Jewish | जिवीश | यहूदी |
| Egypt | इजिप्ट | मिश्र |
| Indian | इंडियन | भारतीय |
| Italian | इटॅलियन | इतालवी |


## Numerals

International numerals are derived from Indian numerals via Arabic numerals and the decimal system also comes from India so we don't have any deviation.

Although Devnagari numerals(०,१,२,३,४,५,६,७,८,९) exist, they are hardly used except in strict formal texts and most native Hindi speakers wouldn't recognise some of those numbers (4 onwards). Also, the numbers are written differently in different parts by different people. Commonly, for all practical purposes, international numerals are used instead.

So, we stick to that for translations and only use international numerals (0,1,2,3,4,5,6,7,8,9).


### Numbering System

The [Indian numbering system](https://en.wikipedia.org/wiki/Indian_numbering_system) is different from the Western numbering system for expressing numbers larger than ten thousands. Lakhs (लाख) & crores (करोड़) are used in place of millions and billions. Although, there are words for numbers larger than a crore (arabs and kharabs), generally such numbers are expressed in crores.


| Western numbering system | Indian numbering system |
| :----------------------: | :---------------------: |
| 10,000 (Ten thousand)    | 10,000 (दस हज़ार)        |
| 100,000 (Hundred thousand) | 1,00,000 (एक लाख)    |
| 1,000,000 (One million)  | 10,00,000 (दस लाख)     |
| 10,000,000 (Ten million)  | 1,00,00,000 (एक करोड़) |
| 1,000,000,000 (One billion)| 1,00,00,00,000 (सौ करोड़, ~~एक अरब~~)|
| 100,000,000,000 (Hundred billion)| 1,00,00,00,00,000 (दस हज़ार करोड़, ~~एक खरब~~)|


## Units and Measurements

The [metric system](https://en.wikipedia.org/wiki/Metric_system) is used officially and unofficially in India in all languages. Except for measuring body temperature (where we use Fahrenheit), generally temperature in India is measured in Celsius. So for Hindi translation, it should be changed in Celsius if in source language, it is in different units.

### Volume, Weight, Length

| English | Hindi | Hindi (Abbreviated) |
| ------- | ----- | ------------------- |
| Meter | मीटर | मी. |
| Kilometer | किलोमीटर | कि.मी. |
| Gram | ग्राम | ग्रा. |
| Kilogram | किलोग्राम | कि.ग्रा./किलो |
| Liter | लिटर | लि. |
| Milliliter | मिलीलिटर | मि.ली. |
| Centimeter | सेंटीमीटर | से.मी. |
| Millimeter | मिलीमीटर | मि.मी. |

### Power, Temperature, Electricity

Unlike, the units of weight, volume & measurement, the abbreviations from English are used directly instead of transliteration or translation.

| English | Hindi | Hindi (Abbreviated) |
| ------- | ----- | ------------------- |
| Watt | वाट | W |
| Volt | वोल्ट | V |
| Joule | जूल | J |
| Hertz | हर्ट्ज़ | Hz |
| Kilohertz | किलोहर्ट्ज़ | Khz |
| Celsius | सेल्सियस | °С |
| Fahrenheit | फ़ॅरेनहाइट | °F |

### Time Units

| English | Hindi | Hindi (Abbreviated) |
| ------- | ----- | ------------------- |
| Hour | घंटा | Abbreviation Not Available |
| Minute | मिनट | मि. |
| Second | सेकंड | से. |

### Information Units

Information units are used in the same way as they're used internationally but are transliterated. No points are used in the abbreviation because they have become common words in general usage and in popular media.

| English | Hindi | Hindi (Abbreviated) |
| ------- | ----- | ------------------- |
| Kilobyte | किलोबाइट | केबी |
| Megabyte | मेगाबाइट | एमबी |
| Gigabyte | गिगाबाइट | जीबी |
| Terabyte | टेराबाइट | टीबी |
| bit | बिट | बिट |
| Kilobytes per second | किलोबाइट प्रति सेकंड | केबीपीएस |
| Megabytes per second | मेगाबाइट प्रति सेकंड | एमबीपीएस |




## General Spelling Guidelines

## Basic Quality Parameters
