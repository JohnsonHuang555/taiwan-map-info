'use client';

import Image from 'next/image';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

const artGalleries = [
  {
    id: 1,
    name: '台北市立美術館',
    address: '台北市中山區中山北路三段181號',
    description: '台灣首座現代美術館，主要收藏與展示現代與當代藝術作品。',
    url: 'https://www.tfam.museum/',
    left: 723,
    top: 123,
  },
  {
    id: 2,
    name: '台北當代藝術館',
    address: '台北市大同區長安西路39號',
    description: '專注於當代藝術的展覽與推廣。',
    url: 'https://www.mocataipei.org.tw/',
    left: 720,
    top: 130,
  },
  {
    id: 3,
    name: '鳳甲美術館',
    address: '台北市北投區大業路166號',
    description: '成立於1999年，致力於推廣當代藝術與社區文化。',
    url: 'https://www.honggahmuseum.org.tw/',
    left: 710,
    top: 110,
  },
  {
    id: 4,
    name: '瑩瑋藝術翡翠文化博物館',
    address: '台北市中山區樂群二路201號',
    description: '專門展示翡翠藝術品的博物館。',
    url: 'https://www.museumofjadeart.com/',
    left: 725,
    top: 125,
  },
  {
    id: 5,
    name: '朱銘美術館',
    address: '新北市金山區西勢湖2號',
    description:
      '由雕塑家朱銘於1999年創立，是台灣最大的戶外美術館，展示朱銘及其他藝術家的雕塑作品。',
    url: 'https://www.juming.org.tw/',
    left: 700,
    top: 100,
  },
  {
    id: 6,
    name: '順益台灣原住民博物館',
    address: '台北市士林區至善路二段282號',
    description: '專門展示台灣原住民文物及歷史，於1994年開幕。',
    url: 'https://www.museum.org.tw/',
    left: 715,
    top: 115,
  },
  {
    id: 7,
    name: '袖珍博物館',
    address: '台北市中山區建國北路一段96號',
    description: '亞洲第一家以袖珍藝術為主題的博物館，展示多達200件主題作品。',
    url: 'https://www.mwr.org.tw/',
    left: 720,
    top: 128,
  },
  {
    id: 8,
    name: 'Jut Art Museum',
    address: '台北市大安區建國南路一段178號',
    description: '成立於2016年，專注於現代藝術與建築的展覽。',
    url: 'https://www.jutartmuseum.org/',
    left: 725,
    top: 135,
  },
  {
    id: 9,
    name: '台灣設計館',
    address: '台北市信義區光復南路133號',
    description: '位於松山文創園區內，展示台灣設計相關作品。',
    url: 'https://www.tdcd.org.tw/',
    left: 730,
    top: 140,
  },
  {
    id: 10,
    name: '李澤藩美術館',
    address: '新竹市東區東大路一段1號',
    description: '主要收藏與展示畫家李澤藩的作品，成立於1994年。',
    url: 'https://www.hcccb.gov.tw/zh-tw/Content/Content?NodeID=659',
    left: 650,
    top: 220,
  },
  {
    id: 11,
    name: '國立台灣美術館',
    address: '台中市西區五權西路一段2號',
    description:
      '成立於1988年，是台灣唯一的國家級美術館，主要展示台灣現代與當代藝術作品。',
    url: 'https://www.ntmofa.gov.tw/',
    left: 428,
    top: 396,
  },
  {
    id: 12,
    name: '亞洲大學現代美術館',
    address: '台中市霧峰區柳豐路500號',
    description: '由建築師安藤忠雄設計，於2013年開幕，主要展示現代藝術作品。',
    url: 'https://museum.asia.edu.tw/',
    left: 430,
    top: 420,
  },
  {
    id: 13,
    name: '彰化縣立美術館',
    address: '彰化縣彰化市卦山路3號',
    description:
      '建築外觀採用樹枝狀的鋼柱結構，強調將自然生態融入現代建築中，展覽涵蓋國內外知名藝術家作品。',
    url: 'https://www.chmaf.gov.tw/',
    left: 410,
    top: 450,
  },
  {
    id: 14,
    name: '嘉義市立美術館',
    address: '嘉義市西區廣寧街101號',
    description: '成立於2020年，展示多元藝術作品。',
    url: 'https://chiayiartmuseum.chiayi.gov.tw/',
    left: 390,
    top: 500,
  },
  {
    id: 15,
    name: '台南市美術館',
    address: '台南市中西區忠義路二段1號',
    description:
      '分為兩館，第一館為1931年建成的原台南警察署，第二館由建築師坂茂設計，於2019年開幕，致力於發掘與展示台灣在地藝術。',
    url: 'https://www.tnam.museum/',
    left: 370,
    top: 600,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-items-center">
      <main className="flex flex-col items-center">
        <div className="relative h-full w-[1000px]">
          <Image
            src="/taiwan-map.jpg"
            alt="map"
            style={{ width: '100%', height: '100%' }}
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
                <HoverCardTrigger className="mr-2 h-3 w-3 rounded-full bg-red-600"></HoverCardTrigger>
                <HoverCardContent>{gallery.name}</HoverCardContent>
              </HoverCard>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
