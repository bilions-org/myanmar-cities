# Need Contributors

- We want to add village names associated with city

## How to Contribute

- Create a new branch and open PR

## Usage

- `let myanmarCity = require('myanmar-cities')`
- `import myanmarCity from 'myanmar-cities'`

- `console.log(myanmarCity.getRegions())`

```

[
  { id: 1, name_en: 'Ayarwaddy', name_mm: 'ဧရာဝတီတိုင်းဒေသကြီး', code: 'AYY' },
  { id: 2, name_en: 'Bago', name_mm: 'ပဲခူးတိုင်း', code: 'BGO' },
  { id: 3, name_en: 'Chin', name_mm: 'ချင်းပြည်နယ်', code: 'CHN' },
  { id: 4, name_en: 'Kachin', name_mm: 'ကချင်ပြည်နယ်', code: 'KCN' },
  { id: 5, name_en: 'Kayar', code: 'KYR', name_mm: 'ကယားပြည်နယ်' },
  { id: 6, name_en: 'Kayin', name_mm: 'ကရင်ပြည်နယ်', code: 'KYN' },
  { id: 7, name_en: 'Magway', name_mm: 'မကွေးတိုင်း', code: 'MGW' },
  { id: 8, name_en: 'Mandalay', name_mm: 'မန္တလေးတိုင်း', code: 'MDY' },
  { id: 9, name_en: 'Mon', name_mm: 'မွန်ပြည်နယ်', code: 'MON' },
  { id: 10, name_en: 'Naypyitaw', name_mm: 'နေပြည်တော် နယ်မြေ', code: 'NPT' },
  { id: 11, name_en: 'Rakhine', code: 'RKE', name_mm: 'ရခိုင်ပြည်နယ်' },
  { id: 12, name_en: 'Sagaing', code: 'SGG', name_mm: 'စစ်ကိုင်းတိုင်း' },
  { id: 13, name_en: 'Shan', code: 'SHN', name_mm: 'ရှမ်းပြည်နယ်' },
  { id: 14, name_en: 'Tanintharyi', code: 'TNY', name_mm: 'တနင်္သာရီတိုင်း' },
  { id: 15, name_en: 'Yangon', code: 'YGN', name_mm: 'ရန်ကုန်တိုင်းဒေသကြီး' }
]
```

- `console.log(myanmarCity.getCities(1))`

```
[
  { id: 1, name_mm: 'ပုသိမ်', name_en: 'Pathein' },
  { id: 2, name_mm: 'ကန်ကြီးထောင့်', name_en: 'Kangyidaunt' },
  { id: 3, name_mm: 'သာပေါင်း', name_en: 'Thabaung' },
  { id: 4, name_mm: 'ငပုတော', name_en: 'Ngaputaw' },
  { id: 5, name_mm: 'ကျုံပျော်', name_en: 'Kyonpyaw' },
  { id: 6, name_mm: 'ရေကြည်', name_en: 'Yegyi' },
  { id: 7, name_mm: 'ကျောင်းကုန်း', name_en: 'Kyaunggon' },
  { id: 8, name_mm: 'ဟင်္သာတ', name_en: 'Hinthada' },
  { id: 9, name_mm: 'ဇလွန်', name_en: 'Zalun' },
  { id: 10, name_mm: 'လေးမျက်နှာ', name_en: 'Laymyethna' },
  { id: 11, name_mm: 'မြန်အောင်', name_en: 'Myanaung' },
  { id: 12, name_mm: 'ကြံခင်း', name_en: 'Kyangin' },
  { id: 13, name_mm: 'အဂံပူ', name_en: 'Ingapu' },
  { id: 14, name_mm: 'မြောင်းမြ', name_en: 'Myaungmya' },
  { id: 15, name_mm: 'အိမ်မဲ', name_en: 'Einme' },
  { id: 16, name_mm: 'ဝါးခယ်မ', name_en: 'Wakema' },
  { id: 17, name_mm: 'လပွတ္တာ', name_en: 'Labutta' },
  { id: 18, name_mm: 'မော်လမြိုင်ကျွန်း', name_en: 'Mawlamyinegyun' },
  { id: 19, name_mm: 'ပန်းတနော်', name_en: 'Pantanaw' },
  { id: 20, name_mm: 'ညောင်တုန်း', name_en: 'Nyaungdon' },
  { id: 21, name_mm: 'ဓနုဖြူ', name_en: 'Danubyu' },
  { id: 22, name_mm: 'မအူပင်', name_en: 'Maubin' },
  { id: 23, name_mm: 'ဖျာပုံ', name_en: 'Pyapon' },
  { id: 24, name_mm: 'ကျိုက်လတ်', name_en: 'Kyaiklat' },
  { id: 25, name_mm: 'ဘိုကလေး', name_en: 'Bogale' },
  { id: 26, name_mm: 'ဒေးဒရဲ', name_en: 'Dedaye' }
]

```
