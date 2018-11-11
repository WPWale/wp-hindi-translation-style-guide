# Style Guide for Translating WordPress to Hindi

<!-- toc -->

- [1. General Guidelines](#1-general-guidelines)
  * [1.1. Human, not Machine](#11-human-not-machine)
  * [1.2. Communicative, not Literal](#12-communicative-not-literal)
  * [1.3. Functionality, not Linguistic Pride](#13-functionality-not-linguistic-pride)
- [2. Spellings](#2-spellings)
  * [2.1. Anusvaara (ं) vs Anunaasik/ Chandrabindu (ँ)](#21-anusvaara-%E0%A4%82-vs-anunaasik-chandrabindu-%E0%A4%81)
  * [2.2. Vrtmukhi (ॅ, ॉ)](#22-vrtmukhi-%E0%A5%85-%E0%A5%89)
  * [2.3. Nukta (़)](#23-nukta-%E0%A4%BC)
    + [2.3.1. `ʒ` sound and श़](#231-%CA%92-sound-and-%E0%A4%B6%E0%A4%BC)
  * [2.4. Semi-vowels (Glidals)](#24-semi-vowels-glidals)
    + [2.4.1. -ई vs -यी](#241--%E0%A4%88-vs--%E0%A4%AF%E0%A5%80)
    + [2.4.2. -ए vs -ये](#242--%E0%A4%8F-vs--%E0%A4%AF%E0%A5%87)
    + [2.4.3. -यें vs -एँ](#243--%E0%A4%AF%E0%A5%87%E0%A4%82-vs--%E0%A4%8F%E0%A4%81)
    + [2.4.4. A simple trick for vowel vs य](#244-a-simple-trick-for-vowel-vs-%E0%A4%AF)
  * [2.5. -ह्न vs -न्ह](#25--%E0%A4%B9%E0%A5%8D%E0%A4%A8-vs--%E0%A4%A8%E0%A5%8D%E0%A4%B9)
- [3. Punctuations](#3-punctuations)
  * [3.1. Full-Stop](#31-full-stop)
  * [3.2. Capitalisation & UPPERCASE](#32-capitalisation--uppercase)
  * [3.3. Colon (:)](#33-colon-)
- [4. Conventions](#4-conventions)
  * [4.1. Abbreviations](#41-abbreviations)
  * [4.2. Acronymns](#42-acronymns)
  * [4.3. Gender](#43-gender)
  * [4.4. Names](#44-names)
    + [4.4.1 People](#441-people)
    + [4.4.2 Brand Names](#442-brand-names)
    + [4.4.3 Keyboard Keys](#443-keyboard-keys)
    + [4.4.4 Others](#444-others)
  * [4.5. Legal Texts & Licenses](#45-legal-texts--licenses)
- [5. Localisation (l10n)](#5-localisation-l10n)
  * [5.1. Date and Time](#51-date-and-time)
  * [5.2. Currency](#52-currency)
- [6. Numerals](#6-numerals)
  * [6.1. Numbering System](#61-numbering-system)
- [7. Units and Measurements](#7-units-and-measurements)
  * [7.1 Volume, Weight, Length](#71-volume-weight-length)
  * [7.2 Power, Temperature, Electricity](#72-power-temperature-electricity)
  * [7.3 Time Units](#73-time-units)
  * [7.4 Information Units](#74-information-units)

<!-- tocstop -->

## 1. General Guidelines

More detailed & general guidelines for translators of all languages are in the official WordPress [Translator's Handbook](https://make.wordpress.org/polyglots/handbook/). It is recommended to read the handbook before reading this guide. It contains a lot of technicalities and tools. This guide contains things specific to Hindi translation.

> Note: A basic understanding of [types of translation](https://github.com/WPWale/wp-hindi-translation-style-guide/blob/draft/docs/types-translation.md) is needed to understand these.

Even before devising a full style guide, the author feels that if translators follow a few basic principles, they won't need to refer a formal guide. A guide would, in fact, become a barrier in productivity if you had to look it up again and again. Keeping this in mind, think of this as a TLDR; version of the whole guide.

### 1.1. Human, not Machine

Machines like Google translate provide [Word-for-Word](https://github.com/WPWale/wp-hindi-translation-style-guide/blob/master/docs/types-translation.md#1-word-for-word-translation) and/or [Literal](https://github.com/WPWale/wp-hindi-translation-style-guide/blob/master/docs/types-translation.md#2-literal-translation) translations. Such translations can be really useful for translators to analyse and understand the original string. They can also be used to find synonyms for difficult word.

Beyond that, simply copy-pasting their output is lazy, useless and a waste of time for translators, editors and users alike. Why spend your time doing something that could have been done with an API?

### 1.2. Communicative, not Literal

Translating does not meaning taking a sentence and replacing it word by word with its Hindi equivalent. Instead, think of what meaning the sentence is trying to convey to a user, in the given context and what is the user expected to do as a result of reading the text. It doesn't matter if the text is completely different from the original as long as it conveys the context, meaning and intentions.

### 1.3. Functionality, not Linguistic Pride

Yes, Hindi is a great language with a great history and it is absolutely okay to be proud of your linguistic heritage and tradition. 

However, a software is built for a purpose and anything that interferes with its functionality and usage is going to be counter-productive. Just because the translation of a word exists in Hindi doesn't mean we must use it. Translating `keyboard` to `कुंजि-पटल` is probably a greater disservice to Hindi because it'll confuse users and prevent them from using WordPress in Hindi. What are you more likely to say at a computer hardware store? *"एक कुंजि-पटल और मूषक-यंत्र देना।"* or *"एक कीबोर्ड और माउस देना।"*?

What works in an [academic or creative context](https://github.com/WPWale/wp-hindi-translation-style-guide/blob/master/docs/types-translation.md#for-creative-reproduction--detailed-explanation) would probably not work for a software that is expected to be used by people of all kinds of educational, social and cultural backgrounds. Always think of what is more likely to be used in a day-to-day conversational setting than what should go in a formal textbook or official circular/notice. 

Think about what is more important – creating a version of WordPress that is un-understandable and useless for the general population or creating a non-dogmatic version that's easier to use and adopt which will lead to the publishing and availability of tonnes of content in Hindi! What do you think will help the cause of Hindi more?
## 2. Spellings

### 2.1. Anusvaara (ं) vs Anunaasik/ Chandrabindu (ँ)

Anusvaara is for representing nasal conosonants (ङ्, ञ्, ण्, न्, म्). The actual value of the Anusvaara depends on the consonant that follows it. Although there isn't much practical difference nowadays between the first four nasal constants (ङ, ञ, ण, न) and they are written and spoken pretty similarly as a न. The म is pronounced differently but written the same way:

| Without Anusvaara | With Anusvaara (Preferred) |
| ---------------- | ------------- |
| गङ्गा | गंगा |
| चञ्चल | चंचल |
| पण्डित | पंडित |
| सन्त | संत |
| पम्प | पंप |

For translations, always use the anusvaar for consistency and to avoid spelling mistakes when using the consonants (पन्डित instead of पण्डित).

Unlike Anusvaara which represenets consonants, Anunaasika (or Chandrabindu) represents nasalisation of a vowel or semi-vowel sound. Probably, the only pair where this distinction can cause confusion is:

| Anusvaara | Anunaasika |
| --------- | ---------- |
| हंस (=Swan) | हँस (=Laugh) |

So, these are two distinct things and should not be confused with each other. However, when a matra and an Anunaasika are together, it could be diffcult to print and read:

| Anusvaara | Anunaasika |
| --------- | ---------- |
| ऐंठना | ऐँठना | 

That's why in practical usage, an Anusvaara is often used in place of a Chandrabindu. In my opinion, things could just be simplified by not using the Chandrabindu at all for consistency and to avoid confusion and spelling mistakes. The Central Hindi Directorate (1989:14) also recommends this and a lot of publishing houses have done away with the Chandrabindu in the same spirit.


### 2.2. Vrtmukhi (ॅ, ॉ)

This superscript semi-circle ihas become a very common diactritic to better represent the `e` (*tax*onomy) and `ɔː` (*doc*tor) sounds in English. These vowel sounds originally didn't exist in Hindi and the closest approximation can create confusion and mispronunciation.

| Source | Target (Wrong) | Target (Correct) |
| ------ | -------------- | ---------------- |
| Docker | डौकर/डाकर | डॉकर |
| Stack | स्टैक | स्टॅक |

For technical terms where the correct pronunciation of the word is important for communication, please use ॅ instead of े/ै and ॉ instead of ो/ौ.

### 2.3. Nukta (़)

This is also used to accurately transcribe the soft `f` sound from English and the soft `z` found in English and Arabic/Persian in loan words.

| Source | Target (Wrong) | Target (Correct) |
| ------ | -------------- | ---------------- |
| Feed (as in RSS) | फीड | फ़ीड |
| Valid | जायज | जायज़ |
| File | फाइल | फ़ाइल |
| Document | दस्तावेज | दस्तावेज़ |

Again important to use the nukta correctly when transcribing technical terms and loan words. Without it, apart from the pronunciation, the spelling of a lot of words is considered incorrect.

#### 2.3.1. `ʒ` sound and श़

`ʒ` (~ zh) is a sound that doesn't exist in Hindi. Phonetically it's a voiced version of a `ʃ` (sh) sound and that's why some authorities like [Wikipedia](https://hi.wikipedia.org/wiki/%E0%A4%B8%E0%A4%A6%E0%A4%B8%E0%A5%8D%E0%A4%AF_%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%BE:BernardM) use `श़` to represent this sound.

| Source | Target (Wrong) | Target (Correct) |
| ------ | -------------- | ---------------- |
| Treasure | ट्रेजर/ट्रेज़र | ट्रेश़र |
| Version | वर्जन/वर्शन/वर्ज़न | वर्श़न |

### 2.4. Semi-vowels (Glidals)

The sounds `j` (ya) and `w` (wa) are considered semi-vowels. When a vowel sound follows इ, a glidal य is produced. That is why a lot of people knowingly or unknowingly mistake the following:

#### 2.4.1. -ई vs -यी

Words that end with 'ई' are usually nouns, not verbs; example - मिठाई , मलाई , सिंचाई , ढिठाई , बुनाई , सिलाई , कढ़ाई , निराई , गुणाई , लुगाई , लगाई-बुझाई। 

That's why in 'तुमने मुझे पिक्चर दिखाई', 'दिखाई' is wrong; it should be 'दिखायी'. Similarly, lot of folks write 'नयी' as 'नई'. The root word is 'नया'of which 'नयी' is a feminine form. 

क्या तुमने क्वेश्चन-पेपर से आंसरशीट मिलायी ? ( 'मिलाई' ग़लत है। )
आज उसने मेरी मम्मी से मिलने की इच्छा जतायी। ( 'जताई' ग़लत है। )
उसने बर्थडे-गिफ़्ट के रूप में नयी साड़ी पायी। ( 'पाई' ग़लत है। ) 

#### 2.4.2. -ए vs -ये 

The same rule applies to this situation and verbs usually end in -ये instead of -ए.

बच्चों ने प्रतियोगिता के दौरान सुन्दर चित्र बनाये। ( 'बनाए' नहीं। )
लोगों ने नेताओं के सामने अपने-अपने दुखड़े गाये। ( 'गाए' नहीं। )
दीवाली के दिन लखनऊ में लोगों ने अपने-अपने घर सजाये। ( 'सजाए' नहीं। )

'-ए' is only used when there's a request, appeal or imploration.

अब आप काम देखिए , मैं चलता हूँ। ( 'देखिये' नहीं। )
आप लोग अपनी-अपनी ज़िम्मेदारी के विषय में सोचिए। ( 'सोचिये' नहीं। )
उमेशजी ! ऐसा विचार मन में न लाइए। ( 'लाइये' ग़लत है। )

#### 2.4.3. -यें vs -एँ
The request rule applies in this case as well. '-एँ' in an imperative statement, 'यें' नहीं। 

आप लोग कृपया यहाँ आएँ। ( 'आयें' नहीं। )
जी बताएँ , मैं आपके लिए क्या करूँ ?( 'बतायें' नहीं। )
मम्मी , आप डैडी को समझाएँ। ( 'समझायें' नहीं। )

#### 2.4.4. A simple trick for vowel vs य

Wherever you have used 'एँ' या 'ए' लगाया है , replace it with 'या'. Does this word make sense? If not, you're writing incorrectly!

For example, some people write 'शुभकामनायें'। Using our technique, we make 'शुभकामनाया' which doesn't exist. Hence 'शुभकामनायें' is incorrect.

Similarly, 'देखिये' , 'बोलिये' , 'सोचिये' are incorrect because there are no 'देखिया' , 'बोलिया' , 'सोचिया'.

### 2.5. -ह्न vs -न्ह 

When a nasalisation (usually न, but sometimes म) comes after a ह्, a lot of people pronounce and therefore write the words incorrectly. 

| Source | Target (Wrong) | Target (Correct) |
| ------ | -------------- | ---------------- |
| Sign | चिन्ह | चिह्न |
| God | ब्रम्ह | ब्रह्म |
## 3. Punctuations

The predecessor mother language of Hindi, Sanskrit has no punctuation except `।` (full-stop/end of sentence, पूर्ण-विराम) and `।।` (end of paragraph, दीर्घ-विराम). That's because Sanskrit has unique properties because of which it just [doesn't need punctuation](https://uttishthabharata.wordpress.com/2011/08/27/sanskrit-punctuation/). So, the punctuation used in Hindi is the same as English, except for a few cases described below.

### 3.1. Full-Stop

The `।` (khadi pai/ danda) is used instead of a full-stop. Usage of the full-stop itself is acceptable generally but it is recomended that this rule remains consistent throught the body of work. In WordPress, we use `।` everywhere.

### 3.2. Capitalisation & UPPERCASE

The Devnagari script doesn't have the concept of lower and upper cases. In English, cases are used to highlight letters and heavily emphasise words (to indicate loudness/ shouting). (WordPress is an example!)

The general recommendation is to increase the font-size for uppercase text (to indicate shouting) and ignore capitalisation. Since translators don't have access to font-size, it is recommended to use inverted commas for fully uppercase words. Capitalisations can be ignored safely. So WordPress becomes वर्डप्रेस with no highlights.

### 3.3. Colon (:)

A colon (`:`) is used before a list or an explanation that follows. Since there is a character Visarga
(`:`) in Hindi similar to colon, to avoid confusion we use long dash (`–`) instead of the English colon.

## 4. Conventions

### 4.1. Abbreviations

### 4.2. Acronymns

### 4.3. Gender

### 4.4. Names

#### 4.4.1 People

Names of people should be simply transliterated instead of translated, even if an apparent equivalent name exists in general culture.

| Source | Target (Wrong) | Target (Correct) |
| ------ | -------------- | ---------------- |
| Uthman | उस्मान | उथमान | 
| Mary | मेरी | मॅरी |
| Socrates | सुकरात | सॉक्रेटेस |
| Johny | जानी | जॉनी |

#### 4.4.2 Brand Names

#### 4.4.3 Keyboard Keys

#### 4.4.4 Others

Cultural names like names of places, religions, cultures, languages, etc often have a Hindi version. When available use them instead of simply transliterating: 

| Source | Target (Wrong) | Target (Correct) |
| ------ | -------------- | ---------------- |
| American | अमेरीकन | अमरीकी |
| Egypt | इजिप्ट | मिस्र |
| Indian | इंडियन | भारतीय |
| Italian | इटॅलियन | इतालवी |
| Chinese | चाइनीज़ | चीनी |
| South Korean | साउथ कोरियन | दक्षिण कोरियाई |

### 4.5. Legal Texts & Licenses

There is some sort of license and other legal statements distributed with software. WordPress contains a `license.txt` in its root folder. The wording of such texts is chosen very carefully and is binding in a court of law. Which is why such texts shouldn't be replaced by a translation, however good it may be. So, [don't translate](https://make.wordpress.org/polyglots/handbook/translating/working-with-core/#do-not-translate) legal texts and licenses.

## 5. Localisation (l10n)

### 5.1. Date and Time

> Most auto-generated dates are taken care of by localisation mechanisms built into WordPress. This is only for specific dates mentioned in text, for instance, in announcements.

Dates in Hindi are expressed the same way using the same [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar) as the rest of the world. Only when translating from American English, dates should be converted to `dd/mm` (or equivalent) to from `mm/dd` (or equivalent.

For eg, `03/11/2018` in US English is 11th March and not 3rd October. It should be translated to `11/03/2018`.

Time is expressed the same universally.

>Also see the section on [Numerals](#numerals) 

### 5.2. Currency

> Most auto-generated pricing is taken care of in code. This is only in case it appears as it is in strings.

Any `$` sign in original text must be replaced by `₹` in translations. An exception to this rule is when the text contains the price of something (eg, $100) in which case it can be misleading to simply replace the currency symbol.

In special cases, based on discussions with the author/owner of the original text, you could convert the value as well. However, as a general guideline, keep the price as it is.
## 6. Numerals

International numerals are derived from Indian numerals via Arabic numerals and the decimal system also comes from India so we don't have any deviation.

Although Devnagari numerals(०,१,२,३,४,५,६,७,८,९) exist, they are hardly used except in strict formal texts and most native Hindi speakers wouldn't recognise some of those numbers (4 onwards). Also, the numbers are written differently in different parts by different people. Commonly, for all practical purposes, international numerals are used instead.

So, we stick to that for translations and only use international numerals (0,1,2,3,4,5,6,7,8,9).


### 6.1. Numbering System

The [Indian numbering system](https://en.wikipedia.org/wiki/Indian_numbering_system) is different from the Western numbering system for expressing numbers larger than ten thousands. Lakhs (लाख) & crores (करोड़) are used in place of millions and billions. Although, there are words for numbers larger than a crore (arabs and kharabs), generally such numbers are expressed in crores.


| Western numbering system | Indian numbering system |
| :----------------------: | :---------------------: |
| 10,000 (Ten thousand)    | 10,000 (दस हज़ार)        |
| 100,000 (Hundred thousand) | 1,00,000 (एक लाख)    |
| 1,000,000 (One million)  | 10,00,000 (दस लाख)     |
| 10,000,000 (Ten million)  | 1,00,00,000 (एक करोड़) |
| 1,000,000,000 (One billion)| 1,00,00,00,000 (सौ करोड़, ~~एक अरब~~)|
| 100,000,000,000 (Hundred billion)| 1,00,00,00,00,000 (दस हज़ार करोड़, ~~एक खरब~~)|

## 7. Units and Measurements

The [metric system](https://en.wikipedia.org/wiki/Metric_system) is used officially and unofficially in India in all languages. Except for measuring body temperature (where we use Fahrenheit), generally temperature in India is measured in Celsius. So for Hindi translation, it should be changed in Celsius if in source language, it is in different units.

### 7.1 Volume, Weight, Length

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

### 7.2 Power, Temperature, Electricity

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

### 7.3 Time Units

| English | Hindi | Hindi (Abbreviated) |
| ------- | ----- | ------------------- |
| Hour | घंटा | Abbreviation Not Available |
| Minute | मिनट | मि. |
| Second | सेकंड | से. |

### 7.4 Information Units

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
