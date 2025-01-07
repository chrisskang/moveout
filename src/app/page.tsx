'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { DollarSign, ChevronLeft, ChevronRight, MessageSquareText } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useState } from 'react'


interface SaleItem {
  title: string;
  description: string;
  price: number;
  paypalLink: string;
  images: string[];
  sold: boolean;
}

const saleItems: SaleItem[] = [
  {    title: "Bean Bag",
    description: "Comfortable bean bag in mint condition, perfect for your living room. Original price €50.",
    price: 15,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/bean.jpg","/images/bean2.jpg"],
    sold: false
  },
  
  {    title: "Yoga Matt",
    description: "Orange yoga mat, 94cm x 200cm, barely used. Original price 40€.",
    price: 10,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/yomat.jpg",],
    sold: true
  },

  {    title: "Wardrobe",
    description: "Sturdy wardrobe with two compartments, perfect for storing your clothes and shoes. Size 80cm x 180cm x 50cm. IKEA",
    price: 0,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/wardrobe.jpg","/images/wardrobe2.jpg"],
    sold: true
  },

  {    title: "Chair",
    description: "Charming yellow chair, gently used, adds a vibrant touch to any room! Price for two",
    price: 10,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/chair.jpg",],
    sold: true
  },

  {    title: "Dining Table",
    description: "White dining table for small kitchen. 80cm DIA. Original price 130€.",
    price: 50,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/kitchen_table.jpg",],
    sold: false
  },

  {
    title: "Poang Chair",
    description: "IKEA POANG comfortable chair, good condition, extra cozy with a cushion. Original Price €129,99",
    price: 40,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/poang.jpg",],
    sold: true
  },
  {    title: "Hanger",
    description: "Ikea MULIG hanger, gently used. 152 x 99 x 46 cm",
    price: 0,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/hanger.jpg",],
    sold: true
  },
  {    title: "Big Trash Can",
    description: "Pedal trash can, good condition and cleaned inside and out. 63 x 48 x 30cm & 50L. Original price 30€.",
    price: 10,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/big_trash.jpg",],
    sold: false
  },
  {    title: "Medium Trash Can",
    description: "Trash can, good condition and cleaned inside and out. 47 x 34 x 26cm & 50L. Original price 21€.",
    price: 5,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/small_trash.jpg",],
    sold: false
  },

  {
    title: "White Table",
    description: "Good quality white table with shiny steel legs, 94.5 x 67cm. Expandible feature to 144.5cm (+26 both sides)",
    price: 10,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/white_table.jpg","/images/white_table2.jpg","/images/white_table3.jpg","/images/white_table4.jpg"],
    sold: false
  },

  {
    title: "Microwave Oven",
    description: "Nice microwave + oven for various cooking needs, suitable for small house. Equipped with Air frying, steaming, roasting feature. Deep cleaned inside out. Original price €199 https://tinyurl.com/2ufx8znh",
    price: 100,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/microwave.jpg",],
    sold: false
  },
  {
    title: "Tall Shelf",
    description: "IKEA Shelf, 163cm x 33cm x 28cm, Painted myself, not so water friendly https://tinyurl.com/5xue5ryz",
    price: 0,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/tall_shelf.jpg","/images/tall_shelf2.jpg"],
    sold: true
  },
  {
    title: "Big Wardrobe",
    description: "IKEA Wardrobe, 176cm x 117cm x 36cm, two compartments, one with hanger, one with shelves. Original Price €119. Price negotiable https://tinyurl.com/e9jauavn",
    price: 30,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/big_wardrobe.jpg","/images/big_wardrobe2.jpg","/images/big_wardrobe3.jpg",],
    sold: true
  },
  {
    title: "Desk lamp",
    description: "IKEA KVART desk lamp",
    price: 10,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/lamp.jpg","/images/lamp2.jpg"],
    sold: false
  },

  {
    title: "Drawer",
    description: "Decent drawer 40 x 78cm, white, mint condition. Original Price €59,99 , https://tinyurl.com/49zr8pv2",
    price: 25,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/drawer.jpg","/images/drawer2.jpg",],
    sold: false
  },
  {
    title: "Shelf",
    description: "IKEA KALLAX 39 x 41.5 x 111.5cm, white, Original Price €44,99 , https://tinyurl.com/5a43uj8s",
    price: 15,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/shelf.jpg",],
    sold: false
  },
  {
    title: "Vacuum",
    description: "Clatronic BS 1300 N, 700W, compatible with filter SSB98/Swirl Y298 ",
    price: 0,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/vacuum.jpg","/images/vacuum2.jpg",],
    sold: true
  },
  {
    title: "Portfolio bag",
    description: "Good for carrying big size documents. A2 Size, water resistant - plastic material, cost for two",
    price: 10,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/portfolio_bag.jpg","/images/portfolio_bag2.jpg",],
    sold: false
  },
  {
    title: "Carpet",
    description: "Beige, 120 x 170cm, good condition",
    price: 0,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/carpet.jpg",],
    sold: true
  },
  {
    title: "Wood Table",
    description: "Gently used work table. Big enough for anything. Vertical adjustment possible. 120cm x 82cm",
    price: 10,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/wood_table.jpg",],
    sold: true
  },




]
function makeLinksClickable(text: string) {
  // Regex to find all URLs
  const URL_REGEX = /https?:\/\/[^\s]+/g;

  // Replace URLs with <a> tags
  return text.replace(URL_REGEX, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600">${url}</a>`;
  });
}

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<SaleItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleContact = () => {
    const phoneNumber = "+49015259830847";
    window.location.href = `sms:${phoneNumber}`;
  };

  const handlePayment = (item: SaleItem) => {
    window.open(item.paypalLink, '_blank');
  };

  const handlePrevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedItem.images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedItem.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {saleItems.map((item) => (
        <Card key={item.title} className="relative overflow-hidden">
            {item.sold && (
              <div className="absolute top-5 right-5 bg-orange-500 text-2xl text-white py-1 px-10 transform rotate-45 translate-x-[30%] translate-y-[30%] z-10">
                Reserved
              </div>
            )}
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative aspect-square cursor-pointer">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover"
                    onClick={() => {
                      setSelectedItem(item);
                      setCurrentImageIndex(0);
                    }}
                  />
                  {item.images.length > 1 && (
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                      +{item.images.length - 1}
                    </div>
                  )}
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px]">
                <DialogTitle>{item.title}</DialogTitle>
                <div className="mt-2 relative">
                  <Image
                    src={selectedItem?.images[currentImageIndex] || ''}
                    alt={`${item.title} - Image ${currentImageIndex + 1}`}
                    width={800}
                    height={800}
                    className="w-full h-auto"
                  />
                  {selectedItem && selectedItem.images.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2"
                        onClick={handlePrevImage}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        onClick={handleNextImage}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </DialogContent>
            </Dialog>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Use dangerouslySetInnerHTML to render clickable links */}
              <p
                className="text-muted-foreground mb-4"
                dangerouslySetInnerHTML={{ __html: makeLinksClickable(item.description) }}
              />
              <p className="text-2xl font-bold mb-4">
                {item.price === 0 ? 'FREE' : `€${item.price}`}
              </p>
            </CardContent>
            <CardFooter className="flex flex-row space-x-4">
              <Button onClick={() => handleContact()} className="flex-1">
                <MessageSquareText className="mr-2 h-4 w-4" /> Contact
              </Button>

              <Button onClick={() => handlePayment(item)} className="flex-1">
                <DollarSign className="mr-2 h-4 w-4" /> Pay
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}