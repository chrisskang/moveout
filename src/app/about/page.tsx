import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Our Moveout Sale</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Welcome to our moveout sale! We are relocating and need to find new homes for our beloved furniture and household items.
        </p>
        <p className="mb-4">
          All items has been used with care and are in great condition. It is available for pickup at Sattlerstrasse 2. We are open to reasonable offers.
        
        </p>
        <h3 className="text-xl font-semibold mb-2">Sale Details:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Date: 07.01 - 31.01</li>
          <li>Location: Kim & Kang, Sattlerstrasse 2, 70174, Stuttgart</li>
        </ul>
        <p className="mb-4">
          Payment can be made via PayPal or cash upon pickup. For any questions, please use the contact button on the item you are interested in.
        </p>
        <p>
          Thank you for your interest, and we hope you find something you love!
        </p>
      </CardContent>
    </Card>
  )
}

