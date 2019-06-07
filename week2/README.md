## 1. Adim: map, filter and `=>`

**1.1** Bir dizideki cift sayilari diziden cikaran ve kalan tek sayilarin iki katini alarak yeni bir dizi olusturan bir program yapmak istediginizi varsayalim.

Cozumunuz su sekilde olabilirdi:

```js
function doubleOddNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]
```

Yukaridaki `doubleOddNumbers` fonksiyonunu `map` ve `filter` kullanarak yeniden yazmaya calisin. `=>` kullanmayi unutmayin.

---

**1.2** Asagida Maartje'nin islerini gosteren basit bir dizi goruyorsunuz:

```js
const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];
```

_Not: duration dakika olarak belirtilmistir._

`map` ve `filter` kullanarak Maartje'nin tum isleri tamamladiginda ne kadar kazadigini gosteren bir program yazin. 'Toplama islemi' icin `reduce` kullanarak sansinizi deneyebilirsiniz. Alternatif olarak `forEach` ya da `for` dongusu de kullanabilirsiniz.

Asagidaki adimlari takip edin. 

Follow these steps. Her adım önceki adımın sonucuna dayanmalıdır.

- Gorevleri saat cinsinden eslestirin
- 2 saatten az olan tum isleri filtreleyin (listeden cikarin).
- Faturalandırma için her sureyi saat başına €20 ile carpin ve hepsini toplayın.
- Sonucu yuvarlanmis bir bicimde yazdirin. Ornegin `€11.34`.
- Parametre ve degisken adlari secerken icerigini ve amacini en dogru sekilde tanimlayan isimler secmeye ozen gosterin. Dizi kullanacaginiz zaman cogul bir isim kullanin `durations`. Tek bir eleman icin tekil isim kullanin `duration` gibi.
- `=>` kullanmayi unutmayin

## 2. Adim: Odevinizi test edin

Bu repoda, odevinizin beklenen sonuçları verdiğini doğrulamanıza izin veren _unit testleri_ yazilmistir.

> **Unit test**: _Unit test_, başka bir kod parçasını çağıran ve daha sonra bazı varsayımların doğruluğunu kontrol eden bir kod parçasıdır (genellikle bir fonksiyondur). Varsayımların yanlış olduğu ortaya çıkarsa, ünite testi başarısız olmuştur. 'Unit' bir metot veya fonksiyondur.

Bu noktada unit testlerin nasil calistigini anlamaniz onemli degildir. 
At this point it is not important to understand how unit tests work. Şimdi bilmeniz gereken tek şey testleri nasıl yapacağınızı ve ödevinizin doğru sonuçları sağlayıp sağlamadığının nasıl belirleneceğidir.

#### Testleri calistirin

2. haftadaki ödevinizi asagidaki komutu terminal penceresine yazarak test edebilirsiniz:

```
npm run test-week2
```

Testler çalışırken bazı çıktıların konsolda göründüğünü göreceksiniz. Her şey yolundaysa (hata yok), son iki satır şöyle görünecektir:

```
Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.849s
Ran all test suites matching /Week2\//i.
```

Beklenmeyen sonuçlarda, _Maartjes work_ ödevinden, şöyle bir şey görebilirsiniz (biraz yukarı kaydırmanız gerekebilir):

```
Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        1.255s
Ran all test suites matching /Week2\//i.
```

Yukaridaki gibi bir hata ile karsilastiginizda hatayı bulup düzeltmeye çalışın. Tamamlandığında, testleri tekrar çalıştırın: `npm run test-week2`

### Odevi nasil tamamlayacaksiniz?:

Son bir kez ev ödevinizi gözden geçirin:

- Odeviniz tum unit testleri basariyla gecti mi?
- Butun dosyalar `'use strict';` ile basliyor mu?
- Degisken, fonksiyon ve parametre isimlendirmeleriniz duzgun mu?
- ESLint ve spell checker ile gosterilen butun hatalari duzelttiniz mi? (VSCode da alti yesil ve kirmizi cizgili hicbir kod kalmamali).

Tum adimlar tamamlanmissa odevinizi push edip pull request yapabilirsiniz.
