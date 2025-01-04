'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { DollarSign, ChevronLeft, ChevronRight, MessageSquareText } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useState } from 'react'


interface SaleItem {
  id: number;
  title: string;
  description: string;
  price: number;
  paypalLink: string;
  images: string[];
}

const saleItems: SaleItem[] = [
  {
    id: 1,
    title: "Bean Bag",
    description: "Comfortable bean bag in good condition, perfect for your living room. Original price €50.",
    price: 15,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/bean.jpg","/bean2.jpg"]
  },
  {
    id: 2,
    title: "Dining Table",
    description: "White dining table with 4 chairs, ideal for small apartments.",
    price: 30,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/yomat.jpg",]
  },
  {
    id: 3,
    title: "Yoga Matt",
    description: "Orange yoga mat, 94cm x 200cm, barely used. Original price 40€.",
    price: 10,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/yomat.jpg",]
  },

  {
    id: 4,
    title: "Wardrobe",
    description: "Sturdy bookshelf with 5 shelves, great for organizing your books and decor.",
    price: 80,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/wardrobe.jpg","/wardrobe2.jpg"]
  },

  {
    id: 5,
    title: "Chair",
    description: "Charming yellow chair, gently used, adds a vibrant touch to any room! Price for two",
    price: 10,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/chair.jpg",]
  },

  {
    id: 6,
    title: "Hanger",
    description: "Ikea hanger, gently used, adds a vibrant touch to any room! Price for two",
    price: 0,
    paypalLink: "https://www.paypal.me/gyurikim968",
    images: ["/chair.jpg",]
  },
]

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<SaleItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleContact = () => {
    
      const phoneNumber = "+49015259830847"; // Replace with your phone number
      navigator.clipboard.writeText(phoneNumber);
      alert(`Phone number ${phoneNumber} copied to clipboard!`);
      window.location.href = `sms:${phoneNumber}`
    
  }

  const handlePayment = (item: SaleItem) => {
    window.open(item.paypalLink, '_blank')
  }

  const handlePrevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedItem.images.length - 1 : prevIndex - 1
      )
    }
  }

  const handleNextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedItem.images.length - 1 ? 0 : prevIndex + 1
      )
    }
  }

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {saleItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative h-48 cursor-pointer">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover"
                    onClick={() => {
                      setSelectedItem(item)
                      setCurrentImageIndex(0)
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
  <p className="text-muted-foreground mb-4">{item.description}</p>
  <p className="text-2xl font-bold mb-4">
    {item.price === 0 ? 'FREE' : `€${item.price}`}
  </p>
</CardContent>
            <CardFooter className="flex flex-row space-x-4">
  <Button
    onClick={() => handleContact()}
      
    className="flex-1"
  >
    <MessageSquareText className="mr-2 h-4 w-4" /> Contact
  </Button>

  <Button
    onClick={() => handlePayment(item)}
    className="flex-1"
  >
    <DollarSign className="mr-2 h-4 w-4" /> Pay
  </Button>
</CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}

