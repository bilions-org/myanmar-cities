- `let myanmarCity = require('@bilions/myanmar-cities')`
- `import myanmarCity from '@bilions/myanmar-cities'`

- `console.log(myanmarCity.getRegions())`

```

[
  { name: 'Ayarwaddy', name_mm: 'ဧရာဝတီတိုင်းဒေသကြီး', code: 'AYY', id: 1 },
  { name: 'Bago', name_mm: 'ပဲခူးတိုင်း', code: 'BGO', id: 2 },
  { name: 'Chin', name_mm: 'ချင်းပြည်နယ်', code: 'CHN', id: 3 },
  { name: 'Kachin', name_mm: 'ကချင်ပြည်နယ်', code: 'KCN', id: 4 },
  { name: 'Kayar', code: 'KYR', name_mm: 'ကယားပြည်နယ်', id: 5 },
  { name: 'Kayin', name_mm: 'ကရင်ပြည်နယ်', code: 'KYN', id: 6 },
  { name: 'Magway', name_mm: 'မကွေးတိုင်း', code: 'MGW', id: 7 },
  { name: 'Mandalay', name_mm: 'မန္တလေးတိုင်း', code: 'MDY', id: 8 },
  { name: 'Mon', name_mm: 'မွန်ပြည်နယ်', code: 'MON', id: 9 },
  { name: 'Naypyitaw', name_mm: 'နေပြည်တော် နယ်မြေ', code: 'NPT', id: 10 },
  { name: 'Rakhine', code: 'RKE', id: 11, name_mm: 'ရခိုင်ပြည်နယ်' },
  { name: 'Sagaing', code: 'SGG', id: 12, name_mm: 'စစ်ကိုင်းတိုင်း' },
  { name: 'Shan', code: 'SHN', id: 13, name_mm: 'ရှမ်းပြည်နယ်' },
  { name: 'Tanintharyi', code: 'TNY', id: 14, name_mm: 'တနင်္သာရီတိုင်း'},
  { name: 'Yangon', code: 'YGN', id: 15, name_mm: 'ရန်ကုန်တိုင်းဒေသကြီး'}
]
```

- `console.log(myanmarCity.getCities(1))`

```
[
  { id: 1, name: 'ပုသိမ်' },
  { id: 2, name: 'ကန်ကြီးထောင့်' },
  { id: 3, name: 'သာပေါင်း' },
  { id: 4, name: 'ငပုတော' },
  { id: 5, name: 'ကျုံပျော်' },
  { id: 6, name: 'ရေကြည်' },
  { id: 7, name: 'ကျောင်းကုန်း' },
  { id: 8, name: 'ဟင်္သာတ' },
  { id: 9, name: 'ဇလွန်' },
  { id: 10, name: 'လေးမျက်နှာ' },
  { id: 11, name: 'မြန်အောင်' },
  { id: 12, name: 'ကြံခင်း' },
  { id: 13, name: 'အဂံပူ' },
  { id: 14, name: 'မြောင်းမြ' },
  { id: 15, name: 'အိမ်မဲ' },
  { id: 16, name: 'ဝါးခယ်မ' },
  { id: 17, name: 'လပွတ္တာ' },
  { id: 18, name: 'မအူပင်' },
  { id: 19, name: 'ပန်းတနော်' },
  { id: 20, name: 'ညောင်တုန်း' },
  { id: 21, name: 'ဓနုဖြူ' },
  { id: 22, name: 'မအူပင်' },
  { id: 23, name: 'ဖျာပုံ' },
  { id: 24, name: 'ကျိုက်လတ်' },
  { id: 25, name: 'ဘိုကလေး' },
  { id: 26, name: 'ဒေးဒရဲ' }
]

```
