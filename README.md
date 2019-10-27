# DEIPNON

Projeyi localinize indirdikten sonra dev branchına geçin.

```
git checkout dev
```

Sonra ana paketleri yükleyin.

```
npm install yada yarn install
```

Daha sonra alt paketler için NPM modüllerini yükleyin.

```
npm run install:all
```

yada

```
yarn install:all
```

## Çalıştırma Scriptleri

Alfabetik sıra ile;

#### addpackage

Lerna paketlerine npm paketi eklemek için kullanılıyor ama bunu doğrudan çağırmanıza gerek yok, sadece yardımcı bir komut.

#### api:addpackage

Herhangi bir npm paketini (örneğin ramda) apiye eklemek için gerekli komut. Doğrudan packages/api dizini altına gidip standard ekleme işlemi de yapabilirsiniz yada aşağıdaki komutu kullanabilirsiniz.

```
npm run api:addpackage npm_paket_adı
```

yada

```
yarn api:addpackage npm_paket_adı
```

#### api:dev

Sadece apiyi ve onun bağımlı olduğu paketleri development modunda çalıştırır.

#### clean:all

/packages altında yer alan bütün paketlerin node_modules klasörünü siler. NPM paketlerini yeniden kurmadan önce çalıştırılabilir.

#### components:addpackage

Herhangi bir npm paketini (örneğin ramda) components paketine eklemek için gerekli komut. Doğrudan packages/components dizini altına gidip standard ekleme işlemi de yapabilirsiniz yada aşağıdaki komutu kullanabilirsiniz.

```
npm run components:addpackage npm_paket_adı
```

yada

```
yarn components:addpackage npm_paket_adı
```

#### components:dev

Sadece components paketini ve onun bağımlı olduğu paketleri development modunda çalıştırır. Doğrudan kullanmaya gerek yok.

#### components:test

Components paketinde yer alan testleri çalıştırır.

#### components:test:update

Components paketinde daha önceden oluşturulmuş snapshotları günceller.

#### dashboard:addpackage

Herhangi bir npm paketini (örneğin ramda) dashboard paketine eklemek için gerekli komut. Doğrudan packages/dashboard dizini altına gidip standard ekleme işlemi de yapabilirsiniz yada aşağıdaki komutu kullanabilirsiniz.

```
npm run dashboard:addpackage npm_paket_adı
```

yada

```
yarn dashboard:addpackage npm_paket_adı
```

#### dashboard:dev

Sadece dashboard paketini ve onun bağımlı olduğu paketleri development modunda çalıştırır. API de bu işlemlere dahil.

#### eslint

Eslint çalıştırır ve kodlardaki problemleri bulur ve düzeltebiliyorsa düzeltir. Ayrıca IDE'nizde eslint plugini kullanmanızı tavsiye ederim.

#### install:all

Tüm alt paketler için NPM modüllerini kurar.

#### lerna

Standard lerna komutu. Ayrıca kullanmaya çok gerek yok.

#### lerna:ls

Projedeki alt paketleri listeler. Örnek: @deipnon/api

#### storybook

Component paketi için storybooku çalıştırır.

#### website:addpackage

Herhangi bir npm paketini (örneğin ramda) website paketine eklemek için gerekli komut. Doğrudan packages/website dizini altına gidip standard ekleme işlemi de yapabilirsiniz yada aşağıdaki komutu kullanabilirsiniz.

```
npm run website:addpackage npm_paket_adı
```

yada

```
yarn website:addpackage npm_paket_adı
```

#### website:dev

Sadece website paketini ve onun bağımlı olduğu paketleri development modunda çalıştırır. API de bu işlemlere dahil.

#### test:all

Bütün paketlerdeki testleri çalıştırır.
