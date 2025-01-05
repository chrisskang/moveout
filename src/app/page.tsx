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
}

const saleItems: SaleItem[] = [
  {    title: "Bean Bag",
    description: "Comfortable bean bag in mint condition, perfect for your living room. Original price €50.",
    price: 15,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/bean.jpg","/images/bean2.jpg"]
  },
  
  {    title: "Yoga Matt",
    description: "Orange yoga mat, 94cm x 200cm, barely used. Original price 40€.",
    price: 10,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/yomat.jpg",]
  },

  {    title: "Wardrobe",
    description: "Sturdy wardrobe with two compartments, perfect for storing your clothes and shoes. Size 80cm x 180cm x 50cm. IKEA",
    price: 0,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/wardrobe.jpg","/images/wardrobe2.jpg"]
  },

  {    title: "Chair",
    description: "Charming yellow chair, gently used, adds a vibrant touch to any room! Price for two",
    price: 10,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/images/chair.jpg",]
  },

  {    title: "Dining Table",
    description: "White dining table for small kitchen. 80cm DIA. Original price 130€.",
    price: 50,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/file.svg",]
  },
  {    title: "Hanger",
    description: "Ikea hanger, gently used, adds a vibrant touch to any room! Price for two",
    price: 0,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/file.svg",]
  },
  {    title: "Big Trash Can",
    description: "Pedal trash can, good condition and cleaned inside and out. 63 x 48 x 30cm & 50L. Original price 30€.",
    price: 10,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/file.svg",]
  },
  {    title: "Medium Trash Can 2",
    description: "Trash can, good condition and cleaned inside and out. 47 x 34 x 26cm & 50L. Original price 21€.",
    price: 5,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/file.svg",]
  },
  {
    title: "Wood Table",
    description: "Gently used work table. Big enough for anything. vertical adjustment possible. 120cm x 82cm",
    price: 5,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/file.svg",]
  },
  {
    title: "White Table",
    description: "Good quality white table with shiny steel legs, 94.5 x 67cm. Expandible feature to 144.5cm (+26 both sides)",
    price: 5,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/file.svg",]
  },

  {
    title: "Microwave Oven",
    description: "Nice microwave + oven for various cooking needs, suitable for small house. Equipped with Air frying, steaming, roasting feature. 52 x 31 x 39cm. Original price €199 https://tinyurl.com/2ufx8znh",
    price: 100,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/file.svg",]
  },
  {
    title: "Tall Shelf",
    description: "IKEA Shelf, 163cm x 33cm x 28cm, Painted myself, not so water friendly https://tinyurl.com/5xue5ryz",
    price: 0,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/file.svg",]
  },
  {
    title: "Big Wardrobe",
    description: "IKEA Wardrobe, 176cm x 117cm x 36cm, two compartments, one with hanger, one with shelves. Original Price 119. Price negotiable https://tinyurl.com/e9jauavn",
    price: 30,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/file.svg",]
  },
  {
    title: "Desk lamp",
    description: "IKEA desk lamp",
    price: 10,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/file.svg",]
  },

  {
    title: "Drawer",
    description: "Decent drawer 40 x 78cm, https://tinyurl.com/49zr8pv2",
    price: 0,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/file.svg",]
  },
  {
    title: "Shelf",
    description: "22 https://tinyurl.com/5a43uj8s",
    price: 10,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/file.svg",]
  },
  {
    title: "Vacuum",
    description: "22",
    price: 0,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/file.svg",]
  },
  {
    title: "Portfolio bag",
    description: "22",
    price: 0,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/file.svg",]
  },
  {
    title: "Carpet",
    description: "22",
    price: 0,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/file.svg",]
  },
  {
    title: "Poang Chair",
    description: "22",
    price: 0,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/file.svg",]
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
          <Card key={item.title} className="overflow-hidden">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative h-48 cursor-pointer">
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
                    height={600}
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