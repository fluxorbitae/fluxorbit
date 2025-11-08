import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input, Textarea, Button, Card, CardBody } from "@heroui/react";


export const metadata = { title: "İletişim | FluxOrbit" };


export default function ContactPage(){
return (
<>
<Navbar/>
<main className="mx-auto max-w-3xl px-4 py-16">
<Card>
<CardBody className="p-6 md:p-8">
<h1 className="h2 mb-2">İletişim</h1>
<p className="p-lg mb-6">Projenizi 15 dakikada değerlendirip yol haritası çıkaralım.</p>
<form action="https://formspree.io/f/your-id" method="POST" className="grid gap-4">
<Input isRequired name="name" label="Ad Soyad" variant="bordered"/>
<Input isRequired type="email" name="email" label="E‑posta" variant="bordered"/>
<Input name="website" label="Web site (varsa)" variant="bordered"/>
<Textarea isRequired name="message" label="Hedefleriniz ve bütçe aralığı" minRows={4} variant="bordered"/>
<Button color="primary" type="submit">Gönder</Button>
</form>
</CardBody>
</Card>
</main>
<Footer/>
</>
)
}