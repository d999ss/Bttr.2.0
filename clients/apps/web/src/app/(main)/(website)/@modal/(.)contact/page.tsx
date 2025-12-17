import { ContactModal } from '@/components/Modal/ContactModal'
import { ContactContent } from '@/components/Contact/ContactContent'

export default function ContactModalPage() {
  return (
    <ContactModal>
      <ContactContent isModal />
    </ContactModal>
  )
}
