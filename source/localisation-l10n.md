## 4. Localisation (l10n)

### 4.1. Date and Time

> Most auto-generated dates are taken care of by localisation mechanisms built into WordPress. This is only for specific dates mentioned in text, for instance, in announcements.

Dates in Hindi are expressed the same way using the same [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar) as the rest of the world. Only when translating from American English, dates should be converted to `dd/mm` (or equivalent) to from `mm/dd` (or equivalent.

For eg, `03/11/2018` in US English is 11th March and not 3rd October. It should be translated to `11/03/2018`.

Time is expressed the same universally.

>Also see the section on [Numerals](#numerals) 

### 4.2. Currency

> Most auto-generated pricing is taken care of in code. This is only in case it appears as it is in strings.

Any `$` sign in original text must be replaced by `₹` in translations. An exception to this rule is when the text contains the price of something (eg, $100) in which case it can be misleading to simply replace the currency symbol.

In special cases, based on discussions with the author/owner of the original text, you could convert the value as well. However, as a general guideline, keep the price as it is.