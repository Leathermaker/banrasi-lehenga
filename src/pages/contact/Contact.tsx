
import Map from "./components/Map"
import ContactForm from "./components/ContactForm"
import ContactInfo from "./components/ContactInfo"
import ContactHeader from "./components/ContactHeader"
import { WideScreenhandler } from "../../components"
import ContactFaq from "./components/Contact.Faq"

// FAQ data


export default function ContactPage() {


    return (
        <main className=" bg-white pb-12">
            <ContactHeader />
            <WideScreenhandler>
                <div className="grid md:grid-cols-2 gap-12 items-start py-12">
                    <ContactInfo />
                    <ContactForm />
                </div>
                <Map />
                <ContactFaq />
            </WideScreenhandler>


        </main>
    )
}
