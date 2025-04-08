'use client';

import Image from 'next/image';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

type Gallery = {
  id: number;
  name: string;
  address: string;
  url: string;
  left: number;
  top: number;
};

const artGalleries: Gallery[] = [
  {
    id: 1,
    name: '台北市立美術館',
    address: '台北市中山區中山北路三段181號',
    url: 'https://www.tfam.museum/',
    left: 723,
    top: 123,
  },
  {
    id: 2,
    name: '鳳甲美術館',
    address: '台北市北投區大業路166號11F',
    url: 'https://www.tfam.museum/',
    left: 705,
    top: 101,
  },
  {
    id: 3,
    name: '朱銘美術館',
    address: '新北市金山區西勢湖2號',
    url: 'https://www.juming.org.tw/mainssl/modules/MySpace/index.php',
    left: 732,
    top: 58,
  },
  {
    id: 4,
    name: '忠泰美術館',
    address: '台北市大安區市民大道三段178號',
    url: 'https://jam.jutfoundation.org.tw/en',
    left: 724,
    top: 114,
  },
  {
    id: 5,
    name: '李澤藩美術館',
    address: '新竹市東區林森路57號3樓',
    url: 'http://www.tzefan.org.tw/index.html',
    left: 523,
    top: 207,
  },
  {
    id: 6,
    name: '國立臺灣美術館',
    address: '台中市西區五權西路一段2號',
    url: 'https://www.ntmofa.gov.tw/',
    left: 431,
    top: 397,
  },
  {
    id: 7,
    name: '亞洲大學附屬現代美術館',
    address: '台中市霧峰區柳豐路500號',
    url: 'https://asiamodern.asia.edu.tw/',
    left: 448,
    top: 426,
  },
  {
    id: 8,
    name: '彰化縣立美術館',
    address: '彰化縣彰化市卦山路3號',
    url: 'https://fam.bocach.gov.tw/',
    left: 393,
    top: 429,
  },
  {
    id: 9,
    name: '嘉義市立美術館',
    address: '嘉義市西區廣寧街101號',
    url: 'https://chiayiartmuseum.chiayi.gov.tw/',
    left: 366,
    top: 620,
  },
  {
    id: 10,
    name: '臺南市美術館',
    address: '台南市中西區忠義路二段1號',
    url: 'https://www.tnam.museum/',
    left: 286,
    top: 766,
  },
  {
    id: 11,
    name: '高雄市立美術館',
    address: '高雄市鼓山區美術館路80號',
    url: 'https://www.kmfa.gov.tw/Exhibition.aspx',
    left: 323,
    top: 884,
  },
  {
    id: 12,
    name: '桃園市兒童美術館',
    address: '桃園市中壢區高鐵南路二段90號',
    url: 'https://tmofa.tycg.gov.tw/',
    left: 612,
    top: 137,
  },
  {
    id: 13,
    name: '毓繡美術館',
    address: '南投縣草屯鎮健行路150巷26號',
    url: 'https://www.yu-hsiu.org/',
    left: 461,
    top: 463,
  },
  {
    id: 14,
    name: '臺東美術館',
    address: '台東縣台東市浙江路350號',
    url: 'https://tm.ccl.ttct.edu.tw/',
    left: 591,
    top: 833,
  },
  {
    id: 15,
    name: '梅嶺美術館',
    address: '嘉義縣朴子市山通路2之9號',
    url: 'https://cypac.cyhg.gov.tw/meiling/',
    left: 311,
    top: 626,
  },
  {
    id: 16,
    name: '屏東美術館',
    address: '屏東縣屏東市中正路74號',
    url: 'http://ptam.ptcg.gov.tw/',
    left: 383,
    top: 878,
  },
  {
    id: 17,
    name: '新竹市美術館',
    address: '新竹市東區中央路116號',
    url: 'https://hsinchucitymuseum.hccg.gov.tw/',
    left: 529,
    top: 202,
  },
  {
    id: 18,
    name: '花蓮美術館',
    address: '花蓮縣花蓮市文復路4號',
    url: 'http://www.hccc.gov.tw/zh-tw/Pavilions/Detail/Museum-of-Fine-Arts',
    left: 733,
    top: 453,
  },
  {
    id: 19,
    name: '宜蘭美術館',
    address: '宜蘭縣宜蘭市中山路三段1號',
    url: 'https://ymoa.e-land.gov.tw/',
    left: 778,
    top: 248,
  },
  {
    id: 20,
    name: '關渡美術館',
    address: '台北市北投區學園路1號',
    url: 'http://kdmofa.tnua.edu.tw/',
    left: 697,
    top: 103,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col overflow-auto">
        <div className="relative h-full w-[1000px]">
          <Image
            src="/taiwan-map.jpg"
            alt="map"
            style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
            width={0}
            height={0}
            priority
            unoptimized={true}
          />
          {artGalleries.map(gallery => (
            <div
              key={gallery.id}
              style={{
                top: `${gallery.top}px`,
                left: `${gallery.left}px`,
                zIndex: gallery.id,
              }}
              className="absolute flex items-center"
            >
              <HoverCard>
                <HoverCardTrigger className="h-[14px] w-[14px] rounded-full border bg-red-600 shadow-md" />
                <HoverCardContent>
                  <div className="flex flex-col">
                    <div className="mb-2 font-semibold">{gallery.name}</div>
                    <div className="text-sm">{gallery.address}</div>
                    <a
                      href={gallery.url}
                      target="_blank"
                      className="text-sm text-blue-800 underline"
                    >
                      {gallery.url}
                    </a>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
