import { Injectable } from '@angular/core';
import { Item } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  item: Item[] = [
    {
      id: "c1",
      foto: [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-7500099/armageddon_pc_rakitan_i5-cpu_core_i5-ddr3_8gb_full03_c6ud9mu2.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/811LCwq50qL._AC_SX522_.jpg"
      ],
      merek: "Armageddon",
      model: "MTA-7500099",
      baseClock: 3.7,
      boostClock: 4.2,
      core: 4,
      thread: 8,
      harga: 5250000,
      stok: 10
    },
    {
      id: "r1",
      foto: [
        "https://m.media-amazon.com/images/I/61Mo5QjeXwL.jpg",
        "https://mcsf23.com/wp-content/uploads/2018/09/bootstrap-carousel-auto-cycle.jpg"
      ],
      merek: "G.SKILL",
      model: "Z RGB",
      speed: 3200,
      ukuran: 44,
      harga: 6791000,
      stok: 1
    },
    {
      id: "m1",
      foto: [
        "https://dlcdnimgs.asus.com/websites/global/products/3sionarqr8hwhh2x/img/z490/kv/hero.png",
        "https://i.ytimg.com/vi/Ot4Hjje5oDM/hqdefault.jpg",
        "https://thumbs.dreamstime.com/z/clown-rides-carousel-horse-red-balloon-man-image-his-hand-158957137.jpg"
      ],
      merek: "ASUS",
      model: "Strix B460-H",
      chipset: "Intel B460",
      prosesor: "Celeron",
      harga: 2066266,
      stok: 3
    },
    {
      id: "g1",
      foto: [
        "https://ecs7.tokopedia.net/img/cache/700/product-1/2019/3/22/13757756/13757756_1a6d2b8c-fd81-4eb8-acae-f9a0e19d3398_700_437.png",
        "https://images.bridestory.com/image/upload/v1499484834/assets/tcclogo2017_fyh2mu.jpg"
      ],
      merek: "Quadro",
      model: "RTX 8000",
      harga: 135000000,
      stok: 12
    },
    {
      id: "g2",
      foto: [
        "https://www.quadra.id/wp-content/uploads/2019/11/MSI-1650-Super-VEntus-XS.png",
        "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/09/13/2195185234.jpg"
      ],
      merek: "MSI",
      model: "GTX 1650 SUPER GAMING X",
      harga: 3305000,
      stok: 0
    }
  ];

  constructor() { }

  getAllItem() {
    return [...this.item];
  }

  getItem(itemId: string) {
    return {...this.item.find(item => {
      return item.id === itemId;
    })};
  }

  deleteItem(itemId: string) {
    this.item = this.item.filter(item => {
      return item.id !== itemId;
    });
  }
}
