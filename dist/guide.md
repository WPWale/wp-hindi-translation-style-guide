# Style Guide for Translating WordPress to Hindi

<!-- toc -->

- [1 General Guidelines](#1-general-guidelines)
  * [1.1 Human, not Machine](#11-human-not-machine)
  * [1.2 Communicative, not Literal](#12-communicative-not-literal)
  * [1.3 Functionality, not Linguistic Pride](#13-functionality-not-linguistic-pride)
- [Special Diacritics](#special-diacritics)
  * [Anusvar (ं) & Chandrabindu (ँ)](#anusvar-%E0%A4%82--chandrabindu-%E0%A4%81)
    + [Anusvar](#anusvar)
    + [Anunasik/ Chandrabindu](#anunasik-chandrabindu)
    + [Practical Usage](#practical-usage)
  * [Vrtmukhi (ॅ, ॉ)](#vrtmukhi-%E0%A5%85-%E0%A5%89)
  * [Nukta (़)](#nukta-%E0%A4%BC)
    + [`ʒ` sound and श़](#%CA%92-sound-and-%E0%A4%B6%E0%A4%BC)
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

## 1 General Guidelines

More detailed & general guidelines for translators of all languages are in the official WordPress [Translator's Handbook](https://make.wordpress.org/polyglots/handbook/). It is recommended to read the handbook before reading this guide. It contains a lot of technicalities and tools. This guide contains things specific to Hindi translation.

> Note: A basic understanding of [types of translation](https://github.com/WPWale/wp-hindi-translation-style-guide/blob/draft/docs/types-translation.md) is needed to understand these.

Even before devising a full style guide, the author feels that if translators follow a few basic principles, they won't need to refer a formal guide. A guide would, in fact, become a barrier in productivity if you had to look it up again and again. Keeping this in mind, think of this as a TLDR; version of the whole guide.

### 1.1 Human, not Machine

Machines like Google translate provide [Word-for-Word](https://github.com/WPWale/wp-hindi-translation-style-guide/blob/master/docs/types-translation.md#1-word-for-word-translation) and/or [Literal](https://github.com/WPWale/wp-hindi-translation-style-guide/blob/master/docs/types-translation.md#2-literal-translation) translations. Such translations can be really useful for translators to analyse and understand the original string. They can also be used to find synonyms for difficult word.

Beyond that, simply copy-pasting their output is lazy, useless and a waste of time for translators, editors and users alike. Why spend your time doing something that could have been done with an API?

### 1.2 Communicative, not Literal

Translating does not meaning taking a sentence and replacing it word by word with its Hindi equivalent. Instead, think of what meaning the sentence is trying to convey to a user, in the given context and what is the user expected to do as a result of reading the text. It doesn't matter if the text is completely different from the original as long as it conveys the context, meaning and intentions.

### 1.3 Functionality, not Linguistic Pride

Yes, Hindi is a great language with a great history and it is absolutely okay to be proud of your linguistic heritage and tradition. 

However, a software is built for a purpose and anything that interferes with its functionality and usage is going to be counter-productive. Just because the translation of a word exists in Hindi doesn't mean we must use it. Translating `keyboard` to `कुंजि-पटल` is probably a greater disservice to Hindi because it'll confuse users and prevent them from using WordPress in Hindi. What are you more likely to say at a computer hardware store? *"एक कुंजि-पटल और मूषक-यंत्र देना।"* or *"एक कीबोर्ड और माउस देना।"*?

What works in an [academic or creative context](https://github.com/WPWale/wp-hindi-translation-style-guide/blob/master/docs/types-translation.md#for-creative-reproduction--detailed-explanation) would probably not work for a software that is expected to be used by people of all kinds of educational, social and cultural backgrounds. Always think of what is more likely to be used in a day-to-day conversational setting than what should go in a formal textbook or official circular/notice. 

Think about what is more important – creating a version of WordPress that is un-understandable and useless for the general population or creating a non-dogmatic version that's easier to use and adopt which will lead to the publishing and availability of tonnes of content in Hindi! What do you think will help the cause of Hindi more?
## Special Diacritics

### Anusvar (ं) & Chandrabindu (ँ) 

#### Anusvar 

#### Anunasik/ Chandrabindu 

#### Practical Usage 

### Vrtmukhi (ॅ, ॉ)

This superscript semi-circle ihas become a very common diactritic to better represent the `e` (*tax*onomy) and `ɔː` (*doc*tor) sounds in English. These vowel sounds originally didn't exist in Hindi and the closest approximation can create confusion and mispronunciation.

| Source | Target (Wrong) | Target (Correct) |
| ------ | -------------- | ---------------- |
| Docker | डौकर/डाकर | डॉकर |
| Stack | स्टैक | स्टॅक |

For technical terms where the correct pronunciation of the word is important for communication, please use ॅ instead of े/ै and ॉ instead of ो/ौ.

### Nukta (़)

This is also used to accurately transcribe the soft `f` sound from English and the soft `z` found in English and Arabic/Persian in loan words.

| Source | Target (Wrong) | Target (Correct) |
| ------ | -------------- | ---------------- |
| Feed (as in RSS) | फीड | फ़ीड |
| Valid | जायज | जायज़ |
| File | फाइल | फ़ाइल |
| Document | दस्तावेज | दस्तावेज़ |

Again important to use the nukta correctly when transcribing technical terms and loan words. Without it, apart from the pronunciation, the spelling of a lot of words is considered incorrect.

#### `ʒ` sound and श़

`ʒ` (~ zh) is a sound that doesn't exist in Hindi. Phonetically it's a voiced version of a `ʃ` (sh) sound and that's why some authorities like [Wikipedia](https://hi.wikipedia.org/wiki/%E0%A4%B8%E0%A4%A6%E0%A4%B8%E0%A5%8D%E0%A4%AF_%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%BE:BernardM) use `श़` to represent this sound.

| Source | Target (Wrong) | Target (Correct) |
| ------ | -------------- | ---------------- |
| Treasure | ट्रेजर/ट्रेज़र | ट्रेश़र |
| Version | वर्जन/वर्शन/वर्ज़न | वर्श़न |

Please follow this convention for transcribing such words.
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
| American | अमेरीकन | अमरीकी |
| Egypt | इजिप्ट | मिश्र |
| Indian | इंडियन | भारतीय |
| Italian | इटॅलियन | इतालवी |
| Chinese | चाइनीज़ | चीनी |
| South Korean | साउथ कोरियन | दक्षिण कोरियाई |


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
