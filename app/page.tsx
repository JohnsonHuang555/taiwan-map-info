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
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col overflow-auto">
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
